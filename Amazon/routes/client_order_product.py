
from fastapi import APIRouter, HTTPException, Depends
from pydantic import BaseModel
from typing import Optional
from prisma_client import prisma
from auth import get_current_member
from seed import PENDING_STATUS

router = APIRouter()


class CLIENT_ORDER_PRODUCT_SCHEMA(BaseModel):
    product_id: Optional[str] = None
    qty: int = 1


@router.post("/", status_code=201)
async def upsert_product(
    payload: CLIENT_ORDER_PRODUCT_SCHEMA,
    current_member=Depends(get_current_member)
):
    product = await prisma.product.find_unique(
        where={"id": payload.product_id}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product to add not found"
        )

    pending_status = await prisma.orderstatus.find_unique(
        where={"id": PENDING_STATUS["id"]}
    )

    if not pending_status:
        raise HTTPException(
            status_code=500,
            detail="Pending order status not found"
        )

    order = await prisma.order.find_first(
        where={
            "memberId": current_member.id,
            "orderStatusId": pending_status.id
        }
    )

    if not order:
        order = await prisma.order.create(
            data={
                "memberId": current_member.id,
                "orderStatusId": pending_status.id,
                "totalItems": 0,
                "totalSellingPrice": 0,
                "totalPaid": 0
            }
        )

    order_product = await prisma.orderproduct.find_first(
        where={
            "orderId": order.id,
            "productId": payload.product_id
        }
    )

    if payload.qty < 1:
        raise HTTPException(
            status_code=400,
            detail="Quantity must be at least 1"
        )

    if order_product:
        quantity = order_product.quantity + payload.qty
        order_product = await prisma.orderproduct.update(
            where={"id": order_product.id},
            data={
                "quantity": quantity,
                "totalSellingPrice": product.sellingPrice * quantity,
                "totalBuyingPrice": product.buyingPrice * quantity
            }
        )
    else:
        quantity = payload.qty
        order_product = await prisma.orderproduct.create(
            data={
                "orderId": order.id,
                "productId": product.id,
                "quantity": quantity,
                "unitPrice": product.sellingPrice,
                "totalSellingPrice": product.sellingPrice * quantity,
                "totalBuyingPrice": product.buyingPrice * quantity
            }
        )

    items = await prisma.orderproduct.find_many(
        where={"orderId": order.id}
    )

    total_items = sum(item.quantity for item in items)
    total_selling_price = sum(
        item.totalSellingPrice for item in items
    )

    order = await prisma.order.update(
        where={"id": order.id},
        data={
            "totalItems": total_items,
            "totalSellingPrice": total_selling_price
        }
    )

    return {
        "message": "Cart updated successfully",
        "order": order,
        "order_product": order_product
    }


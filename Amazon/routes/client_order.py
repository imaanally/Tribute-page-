
from fastapi import APIRouter, HTTPException, Depends
from prisma_client import prisma
from auth import get_current_member
from seed import PENDING_STATUS

router = APIRouter()


@router.get("/")
async def get_client_order(
    current_member=Depends(get_current_member)
):
    pending_status = await prisma.orderstatus.find_unique(
        where={"id": PENDING_STATUS["id"]}
    )

    if not pending_status:
        raise HTTPException(
            status_code=404,
            detail="Pending order status not found"
        )

    order = await prisma.order.find_first(
        where={
            "memberId": current_member.id,
            "orderStatusId": pending_status.id
        },
        include={
            "orderProducts": {
                "include": {
                    "product": True
                }
            },
            "orderStatus": True
        }
    )

    if not order:
        return {"message": "No pending order found"}

    return order


@router.get("/{order_id}")
async def get_client_order_by_id(
    order_id: str,
    current_member=Depends(get_current_member)
):
    order = await prisma.order.find_first(
        where={
            "id": order_id,
            "memberId": current_member.id
        },
        include={
            "orderProducts": {
                "include": {
                    "product": True
                }
            },
            "orderStatus": True
        }
    )

    if not order:
        raise HTTPException(
            status_code=404,
            detail="Order not found"
        )

    return order


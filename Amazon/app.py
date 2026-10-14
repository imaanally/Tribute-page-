
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import Optional
from prisma import Prisma
from routes.member import router as member_router

app = FastAPI()

db = Prisma()


class Product(BaseModel):
    name: str
    description: Optional[str] = None
    buyingPrice: float
    sellingPrice: float
    quantity: int


@app.on_event("startup")
async def startup():
    await db.connect()


@app.on_event("shutdown")
async def shutdown():
    await db.disconnect()


@app.get("/")
def home():
    return {"message": "Amazon API is running"}


@app.get("/products")
async def get_products():
    products = await db.product.find_many()
    return products


@app.post("/products", status_code=status.HTTP_201_CREATED)
async def create_product(product: Product):
    new_product = await db.product.create(
        data=product.dict()
    )
    return new_product


@app.put("/products/{product_id}")
async def update_product(product_id: str, product: Product):
    existing_product = await db.product.find_unique(
        where={"id": product_id}
    )

    if not existing_product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    updated_product = await db.product.update(
        where={"id": product_id},
        data=product.dict()
    )

    return updated_product


@app.get("/products/{product_id}")
async def get_product(product_id: str):
    product = await db.product.find_unique(
        where={"id": product_id}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    return product


@app.delete("/products/{product_id}")
async def delete_product(product_id: str):
    product = await db.product.find_unique(
        where={"id": product_id}
    )

    if not product:
        raise HTTPException(
            status_code=404,
            detail="Product not found"
        )

    await db.product.delete(
        where={"id": product_id}
    )

    return {"message": "Product deleted successfully"}


app.include_router(member_router, prefix="/member")

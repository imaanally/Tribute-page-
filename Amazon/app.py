
from fastapi import FastAPI, HTTPException, status
from pydantic import BaseModel
from typing import Optional
from prisma import Prisma
from routes.member import router as member_router
from routes.product_image import router as product_image_router
from cloud import delete_from_cloud

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

    images = await db.product_image.find_many(
        where={"productId": product_id}
    )

    for image in images:
        public_id = image.image.split("/")[-1].split(".")[0]
        delete_from_cloud(public_id)

        await db.product_image.delete(
            where={"id": image.id}
        )

    await db.product.delete(
        where={"id": product_id}
    )

    return {"message": "Product deleted successfully"}


app.include_router(member_router, prefix="/member")
app.include_router(product_image_router, prefix="/product-image")


from fastapi import FastAPI, Depends
from prisma_client import prisma as db
from auth import get_current_member
from seed import seed_status
from routes.member import router as member_router
from routes.product import router as product_router
from routes.product_image import router as product_image_router
from routes.client_order import router as client_order_router
from routes.client_order_product import router as client_order_product_router

app = FastAPI()


@app.on_event("startup")
async def startup():
    await db.connect()
    await seed_status()


@app.on_event("shutdown")
async def shutdown():
    await db.disconnect()


@app.get("/")
def home():
    return {"message": "Amazon API is running"}


app.include_router(member_router, prefix="/member")

app.include_router(
    product_router,
    prefix="/product",
    dependencies=[Depends(get_current_member)]
)

app.include_router(
    product_image_router,
    prefix="/product-image",
    dependencies=[Depends(get_current_member)]
)

app.include_router(
    client_order_router,
    prefix="/client-order",
    dependencies=[Depends(get_current_member)]
)

app.include_router(
    client_order_product_router,
    prefix="/client-order-product",
    dependencies=[Depends(get_current_member)]
)


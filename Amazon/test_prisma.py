import asyncio
from prisma import Prisma


async def main():
    db = Prisma()
    await db.connect()

    product = await db.product.create(
        data={
            "name": "Test Laptop",
            "description": "Test product for Amazon API",
            "buyingPrice": 500,
            "sellingPrice": 700,
            "quantity": 10
        }
    )

    print(product)

    await db.disconnect()


asyncio.run(main())
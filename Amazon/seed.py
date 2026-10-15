
from prisma_client import prisma

PENDING_STATUS = {
    "id": "00000000-0000-0000-0000-000000000001",
    "name": "Pending",
    "description": "Order payment is pending.",
    "icon": "clock",
    "backgroundColor": "yellow",
    "textColor": "black"
}

PAID_STATUS = {
    "id": "00000000-0000-0000-0000-000000000002",
    "name": "Paid",
    "description": "Order payment has been completed successfully.",
    "icon": "check-circle",
    "backgroundColor": "green",
    "textColor": "white"
}


async def seed_status():
    for single_status in [PENDING_STATUS, PAID_STATUS]:
        await prisma.orderstatus.upsert(
            where={"id": single_status["id"]},
            data={
                "create": single_status,
                "update": {
                    "name": single_status["name"],
                    "description": single_status["description"],
                    "icon": single_status["icon"],
                    "backgroundColor": single_status["backgroundColor"],
                    "textColor": single_status["textColor"]
                }
            }
        )


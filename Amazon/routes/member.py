
from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel, EmailStr

router = APIRouter()


class Member(BaseModel):
    name: str
    email: EmailStr
    password: str


@router.post("/sign-up", status_code=status.HTTP_201_CREATED)
async def sign_up(payload: Member):
    from app import db

    existing_member = await db.member.find_unique(
        where={"email": payload.email}
    )

    if existing_member:
        raise HTTPException(
            status_code=400,
            detail="Email already used"
        )

    async with db.tx() as tx:
        member = await tx.member.create(
            data={
                "name": payload.name,
                "email": payload.email
            }
        )

        await tx.member_password.create(
            data={
                "member_id": member.id,
                "password": payload.password
            }
        )

    return member

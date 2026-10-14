
import bcrypt
from fastapi import APIRouter, status, HTTPException
from pydantic import BaseModel, EmailStr
from auth import create_access_token

router = APIRouter()


class Member(BaseModel):
    name: str
    email: EmailStr
    phone: str
    password: str


class Login(BaseModel):
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

    hashed_password = bcrypt.hashpw(
        payload.password.encode("utf-8"),
        bcrypt.gensalt()
    ).decode("utf-8")

    async with db.tx() as tx:
        member = await tx.member.create(
            data={
                "name": payload.name,
                "email": payload.email,
                "phone": payload.phone
            }
        )

        await tx.memberpassword.create(
            data={
                "memberId": member.id,
                "password": hashed_password
            }
        )

    return member


@router.post("/login")
async def login(payload: Login):
    from app import db

    member = await db.member.find_unique(
        where={"email": payload.email}
    )

    if not member:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    member_password = await db.memberpassword.find_unique(
        where={"memberId": member.id}
    )

    if not member_password or not bcrypt.checkpw(
        payload.password.encode("utf-8"),
        member_password.password.encode("utf-8")
    ):
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password"
        )

    token = create_access_token({"id": member.id})

    return {
        "access_token": token,
        "token_type": "bearer"
    }

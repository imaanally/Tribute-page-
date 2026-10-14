import os
from fastapi import APIRouter, UploadFile, File, HTTPException
from cloud import upload_to_cloud, delete_from_cloud

router = APIRouter()


@router.post("/upload")
async def upload_product_image(
    product_id: str,
    file: UploadFile = File(...)
):
    from app import db

    file_path = None

    try:
        os.makedirs("uploads", exist_ok=True)
        file_path = f"uploads/{file.filename}"

        with open(file_path, "wb") as f:
            f.write(await file.read())

        image_url = upload_to_cloud(file_path)

        if not image_url:
            raise HTTPException(
                status_code=500,
                detail="Image upload failed"
            )

        product_image = await db.product_image.create(
            data={
                "productId": product_id,
                "image": image_url
            }
        )

        return product_image

    finally:
        if file_path and os.path.exists(file_path):
            os.remove(file_path)


@router.put("/{image_id}")
async def update_product_image(
    image_id: str,
    file: UploadFile = File(...)
):
    from app import db

    file_path = None

    try:
        existing_image = await db.product_image.find_unique(
            where={"id": image_id}
        )

        if not existing_image:
            raise HTTPException(
                status_code=404,
                detail="Image not found"
            )

        os.makedirs("uploads", exist_ok=True)
        file_path = f"uploads/{file.filename}"

        with open(file_path, "wb") as f:
            f.write(await file.read())

        new_image_url = upload_to_cloud(file_path)

        if not new_image_url:
            raise HTTPException(
                status_code=500,
                detail="Image upload failed"
            )

        updated_image = await db.product_image.update(
            where={"id": image_id},
            data={"image": new_image_url}
        )

        old_public_id = existing_image.image.split("/")[-1].split(".")[0]
        delete_from_cloud(old_public_id)

        return updated_image

    finally:
        if file_path and os.path.exists(file_path):
            os.remove(file_path)

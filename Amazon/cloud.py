
import os
import cloudinary
import cloudinary.uploader
from dotenv import load_dotenv

load_dotenv()

cloudinary.config(
    cloud_name=os.getenv("CLOUD_NAME"),
    api_key=os.getenv("CLOUD_API_KEY"),
    api_secret=os.getenv("CLOUD_API_SECRET")
)


def upload_to_cloud(file_path):
    try:
        res = cloudinary.uploader.upload(file_path)
        print("Res is ")
        print(res)
        return res.get("secure_url")

    except Exception as e:
        print("Failed to upload file error is")
        print(e)
        return None


def delete_from_cloud(public_id):
    try:
        res = cloudinary.uploader.destroy(public_id)
        print(res)
        return res

    except Exception as e:
        print("Failed to delete image:", e)
        return None

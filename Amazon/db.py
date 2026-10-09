import os
import psycopg2
from dotenv import load_dotenv

load_dotenv()


class Database:
    def __init__(self):
        self.config = {
            "dbname": os.getenv("DB_NAME"),
            "user": os.getenv("DB_USER"),
            "password": os.getenv("DB_PASSWORD"),
            "host": os.getenv("DB_HOST"),
            "port": os.getenv("DB_PORT"),
        }

    def get_connection(self):
        return psycopg2.connect(**self.config)


if __name__ == "__main__":
    db = Database()

    try:
        connection = db.get_connection()
        cursor = connection.cursor()

        cursor.execute("SELECT NOW();")
        print("Connection successful!")
        print("Current time:", cursor.fetchone()[0])

        cursor.close()
        connection.close()

    except Exception as e:
        print("Connection failed!")
        print(e)

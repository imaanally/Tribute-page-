import os
import psycopg2
from psycopg2.extras import RealDictCursor
from contextlib import contextmanager
from dotenv import load_dotenv

load_dotenv()


class Database:
    def __init__(self):
        self.config = {
            "dbname": os.getenv("DB_NAME"),
            "user": os.getenv("DB_USER"),
            "password": os.getenv("DB_PASSWORD"),
            "host": os.getenv("DB_HOST"),
            "port": os.getenv("DB_PORT")
        }


    @contextmanager
    def get_cursor(self):
        connection = psycopg2.connect(**self.config)
        cursor = connection.cursor(cursor_factory=RealDictCursor)

        try:
            yield cursor
            connection.commit()
        except Exception:
            connection.rollback()
            raise
        finally:
            cursor.close()
            connection.close()

if __name__ == "__main__":
    print("Testing database connection...")

    try:
        db = Database()

        with db.get_cursor() as cursor:
            cursor.execute("""
                SELECT NOW() AS current_time,
                       version() AS db_version
            """)

            result = cursor.fetchone()

            print("Connection successful!")
            print("Current time:", result["current_time"])
            print("Database version:", result["db_version"])

    except Exception as e:
        print("Database connection failed:", e)



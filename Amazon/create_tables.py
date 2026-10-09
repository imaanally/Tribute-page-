from db import Database


db = Database()

with open("SQL/amazon_tables.sql", "r") as file:
    query = file.read()

try:
    connection = db.get_connection()
    cursor = connection.cursor()

    cursor.execute(query)

    connection.commit()

    cursor.close()
    connection.close()

    print("Amazon tables created successfully!")

except Exception as e:
    print("Error creating tables:")
    print(e)

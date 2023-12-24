import sqlite3

# Connect to SQLite database (creates a new database if it doesn't exist)
conn = sqlite3.connect('user_credentials.db')

# Create a cursor object to execute SQL commands
cursor = conn.cursor()

# Create a table to store user credentials (username and password)
cursor.execute('''CREATE TABLE IF NOT EXISTS users (
                    id INTEGER PRIMARY KEY AUTOINCREMENT,
                    username TEXT NOT NULL UNIQUE,
                    password TEXT NOT NULL
                )''')
sqlcur= 'show databases;'
# Commit changes and close connection
conn.commit()
conn.close()



def register_user(username, password):
    conn = sqlite3.connect('user_credentials.db')
    cursor = conn.cursor()

    # Insert user details into the 'users' table
    cursor.execute("INSERT INTO users (username, password) VALUES (?, ?)", (username, password))

    conn.commit()
    conn.close()

# Example usage to register a user
register_user('john_doe', 'password123')

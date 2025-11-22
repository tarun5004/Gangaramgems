# Database Setup Guide

This guide will help you connect your FastAPI backend to a PostgreSQL database.

## 1. Install PostgreSQL
If you haven't already, download and install PostgreSQL for Windows:
[https://www.postgresql.org/download/windows/](https://www.postgresql.org/download/windows/)

During installation, remember the **password** you set for the `postgres` user.

## 2. Create a Database
1. Open **pgAdmin 4** (installed with PostgreSQL) or use the command line (SQL Shell / psql).
2. Connect to your server (usually localhost:5432).
3. Right-click on "Databases" -> Create -> Database.
4. Name it `gangaramgems_db`.
5. Click Save.

## 3. Configure Environment Variables
In the `backend` folder, we will create a `.env` file. This file keeps your secrets safe.

**File:** `backend/.env`

```env
# Database Connection String
# Format: postgresql://<username>:<password>@<host>:<port>/<database_name>
DATABASE_URL=postgresql://postgres:YOUR_PASSWORD_HERE@localhost:5432/gangaramgems_db

# Secret key for security (JWT tokens)
# You can generate a random string for this
SECRET_KEY=supersecretkey1234567890
ALGORITHM=HS256
ACCESS_TOKEN_EXPIRE_MINUTES=30

# Admin Phone for WhatsApp (Public Config)
WHATSAPP_NUMBER=919876543210
```

**Replace `YOUR_PASSWORD_HERE` with the password you set during installation.**

## 4. Verify Connection
When we run the backend application later, it will try to connect using this URL. If the password or database name is wrong, it will show an error.

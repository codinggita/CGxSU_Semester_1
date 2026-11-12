# PostgreSQL Installation – Windows

## 1. Download PostgreSQL

Download PostgreSQL from the official website:

https://www.postgresql.org/download/windows/

Choose the Windows installer and download the latest stable version.

## 2. Run the Installer

Open the downloaded `.exe` file.

Click:

    Next → Next

Keep the default installation directory unless you have a specific requirement.

## 3. Select Components

Select the required components:

- PostgreSQL Server
- pgAdmin 4
- Command Line Tools

Stack Builder is optional.

Click **Next**.

## 4. Select Data Directory

Choose where PostgreSQL will store its database files.

You can use the default location:

    C:\Program Files\PostgreSQL\<version>\data

Click **Next**.

## 5. Set Password

Create a password for the default PostgreSQL user:

    postgres

Remember this password because it will be required to connect to PostgreSQL.

## 6. Set Port

Keep the default PostgreSQL port:

    5432

Example:

    Host: localhost
    Port: 5432
    User: postgres

Click **Next**.

## 7. Complete Installation

Review the settings and click:

    Next → Install → Finish

PostgreSQL will be installed and configured as a Windows service.

## 8. Verify Installation

Open Command Prompt or PowerShell and run:

    psql --version

If PostgreSQL is installed correctly, it will display the installed version.

Example:

    psql (PostgreSQL) 18.x

## 9. Open pgAdmin

Open **pgAdmin 4** from the Start Menu.

Connect to the PostgreSQL server using:

    Host: localhost
    Port: 5432
    Username: postgres
    Password: <your password>

## 10. Test PostgreSQL

Open Query Tool in pgAdmin and run:

    SELECT version();

If the PostgreSQL version is displayed, the installation is successful.

### Installation Complete

    PostgreSQL Server ✓
    pgAdmin 4 ✓
    psql ✓
    Port 5432 ✓
    PostgreSQL Ready ✓

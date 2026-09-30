# PostgreSQL Date & Time
PostgreSQL provides powerful data types and functions for working with dates and times.

In this topic, we will learn:

1. `TIMESTAMP`
2. `NOW()` / `CURRENT_TIMESTAMP`
3. `INTERVAL`
4. `EXTRACT()`
5. `TO_CHAR()`

---

# 1. TIMESTAMP

`TIMESTAMP` stores both the **date and exact time**.

### Structure

    YYYY-MM-DD HH:MM:SS

Example:

    2026-06-20 14:30:00

Here:

- `2026-06-20` → Date
- `14:30:00` → Time

### Creating a Timestamp

    SELECT TIMESTAMP '2026-06-20 14:30:00';

You can also explicitly cast a value:

    SELECT '2026-06-20 14:30:00'::TIMESTAMP;

### Creating a Table

    CREATE TABLE events (
        id SERIAL PRIMARY KEY,
        event_name VARCHAR(100),
        event_time TIMESTAMP
    );

Insert data:

    INSERT INTO events (event_name, event_time)
    VALUES
    ('Database Lecture', '2026-06-20 14:30:00'),
    ('Python Lecture', '2026-06-21 10:00:00');

View data:

    SELECT * FROM events;

---

# 2. NOW()

`NOW()` returns the **current date and time** from the PostgreSQL server.

    SELECT NOW();

Example result:

    2026-06-20 14:30:00.123456+05:30

It includes:

- Date
- Time
- Fractional seconds
- Time zone information

### CURRENT_TIMESTAMP

`CURRENT_TIMESTAMP` can also be used.

    SELECT CURRENT_TIMESTAMP;

Both can be used to get the current timestamp.

Example:

    SELECT
        NOW(),
        CURRENT_TIMESTAMP;

---

# 3. INTERVAL

`INTERVAL` is used to represent a **duration of time**.

It allows us to add or subtract time from a date or timestamp.

Common intervals:

- `days`
- `months`
- `years`
- `hours`
- `minutes`
- `seconds`

## Add Days

    SELECT NOW() + INTERVAL '7 days';

If:

    NOW() = 2026-06-20 14:30:00

Result:

    2026-06-27 14:30:00

## Subtract Days

    SELECT NOW() - INTERVAL '7 days';

## Add Months

    SELECT NOW() + INTERVAL '1 month';

## Subtract Months

    SELECT NOW() - INTERVAL '1 month';

## Add Years

    SELECT NOW() + INTERVAL '2 years';

## Add Hours

    SELECT NOW() + INTERVAL '3 hours';

## Add Minutes

    SELECT NOW() + INTERVAL '15 minutes';

## Add Seconds

    SELECT NOW() + INTERVAL '20 seconds';

---

# 4. EXTRACT()

`EXTRACT()` is used to get a **specific part** of a date or timestamp.

### Syntax

    EXTRACT(field FROM timestamp);

For example:

    SELECT EXTRACT(YEAR FROM NOW());

This returns only the year.

## Extract Year

    SELECT EXTRACT(YEAR FROM NOW());

Example:

    2026

## Extract Month

    SELECT EXTRACT(MONTH FROM NOW());

Example:

    6

## Extract Day

    SELECT EXTRACT(DAY FROM NOW());

Example:

    20

## Extract Hour

    SELECT EXTRACT(HOUR FROM NOW());

Example:

    14

## Extract Minute

    SELECT EXTRACT(MINUTE FROM NOW());

## Extract Second

    SELECT EXTRACT(SECOND FROM NOW());

---

# Common EXTRACT Fields

| Field | Meaning |
|---|---|
| `YEAR` | Year |
| `MONTH` | Month |
| `DAY` | Day of month |
| `HOUR` | Hour |
| `MINUTE` | Minute |
| `SECOND` | Second |
| `DOW` | Day of week |
| `DOY` | Day of year |

### DOW

`DOW` represents the day of the week.

    SELECT EXTRACT(DOW FROM NOW());

PostgreSQL uses:

    0 = Sunday
    1 = Monday
    2 = Tuesday
    ...
    6 = Saturday

### DOY

`DOY` represents the day of the year.

    SELECT EXTRACT(DOY FROM NOW());

---

# 5. TO_CHAR()

`TO_CHAR()` converts a date or timestamp into a **formatted text string**.

This is useful when we want to display dates in a specific format.

### Syntax

    TO_CHAR(value, 'format');

## Basic Example

    SELECT TO_CHAR(
        NOW(),
        'YYYY-MM-DD HH24:MI:SS'
    );

Example result:

    2026-06-20 14:30:00

## Different Date Format

    SELECT TO_CHAR(
        NOW(),
        'DD Mon YYYY'
    );

Example:

    20 Jun 2026

## Full Date Format

    SELECT TO_CHAR(
        NOW(),
        'Day, DDth Mon YYYY'
    );

Example:

    Saturday, 20th Jun 2026

---

# Important TO_CHAR Format Patterns

| Pattern | Meaning | Example |
|---|---|---|
| `YYYY` | 4-digit year | `2026` |
| `YY` | 2-digit year | `26` |
| `MM` | Month number | `06` |
| `DD` | Day of month | `20` |
| `HH24` | Hour in 24-hour format | `14` |
| `HH12` | Hour in 12-hour format | `02` |
| `MI` | Minutes | `30` |
| `SS` | Seconds | `00` |
| `Mon` | Short month name | `Jun` |
| `Month` | Full month name | `June` |
| `Day` | Day name | `Saturday` |

### Important

`MI` means **minutes**.

`MM` means **month**.

So:

    HH24:MI:SS

means:

    Hour : Minute : Second

---

# Combining Date & Time Functions

We can combine `NOW()`, `INTERVAL`, and `TO_CHAR()`.

Example:

    SELECT TO_CHAR(
        NOW() + INTERVAL '7 days',
        'DD Mon YYYY (Day)'
    );

If today is:

    20 Jun 2026

The result will be approximately:

    27 Jun 2026 (Saturday)

---

# Practical Table Example

Create a table:

    CREATE TABLE orders (
        id SERIAL PRIMARY KEY,
        customer_name VARCHAR(100),
        product VARCHAR(100),
        amount NUMERIC(10,2),
        order_date TIMESTAMP
    );

Insert sample data:

    INSERT INTO orders (customer_name, product, amount, order_date)
    VALUES
    ('Motu', 'Laptop', 65000, '2026-06-15 10:30:00'),
    ('Patlu', 'Mouse', 1200, '2026-06-16 14:45:00'),
    ('Raju', 'Keyboard', 2500, '2026-06-18 09:15:00'),
    ('Shyam', 'Monitor', 15000, '2026-06-20 16:30:00'),
    ('Motu', 'Headphones', 3500, '2026-06-21 11:20:00'),
    ('Patlu', 'Webcam', 4500, '2026-06-22 18:10:00'),
    ('Raju', 'Laptop Stand', 2200, '2026-06-24 13:00:00'),
    ('Shyam', 'Printer', 12000, '2026-06-25 15:45:00'),
    ('Motu', 'USB Cable', 500, '2026-06-27 10:10:00'),
    ('Raju', 'Tablet', 28000, '2026-06-30 19:30:00');

View the table:

    SELECT * FROM orders;

---

# Practice Questions

Use the `orders` table given above to solve the following questions.

## Basic

### 1. Show the current date and time using `NOW()`.

### 2. Show the current date and time using `CURRENT_TIMESTAMP`.

### 3. Display only the year from `order_date` using `EXTRACT()`.

### 4. Display only the month from `order_date`.

### 5. Display only the day from `order_date`.

### 6. Display the hour from `order_date`.

---

## Intermediate

### 7. Display the customer name and year of each order.

Expected columns:

    customer_name | order_year

### 8. Display the customer name and month of each order.

Expected columns:

    customer_name | order_month

### 9. Display all orders placed after `2026-06-20`.

### 10. Display all orders placed before `2026-06-25`.

### 11. Display all orders placed between `2026-06-18` and `2026-06-25`.

### 12. Display all orders where the order was placed during the month of June.

---

## INTERVAL Questions

### 13. Display the order date and the date exactly 7 days after each order.

Expected columns:

    order_date | seven_days_later

### 14. Display the order date and the date exactly 1 month after each order.

Expected columns:

    order_date | one_month_later

### 15. Display the order date and the date exactly 2 years after each order.

Expected columns:

    order_date | two_years_later

### 16. Find all orders placed within the last 15 days from the current time.

Use:

    NOW()
    INTERVAL

---

## TO_CHAR() Questions

### 17. Display the customer name and order date in this format:

    DD Mon YYYY

Example:

    Motu | 15 Jun 2026

### 18. Display the customer name and order date in this format:

    YYYY-MM-DD HH24:MI:SS

### 19. Display the order date in this format:

    Day, DD Mon YYYY

Example:

    Monday, 15 Jun 2026

### 20. Display each order like this:

    Motu placed Laptop on 15 Jun 2026

Use `TO_CHAR()` to format the date.

---

# Quick Revision

| Feature | Purpose |
|---|---|
| `TIMESTAMP` | Stores date + time |
| `NOW()` | Gets current date + time |
| `CURRENT_TIMESTAMP` | Gets current timestamp |
| `INTERVAL` | Adds / subtracts duration |
| `EXTRACT()` | Gets a specific part of date/time |
| `TO_CHAR()` | Formats date/time as text |

### Remember

    TIMESTAMP
        ↓
    Store date + time

    NOW()
        ↓
    Get current date + time

    INTERVAL
        ↓
    Add / subtract time

    EXTRACT()
        ↓
    Get one part of date/time

    TO_CHAR()
        ↓
    Format date/time for display

# PostgreSQL Date & Time - Practice Solutions

## Basic

### 1. Show the current date and time using `NOW()`.

    SELECT NOW();

### 2. Show the current date and time using `CURRENT_TIMESTAMP`.

    SELECT CURRENT_TIMESTAMP;

### 3. Display only the year from `order_date` using `EXTRACT()`.

    SELECT EXTRACT(YEAR FROM order_date) AS order_year
    FROM orders;

### 4. Display only the month from `order_date`.

    SELECT EXTRACT(MONTH FROM order_date) AS order_month
    FROM orders;

### 5. Display only the day from `order_date`.

    SELECT EXTRACT(DAY FROM order_date) AS order_day
    FROM orders;

### 6. Display the hour from `order_date`.

    SELECT EXTRACT(HOUR FROM order_date) AS order_hour
    FROM orders;


## Intermediate

### 7. Display the customer name and year of each order.

Expected columns:

    customer_name | order_year

Solution:

    SELECT
        customer_name,
        EXTRACT(YEAR FROM order_date) AS order_year
    FROM orders;

### 8. Display the customer name and month of each order.

Expected columns:

    customer_name | order_month

Solution:

    SELECT
        customer_name,
        EXTRACT(MONTH FROM order_date) AS order_month
    FROM orders;

### 9. Display all orders placed after `2026-06-20`.

    SELECT *
    FROM orders
    WHERE order_date > '2026-06-20';

### 10. Display all orders placed before `2026-06-25`.

    SELECT *
    FROM orders
    WHERE order_date < '2026-06-25';

### 11. Display all orders placed between `2026-06-18` and `2026-06-25`.

    SELECT *
    FROM orders
    WHERE order_date BETWEEN '2026-06-18' AND '2026-06-25';

`BETWEEN` includes both boundary values.

### 12. Display all orders where the order was placed during the month of June.

    SELECT *
    FROM orders
    WHERE EXTRACT(MONTH FROM order_date) = 6;


## INTERVAL Questions

### 13. Display the order date and the date exactly 7 days after each order.

Expected columns:

    order_date | seven_days_later

Solution:

    SELECT
        order_date,
        order_date + INTERVAL '7 days' AS seven_days_later
    FROM orders;

### 14. Display the order date and the date exactly 1 month after each order.

Expected columns:

    order_date | one_month_later

Solution:

    SELECT
        order_date,
        order_date + INTERVAL '1 month' AS one_month_later
    FROM orders;

### 15. Display the order date and the date exactly 2 years after each order.

Expected columns:

    order_date | two_years_later

Solution:

    SELECT
        order_date,
        order_date + INTERVAL '2 years' AS two_years_later
    FROM orders;

### 16. Find all orders placed within the last 15 days from the current time.

Use `NOW()` and `INTERVAL`.

    SELECT *
    FROM orders
    WHERE order_date >= NOW() - INTERVAL '15 days';


## TO_CHAR() Questions

### 17. Display the customer name and order date in this format:

    DD Mon YYYY

Example:

    Motu | 15 Jun 2026

Solution:

    SELECT
        customer_name,
        TO_CHAR(order_date, 'DD Mon YYYY') AS formatted_date
    FROM orders;

### 18. Display the customer name and order date in this format:

    YYYY-MM-DD HH24:MI:SS

Solution:

    SELECT
        customer_name,
        TO_CHAR(order_date, 'YYYY-MM-DD HH24:MI:SS') AS formatted_date
    FROM orders;

### 19. Display the order date in this format:

    Day, DD Mon YYYY

Example:

    Monday, 15 Jun 2026

Solution:

    SELECT
        TO_CHAR(order_date, 'FMDay, DD Mon YYYY') AS formatted_date
    FROM orders;

`FM` removes unnecessary padding spaces from the day name.

### 20. Display each order like this:

    Motu placed Laptop on 15 Jun 2026

Use `TO_CHAR()` to format the date.

Solution:

    SELECT
        customer_name
        || ' placed '
        || product_name
        || ' on '
        || TO_CHAR(order_date, 'DD Mon YYYY') AS order_details
    FROM orders;


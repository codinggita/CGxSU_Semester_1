# PostgreSQL CTE (Common Table Expression)

## 1. What is a CTE?

CTE stands for **Common Table Expression**.

It allows us to create a temporary result set and use it inside a query.

Syntax:

    WITH cte_name AS (
        SELECT ...
    )
    SELECT *
    FROM cte_name;

---

## 2. Basic CTE Example

Suppose we have an `orders` table:

    CREATE TABLE orders (
        order_id SERIAL PRIMARY KEY,
        customer_name VARCHAR(100),
        amount NUMERIC,
        year INT
    );

Example data:

    INSERT INTO orders (customer_name, amount, year)
    VALUES
    ('Motu', 5000, 2026),
    ('Patlu', 8000, 2026),
    ('Raju', 3000, 2025),
    ('Shyam', 7000, 2026);

Using CTE:

    WITH order_data AS (
        SELECT *
        FROM orders
    )
    SELECT *
    FROM order_data;

---

## 3. CTE with WHERE

A CTE can filter data before the final query.

    WITH recent_orders AS (
        SELECT *
        FROM orders
        WHERE year = 2026
    )
    SELECT *
    FROM recent_orders;

Result:

    Motu
    Patlu
    Shyam

---

## 4. CTE with Specific Columns

We do not always need `SELECT *`.

    WITH order_data AS (
        SELECT customer_name, amount
        FROM orders
    )
    SELECT *
    FROM order_data;

---

## 5. CTE with Calculation

We can perform calculations inside a CTE.

    WITH order_data AS (
        SELECT
            customer_name,
            amount,
            amount * 0.18 AS tax
        FROM orders
    )
    SELECT *
    FROM order_data;

---

## 6. CTE with Aggregation

A CTE can contain `GROUP BY`.

    WITH customer_total AS (
        SELECT
            customer_name,
            SUM(amount) AS total_amount
        FROM orders
        GROUP BY customer_name
    )
    SELECT *
    FROM customer_total;

---

## 7. CTE with HAVING

Filtering aggregated results can also be done inside a CTE.

    WITH customer_total AS (
        SELECT
            customer_name,
            SUM(amount) AS total_amount
        FROM orders
        GROUP BY customer_name
        HAVING SUM(amount) > 5000
    )
    SELECT *
    FROM customer_total;

---

## 8. CTE with ORDER BY

A CTE can contain ordering.

    WITH high_orders AS (
        SELECT *
        FROM orders
        WHERE amount > 4000
        ORDER BY amount DESC
    )
    SELECT *
    FROM high_orders;

For reliable final ordering, it is generally better to use `ORDER BY` in the final query.

---

## 9. CTE with LIMIT

A CTE can also limit the intermediate result.

    WITH top_orders AS (
        SELECT *
        FROM orders
        ORDER BY amount DESC
        LIMIT 3
    )
    SELECT *
    FROM top_orders;

---

## 10. CTE with JOIN

A CTE can be joined with another table.

Suppose:

    customers
    ----------------
    customer_id
    name

    orders
    ----------------
    order_id
    customer_id
    amount

Query:

    WITH customer_orders AS (
        SELECT
            customer_id,
            SUM(amount) AS total_amount
        FROM orders
        GROUP BY customer_id
    )
    SELECT
        c.name,
        co.total_amount
    FROM customers c
    JOIN customer_orders co
        ON c.customer_id = co.customer_id;

---

## 11. Multiple CTEs

More than one CTE can be created using commas.

    WITH
    order_data AS (
        SELECT *
        FROM orders
        WHERE year = 2026
    ),
    high_orders AS (
        SELECT *
        FROM order_data
        WHERE amount > 5000
    )
    SELECT *
    FROM high_orders;

Flow:

    orders
       ↓
    order_data
       ↓
    high_orders
       ↓
    final SELECT

---

## 12. CTE vs Subquery

Without CTE:

    SELECT *
    FROM (
        SELECT *
        FROM orders
        WHERE amount > 5000
    ) AS temp;

With CTE:

    WITH high_orders AS (
        SELECT *
        FROM orders
        WHERE amount > 5000
    )
    SELECT *
    FROM high_orders;

CTE is usually easier to read when the query becomes complex.

---

## 13. CTE with DELETE / UPDATE

CTEs are not limited to `SELECT`.

Example:

    WITH old_orders AS (
        SELECT order_id
        FROM orders
        WHERE year < 2026
    )
    DELETE FROM orders
    WHERE order_id IN (
        SELECT order_id
        FROM old_orders
    );

Example with `UPDATE`:

    WITH selected_orders AS (
        SELECT order_id
        FROM orders
        WHERE amount < 4000
    )
    UPDATE orders
    SET amount = amount + 500
    WHERE order_id IN (
        SELECT order_id
        FROM selected_orders
    );

---

## 14. Practice Questions

| # | Question |
|---|---|
| 1 | Create a CTE to display all orders from 2026. |
| 2 | Create a CTE to display orders where amount is greater than 5000. |
| 3 | Create a CTE to calculate `amount * 0.18` as tax. |
| 4 | Create a CTE to find the total order amount for each customer. |
| 5 | Create a CTE to display customers whose total order amount is greater than 10000. |
| 6 | Create a CTE to find the average order amount. |
| 7 | Create a CTE to find the maximum order amount. |
| 8 | Create a CTE to find the top 3 highest-value orders. |
| 9 | Create two CTEs where the second CTE uses the result of the first CTE. |
| 10 | Use a CTE with `GROUP BY` to find yearly sales. |
| 11 | Use a CTE with `HAVING` to find customers whose total sales exceed 5000. |
| 12 | Use a CTE with a `JOIN` to display customer names and their total orders. |
| 13 | Use a CTE to identify orders before 2026 and delete them from the `orders` table. |

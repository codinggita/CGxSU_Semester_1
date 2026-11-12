# TypeScript Classes & Objects — Practice Assignment 2

## ✈️ Flight Management System

Build a **Flight Management System** using TypeScript classes and objects.

The system should manage different types of flights and maintain overall airline-level information.

---

## Base Class: `Flight`

Create a base `Flight` class with the following requirements.

### Flight Information

The class should contain:

- `flightNumber`
    - Must be `readonly`
    - Should not be changeable after flight creation
- `airlineName`
    - Should be publicly accessible
- `baseFare`
    - Must be `private`
- `flightType`
    - Must be `protected`

Use a constructor to initialize the required flight information.

Use **parameter properties** where appropriate.

---

## Airline Name Getter & Setter

Create a getter and setter for the airline name.

Rules:

- The airline name must contain at least **3 characters**.
- Remove unnecessary spaces from the beginning and end.
- Store the valid airline name in **uppercase**.
- The getter should return the processed airline name.

---

## Flight Fare

The base fare must remain private.

The final ticket price should be calculated using:

**Final Ticket Price = Base Fare + Route Price**

The route price must be determined from the selected `from` and `to` locations using the provided pricing table.

The route price should not be manually entered when creating a flight.

---

## Flight Operations

Implement methods to:

- Add passengers
- Remove passengers
- Display flight details

Rules:

- Passenger count cannot become negative.
- A flight should not allow passengers to be added after reaching its maximum capacity.
- Invalid passenger (phone number is required before booking) operations should not modify the passenger count or bookings.

---

## Location Enums

Create separate enums for domestic and international destinations.

### Domestic Cities

| Key         | Location  |
| ----------- | --------- |
| `DELHI`     | Delhi     |
| `MUMBAI`    | Mumbai    |
| `BANGALORE` | Bangalore |
| `HYDERABAD` | Hyderabad |
| `CHENNAI`   | Chennai   |
| `KOLKATA`   | Kolkata   |
| `AHMEDABAD` | Ahmedabad |
| `PUNE`      | Pune      |

### International Cities

| Key         | Location  |
| ----------- | --------- |
| `DUBAI`     | Dubai     |
| `SINGAPORE` | Singapore |
| `LONDON`    | London    |
| `BANGKOK`   | Bangkok   |
| `NEW_YORK`  | New York  |
| `PARIS`     | Paris     |
| `TOKYO`     | Tokyo     |

---

## Route Pricing Table

Use the following route pricing information to determine the route price.

The pricing table should be represented using a nested `Record`.

```text
From → To

Delhi:
  Mumbai      → ₹5,000
  Bangalore   → ₹6,000
  Hyderabad   → ₹5,500
  Chennai     → ₹6,500
  Kolkata     → ₹5,000
  Ahmedabad   → ₹4,500
  Pune        → ₹5,000
  Dubai       → ₹12,000
  Singapore   → ₹18,000
  London      → ₹35,000

Mumbai:
  Delhi       → ₹5,000
  Bangalore   → ₹4,500
  Hyderabad   → ₹4,000
  Chennai     → ₹5,500
  Ahmedabad   → ₹3,500
  Pune        → ₹3,000
  Dubai       → ₹12,000
  Singapore   → ₹18,000
  London      → ₹35,000

Bangalore:
  Delhi       → ₹6,000
  Mumbai      → ₹4,500
  Hyderabad   → ₹3,500
  Chennai     → ₹3,500
  Kolkata     → ₹6,500
  Dubai       → ₹14,000
  Singapore   → ₹17,000

Hyderabad:
  Delhi       → ₹5,500
  Mumbai      → ₹4,000
  Bangalore   → ₹3,500
  Chennai     → ₹3,500
  Dubai       → ₹13,000
  Singapore   → ₹17,000

Chennai:
  Delhi       → ₹6,500
  Mumbai      → ₹5,500
  Bangalore   → ₹3,500
  Hyderabad   → ₹3,500
  Kolkata     → ₹5,500
  Singapore   → ₹16,000

Kolkata:
  Delhi       → ₹5,000
  Mumbai      → ₹6,000
  Bangalore   → ₹6,500
  Chennai     → ₹5,500
  Singapore   → ₹15,000

Ahmedabad:
  Delhi       → ₹4,500
  Mumbai      → ₹3,500
  Bangalore   → ₹5,500
  Dubai       → ₹11,000

Pune:
  Delhi       → ₹5,000
  Mumbai      → ₹3,000
  Bangalore   → ₹5,000
  Dubai       → ₹12,000

Dubai:
  Delhi       → ₹13,000
  Mumbai      → ₹12,000
  Bangalore   → ₹14,000
  Hyderabad   → ₹13,000
  London      → ₹35,000
  Singapore   → ₹22,000

Singapore:
  Delhi       → ₹18,000
  Mumbai      → ₹18,000
  Bangalore   → ₹17,000
  Chennai     → ₹16,000
  Kolkata     → ₹15,000
  Dubai       → ₹22,000
  London      → ₹40,000

London:
  Delhi       → ₹35,000
  Mumbai      → ₹35,000
  Dubai       → ₹35,000
  Singapore   → ₹40,000
  New York    → ₹45,000
  Paris       → ₹12,000
```

If a requested route does not exist in the table, the flight should not be created or the booking operation should be rejected.

---

## User

Create a separate `User` class.

Each user should contain:

- `id`
- `name`
- `phoneNumber (optional)`
- Flight booking history

The user name should be handled through a getter and setter.

Rules:

- Name must contain at least **3 characters**.
- Remove unnecessary spaces.
- Store the valid name in **uppercase**.

The phone number should also be validated before storing it.

---

## User Flight History

Maintain flight history at the **user level**.

When a user successfully books a flight:

- The flight should be added to the user's flight history.
- The flight should also maintain the passenger information.
- A failed booking should not be added to the user's history.

A user should be able to view their previous flight bookings.

---

## Flight Booking

Implement a booking operation that connects a `User` with a `Flight`.

When a user books a flight:

- Check whether seats are available.
- Add the user as a passenger.
- Update the flight's passenger count.
- Add the flight to the user's flight history.
- The booking should only be considered successful when all required operations succeed.

A user should not be able to book the same flight more than once.

---

## Static Airline Information

Maintain airline-level information using **static properties and static methods**.

The system should keep track of:

- Total number of flights
- Total passengers across all flights
- Total scheduled flight revenue

These values should automatically update when:

- A new flight is created
- A passenger successfully books a flight
- A passenger cancels their booking

Provide static methods to access the airline-level information.

---

## Static Block

Use a **static block** to initialize the airline name.

The initialization must involve actual processing rather than directly assigning the final value.

For example, start with a raw airline name containing unnecessary spaces or mixed casing, then process it by trimming the spaces and converting it to uppercase.

Store the processed value as the airline name.

The airline name should be available through the class itself.

---

## Subclasses

Create the following subclasses from `Flight`.

### `DomesticFlight`

A domestic flight should have:

- Maximum passenger capacity
- Domestic tax percentage

Create a method to calculate the final ticket price after applying the domestic tax.

The flight type should be identified as **Domestic**.

---

### `InternationalFlight`

An international flight should have:

- Maximum passenger capacity
- International tax percentage
- Airport/handling charge

Create a method to calculate the final ticket price after applying the international tax and handling charge.

The flight type should be identified as **International**.

---

## Flight Details

When displaying flight information, show:

- Flight number
- Airline name
- Flight type
- From location
- To location
- Base fare
- Route price
- Final ticket price
- Passenger count
- Maximum capacity

For example:

- Domestic → Tax percentage
- International → Tax percentage and handling charge

---

## Expected Output

Your program should produce output similar to:

```text
===== DOMESTIC FLIGHT =====
Flight Number: AI101
Airline: AIR INDIA
Flight Type: Domestic
From: Delhi
To: Mumbai
Base Fare: ₹2,000
Route Price: ₹5,000
Final Ticket Price: ₹7,350
Passengers: 120
Maximum Capacity: 180
Domestic Tax: 5%

===== INTERNATIONAL FLIGHT =====
Flight Number: AI202
Airline: AIR INDIA
Flight Type: International
From: Mumbai
To: Dubai
Base Fare: ₹5,000
Route Price: ₹12,000
Final Ticket Price: ₹20,040
Passengers: 210
Maximum Capacity: 250
International Tax: 12%
Handling Charge: ₹3,000

===== USER =====
User ID: 1
Name: SATYA SINGH
Phone: 9876543210

Flight History:
- AI101 | Delhi → Mumbai
- AI202 | Mumbai → Dubai

===== AIRLINE DETAILS =====
Airline Name: AIR INDIA
Total Flights: 2
Total Passengers: 330
Total Scheduled Revenue: ₹9,900,000
```

The exact values may differ depending on your operations.

---

# Python `match-case` — Real-Life Practice Problems

## Practice Guidelines

Solve the following problems using Python `match-case`.

### Focus on:

- `match`
- `case`
- `case _`
- Multiple values using `|`
- String matching
- Integer matching
- Nested `match-case` where required
- Combining `match-case` with `if` when a condition is genuinely needed

### Important

Do not use `if-elif-else` for the main choice-selection part when the problem is naturally based on fixed values or options.

For problems involving ranges or complex conditions, use `if-elif-else` where appropriate.

---

# Topic 1 — Basic Real-Life Choice Problems

## Q1. Food Ordering System

A restaurant has the following menu:

```text
1 → Pizza
2 → Burger
3 → Pasta
4 → Sandwich
```

Write a program that takes the customer's choice and displays the selected food.

If the customer enters any other number, display:

```text
Invalid Menu Choice
```

### Sample Input

```text
Enter your choice: 3
```

### Sample Output

```text
You selected Pasta
```

---

## Q2. Mobile Settings

Create a simple mobile settings menu:

```text
1 → Wi-Fi
2 → Bluetooth
3 → Mobile Data
4 → Airplane Mode
5 → Exit
```

Take the user's choice and display the selected setting.

For an invalid choice, display:

```text
Invalid Setting
```

### Sample Input

```text
Enter choice: 2
```

### Sample Output

```text
Bluetooth Selected
```

---

## Q3. ATM Main Menu

Create an ATM menu:

```text
1 → Check Balance
2 → Withdraw Money
3 → Deposit Money
4 → Change PIN
5 → Exit
```

Take the user's choice and display the corresponding message.

### Sample Input

```text
Enter choice: 2
```

### Sample Output

```text
Withdraw Money Selected
```

---

## Q4. Traffic Signal

Take a traffic signal color as input:

```text
red
yellow
green
```

Use `match-case` to display:

```text
red    → Stop
yellow → Wait
green  → Go
```

For any other color:

```text
Invalid Signal
```

### Sample Input

```text
Enter signal: green
```

### Sample Output

```text
Go
```

---

# Topic 2 — Practical Menu Systems

## Q5. Student Portal

Create a student portal menu:

```text
1 → View Profile
2 → View Courses
3 → View Marks
4 → View Attendance
5 → Logout
```

Take the user's choice and display an appropriate message.

### Sample Input

```text
Enter choice: 3
```

### Sample Output

```text
Opening Marks
```

---

## Q6. Online Shopping Menu

Create an online shopping menu:

```text
1 → Electronics
2 → Clothing
3 → Books
4 → Grocery
5 → Exit
```

Display the selected category.

### Sample Input

```text
Enter category: 2
```

### Sample Output

```text
Opening Clothing
```

---

## Q7. Banking Service Selection

A banking application provides:

```text
1 → Account Balance
2 → Mini Statement
3 → Fund Transfer
4 → Bill Payment
5 → Customer Support
```

Write a program using `match-case` to display the selected service.

### Sample Input

```text
Enter service: 4
```

### Sample Output

```text
Opening Bill Payment
```

---

## Q8. Movie Ticket Booking

Create a movie booking menu:

```text
1 → Morning Show
2 → Afternoon Show
3 → Evening Show
4 → Night Show
```

Display the selected show.

### Sample Input

```text
Enter show: 3
```

### Sample Output

```text
Evening Show Selected
```

---

# Topic 3 — String-Based Real-Life Problems

## Q9. Weather Advice

Take the weather condition as input:

```text
sunny
rainy
cloudy
snowy
```

Display appropriate advice:

```text
sunny  → Wear sunglasses
rainy  → Carry an umbrella
cloudy → Weather may change
snowy  → Wear warm clothes
```

For any other input:

```text
Unknown Weather
```

### Sample Input

```text
Enter weather: rainy
```

### Sample Output

```text
Carry an umbrella
```

---

## Q10. Payment Method

An online store accepts:

```text
upi
card
cash
wallet
```

Display the selected payment method.

For example:

```text
Enter payment method: upi

UPI Payment Selected
```

Handle invalid payment methods as well.

---

## Q11. File Type Detector

Take a file extension as input:

```text
pdf
jpg
png
mp3
mp4
```

Display the type of file.

Example:

```text
pdf → Document
jpg → Image
png → Image
mp3 → Audio
mp4 → Video
```

For any other extension:

```text
Unknown File Type
```

### Sample Input

```text
Enter extension: mp3
```

### Sample Output

```text
Audio File
```

---

## Q12. User Role

A system supports these roles:

```text
admin
teacher
student
guest
```

Display the appropriate access message.

Example:

```text
admin   → Full Access
teacher → Teacher Dashboard
student → Student Dashboard
guest   → Limited Access
```

For an unknown role:

```text
Invalid Role
```

---

# Topic 4 — Multiple Values Using `|`

## Q13. Weekday or Weekend

Take a day number:

```text
1 → Monday
2 → Tuesday
3 → Wednesday
4 → Thursday
5 → Friday
6 → Saturday
7 → Sunday
```

Use `match-case` and `|` to display:

```text
Weekday
```

for Monday to Friday and:

```text
Weekend
```

for Saturday and Sunday.

For any other number:

```text
Invalid Day
```

### Sample Input

```text
Enter day number: 6
```

### Sample Output

```text
Weekend
```

---

## Q14. Customer Support Priority

A support system receives priority numbers:

```text
1 → Low
2 → Medium
3 → High
4 → Critical
```

Treat priorities `1` and `2` as:

```text
Normal Priority
```

Treat priorities `3` and `4` as:

```text
Urgent Priority
```

Use `|` where appropriate.

---

## Q15. Store Discount Category

A store uses membership levels:

```text
1 → Bronze
2 → Silver
3 → Gold
4 → Platinum
```

Group the levels:

```text
1, 2 → Basic Membership
3, 4 → Premium Membership
```

Display the appropriate category.

---

# Topic 5 — Nested `match-case`

## Q16. University Portal

Create a university portal.

First ask the user to select:

```text
1 → Student
2 → Teacher
```

If the user selects Student, show:

```text
1 → View Courses
2 → View Marks
3 → View Attendance
```

If the user selects Teacher, show:

```text
1 → View Students
2 → Enter Marks
3 → View Attendance
```

Use **nested `match-case`**.

### Sample Input

```text
Enter user type: 1
Enter option: 2
```

### Sample Output

```text
Opening Student Marks
```

---

## Q17. ATM with Account Type

First ask for account type:

```text
1 → Savings
2 → Current
```

Then show:

```text
1 → Check Balance
2 → Deposit
3 → Withdraw
```

Use nested `match-case` to display the selected account and operation.

### Sample Input

```text
Enter account type: 1
Enter operation: 3
```

### Sample Output

```text
Savings Account
Withdraw Selected
```

---

## Q18. E-Commerce Application

First ask for a category:

```text
1 → Electronics
2 → Clothing
```

For Electronics:

```text
1 → Mobile
2 → Laptop
3 → Headphones
```

For Clothing:

```text
1 → Shirt
2 → Jeans
3 → Shoes
```

Use nested `match-case`.

### Sample Input

```text
Enter category: 1
Enter product: 2
```

### Sample Output

```text
Laptop Selected
```

---

## Q19. Food Delivery Application

First ask:

```text
1 → Vegetarian
2 → Non-Vegetarian
```

If Vegetarian:

```text
1 → Paneer
2 → Dal
3 → Veg Biryani
```

If Non-Vegetarian:

```text
1 → Chicken Biryani
2 → Chicken Curry
3 → Fish Fry
```

Use nested `match-case`.

### Sample Input

```text
Enter category: 2
Enter food: 1
```

### Sample Output

```text
Chicken Biryani Selected
```

---

# Topic 6 — `match-case` with Simple Calculations

## Q20. Simple Calculator

Take two numbers and an operator:

```text
+
-
*
/
```

Use `match-case` to perform the selected operation.

### Sample Input

```text
Enter first number: 20
Enter second number: 5
Enter operator: *
```

### Sample Output

```text
Result = 100
```

### Important

Handle division separately and avoid division by zero.

---

## Q21. Temperature Converter

Create a converter:

```text
1 → Celsius to Fahrenheit
2 → Fahrenheit to Celsius
```

Take the temperature and perform the selected conversion.

### Sample Input

```text
Enter choice: 1
Enter temperature: 25
```

### Sample Output

```text
Temperature = 77.0 F
```

---

## Q22. Unit Converter

Create a unit conversion menu:

```text
1 → Kilometers to Meters
2 → Meters to Kilometers
3 → Kilograms to Grams
4 → Grams to Kilograms
```

Take the required value and perform the selected conversion.

### Sample Input

```text
Enter choice: 1
Enter value: 5
```

### Sample Output

```text
5000 meters
```

---

# Topic 7 — `match-case` + `if`

## Q23. ATM Withdrawal

Create an ATM withdrawal program.

First use `match-case` for:

```text
1 → Savings
2 → Current
```

For either account, ask for withdrawal amount.

Use `if` to check:

- If amount is positive, continue.
- If amount is zero or negative, display `Invalid Amount`.

### Sample Input

```text
Enter account type: 1
Enter amount: 500
```

### Sample Output

```text
Savings Account
Withdrawal Request Accepted
```

---

## Q24. Online Exam Portal

Create a menu:

```text
1 → Start Exam
2 → View Result
3 → Exit
```

If the user selects `Start Exam`, ask for age.

Use `if` to check whether the student is at least 18 years old.

### Sample Input

```text
Enter choice: 1
Enter age: 20
```

### Sample Output

```text
You can start the exam
```

---

## Q25. Movie Ticket System

Create a movie ticket menu:

```text
1 → Regular
2 → Premium
3 → VIP
```

Ask for the customer's age after selecting the ticket type.

If age is below 5, display:

```text
Free Entry
```

Otherwise display the selected ticket type.

Use `match-case` for ticket selection and `if` for the age condition.

---

# Topic 8 — Real-World Application Problems

## Q26. Smart Home Controller

Create a smart home controller:

```text
1 → Light
2 → Fan
3 → AC
4 → TV
```

For each device, display an appropriate message.

Example:

```text
Enter device: 3

AC Controller Opened
```

---

## Q27. Hospital Department Selection

Create a hospital department menu:

```text
1 → General Medicine
2 → Cardiology
3 → Orthopedics
4 → Pediatrics
5 → Emergency
```

Display the selected department.

For invalid input, display:

```text
Invalid Department
```

---

## Q28. Railway Ticket System

Create a railway ticket menu:

```text
1 → Book Ticket
2 → Cancel Ticket
3 → Check PNR
4 → Train Schedule
5 → Exit
```

Display the appropriate action.

---

## Q29. Library Management System

Create a library menu:

```text
1 → Search Book
2 → Issue Book
3 → Return Book
4 → View Issued Books
5 → Exit
```

Use `match-case` to process the user's choice.

---

## Q30. Food Delivery Order Status

Take an order status:

```text
placed
confirmed
preparing
out_for_delivery
delivered
cancelled
```

Display a suitable message for each status.

Example:

```text
Enter status: out_for_delivery
```

Output:

```text
Your order is on the way
```

---

# Topic 9 — More Challenging Problems

## Q31. Banking Application with Nested Menu

Create a banking application.

Main menu:

```text
1 → Personal Banking
2 → Business Banking
```

Personal Banking:

```text
1 → Balance
2 → Transfer
3 → Loan
```

Business Banking:

```text
1 → Balance
2 → Payroll
3 → Business Loan
```

Use nested `match-case`.

### Sample Input

```text
Enter banking type: 2
Enter option: 3
```

### Sample Output

```text
Business Loan Selected
```

---

## Q32. School Management System

Create a school management system.

First select:

```text
1 → Student
2 → Teacher
3 → Parent
```

Student options:

```text
1 → Marks
2 → Attendance
3 → Homework
```

Teacher options:

```text
1 → Enter Marks
2 → Attendance
3 → Assign Homework
```

Parent options:

```text
1 → Child Marks
2 → Child Attendance
3 → Contact Teacher
```

Use nested `match-case`.

---

## Q33. Travel Booking System

Create a travel booking system.

Select transport:

```text
1 → Flight
2 → Train
3 → Bus
```

Then show options:

Flight:

```text
1 → Economy
2 → Business
```

Train:

```text
1 → Sleeper
2 → AC
```

Bus:

```text
1 → Ordinary
2 → Volvo
```

Use nested `match-case`.

---

## Q34. Gaming Console Menu

Create a gaming console menu:

```text
1 → Start Game
2 → Load Game
3 → Settings
4 → Exit
```

If Settings is selected, show:

```text
1 → Sound
2 → Graphics
3 → Controls
```

Use nested `match-case` for the Settings menu.

---

# Topic 10 — Challenge Problems

## Q35. Restaurant Ordering System

Create a restaurant ordering system.

First select a category:

```text
1 → Starters
2 → Main Course
3 → Desserts
4 → Drinks
```

Then show different items for each category.

Example:

Starters:

```text
1 → Soup
2 → Spring Roll
3 → Garlic Bread
```

Main Course:

```text
1 → Pizza
2 → Pasta
3 → Biryani
```

Desserts:

```text
1 → Ice Cream
2 → Cake
3 → Gulab Jamun
```

Drinks:

```text
1 → Coffee
2 → Tea
3 → Juice
```

Use nested `match-case`.

---

## Q36. Digital Payment Application

Create a digital payment application.

Payment type:

```text
1 → UPI
2 → Card
3 → Wallet
```

If UPI is selected:

```text
1 → Scan QR
2 → Enter UPI ID
```

If Card is selected:

```text
1 → Credit Card
2 → Debit Card
```

If Wallet is selected:

```text
1 → Add Money
2 → Pay Using Wallet
```

Use nested `match-case`.

---

## Q37. Online Learning Platform

Create an online learning platform.

First select:

```text
1 → Programming
2 → Mathematics
3 → Communication
```

Programming:

```text
1 → Python
2 → Java
3 → C++
```

Mathematics:

```text
1 → Algebra
2 → Calculus
3 → Statistics
```

Communication:

```text
1 → English
2 → Presentation
3 → Interview Skills
```

Use nested `match-case`.

---

## Q38. Smart Vehicle Dashboard

Create a vehicle dashboard.

Main options:

```text
1 → Engine
2 → Lights
3 → Music
4 → Navigation
```

For Engine:

```text
1 → Start
2 → Stop
```

For Lights:

```text
1 → Headlights
2 → Indicators
3 → Hazard Lights
```

For Music:

```text
1 → Play
2 → Pause
3 → Next
4 → Previous
```

For Navigation:

```text
1 → Start Navigation
2 → Stop Navigation
```

Use nested `match-case`.

---

# Topic 11 — Mixed Logic Challenge

## Q39. Employee Portal

Create an employee portal.

Main menu:

```text
1 → Employee
2 → Manager
```

Employee options:

```text
1 → View Profile
2 → Apply Leave
3 → View Salary
```

Manager options:

```text
1 → View Team
2 → Approve Leave
3 → View Reports
```

Use nested `match-case`.

For the `Apply Leave` option, ask for the number of leave days.

Use `if` to check:

- If leave days are greater than `0`, display `Leave Request Submitted`.
- Otherwise display `Invalid Leave Days`.

This problem should use both `match-case` and `if`.

---

## Q40. Complete Mini Application — College Portal

Create a small college portal.

Main menu:

```text
1 → Student
2 → Teacher
3 → Administration
```

### Student

```text
1 → Profile
2 → Marks
3 → Attendance
4 → Courses
```

### Teacher

```text
1 → Students
2 → Enter Marks
3 → Attendance
4 → Courses
```

### Administration

```text
1 → Fees
2 → Admissions
3 → Notices
4 → Departments
```

Requirements:

1. Use `match-case` for the main menu.
2. Use nested `match-case` for the selected role.
3. Use `case _` for invalid choices.
4. Keep the program easy to read.
5. Do not use `if-elif-else` for fixed menu choices.

### Sample Input

```text
Enter role: 1
Enter option: 2
```

### Sample Output

```text
Opening Student Marks
```

---

# Practice Progression

Try solving the questions in this order:

```text
Q1–Q8
↓
Basic match-case

Q9–Q15
↓
String matching + multiple values

Q16–Q19
↓
Nested match-case

Q20–Q22
↓
match-case + calculations

Q23–Q25
↓
match-case + if

Q26–Q30
↓
Real-world applications

Q31–Q34
↓
Nested real-world applications

Q35–Q38
↓
Complex nested applications

Q39–Q40
↓
Mixed Logic Challenges
```

---

# Final Checklist

Before considering a problem complete, check:

- [ ] Did I use `match-case` where the decision is based on fixed values/options?
- [ ] Did I use `case _` for invalid/default input?
- [ ] Did I use `|` where multiple values have the same result?
- [ ] Did I use nested `match-case` only when another menu/decision depends on the first choice?
- [ ] Did I use `if` when a real condition or range check was required?
- [ ] Is the indentation correct?
- [ ] Are all possible user choices handled?
- [ ] Is invalid input handled?
- [ ] Is the code easy to read?

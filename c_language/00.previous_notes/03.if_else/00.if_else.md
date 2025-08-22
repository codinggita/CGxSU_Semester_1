# C Language Control Structures: If Conditions

## Introduction to Decision Making

### Why Do We Need Decision Making in Programming?

In real life, we make decisions every moment:
- **Crossing the road**: If the light is green → cross, else → wait
- **Choosing clothes**: If it's raining → take umbrella, else → leave it
- **Studying**: If exam is tomorrow → study hard, else → relax

Similarly, programs need to make decisions based on:
- User input
- Data values
- System conditions
- Time and date
- File existence
- Network status

### Types of Decision Making Structures in C

1. **Simple if** - Execute code only when condition is true
2. **if-else** - Execute one block if true, another if false
3. **else-if ladder** - Check multiple conditions in sequence
4. **Nested if** - if statements inside other if statements
5. **Switch case** - Multiple choice based on a single variable

---

## 1. Definition of if Condition in C

The if statement in C is a decision-making control structure.
It allows your program to execute a block of code only if a specific condition is true (non-zero).

**Think of it as a "gatekeeper"** - it only lets code through when the condition is satisfied.

### Syntax:

```c
if (condition) {
    // Code to execute if condition is true
}
```

## 2. How it Works

The condition inside parentheses is a logical expression (it can use relational operators like >, <, ==, etc., or logical operators like &&, ||, !).

If the condition evaluates to:

- **True (non-zero)** → The code block inside {} runs.
- **False (zero)** → The code block is skipped, and the program moves to the next statement.

## 3. Flowchart

```
      ┌──────────────┐
      │  Condition?  │
      └─────┬────────┘
            │
     ┌──────▼──────┐
     │  True? Run  │
     │  the code   │
     └──────┬──────┘
            │
            ▼
      Continue program
```

## 4. Key Points to Remember

- Only one condition is checked.
- Curly braces {} are optional if you have only one statement inside if.
- In C, 0 means false and any non-zero value means true.
- You can nest if statements inside another (nested if).

### Understanding True and False in C

In C, the concept of true and false is different from other languages:

```c
// These are all considered FALSE in C:
if (0) { }           // Zero
if (0.0) { }         // Zero float
if ('\0') { }        // Null character
if (NULL) { }        // Null pointer

// These are all considered TRUE in C:
if (1) { }           // Any non-zero integer
if (-5) { }          // Negative numbers are also true!
if (3.14) { }        // Non-zero float
if ('A') { }         // Any character (ASCII value is non-zero)
if ("Hello") { }     // String literals (pointer to first character)
```

**Real-world analogy**: Think of a light switch - it's either ON (true) or OFF (false). In C, only 0 is OFF, everything else is ON!

## 5. Real-life Analogy

Think of an automatic street light:

- **Condition**: Is it dark outside?
- **If it's dark** → Turn the street light ON.
- **Otherwise** → Do nothing.

### More Real-World Examples

#### 1. **ATM Machine**
```c
if (balance >= amount) {
    // Allow withdrawal
    dispense_money();
    update_balance();
} else {
    // Insufficient funds
    display_error("Insufficient balance");
}
```

#### 2. **Traffic Light System**
```c
if (light == 'G') {
    // Green light
    allow_traffic();
} else if (light == 'Y') {
    // Yellow light
    slow_down();
} else {
    // Red light
    stop_traffic();
}
```

#### 3. **Email Filter**
```c
if (sender == "boss@company.com") {
    // Mark as important
    mark_urgent();
    send_notification();
}
```

#### 4. **Game Character Health**
```c
if (health <= 0) {
    // Character dies
    game_over();
} else if (health < 20) {
    // Low health warning
    show_warning("Low health!");
    play_warning_sound();
}
```

### Example 1 — Simple if: check if a number is positive

```c
#include <stdio.h>                 // include standard I/O functions (printf, scanf)
int main() {                       // start of main function — program entry point
    int num;                       // declare an integer variable named 'num' to store user input
    printf("Enter an integer: ");  // prompt the user to enter an integer
    scanf("%d", &num);             // read an integer from stdin and store it in 'num' (note: robust code should check scanf's return)
    if (num > 0) {                 // if-condition: test whether num is greater than 0 (true when positive)
        printf("%d is positive\n", num); // executed only when the condition above is true
    }                              // end of if block
    return 0;                      // return 0 to the OS — indicates successful program termination
}                                  // end of main
```

### Example 2 — if-else: check even or odd

```c
#include <stdio.h>                     // include I/O functions
int main() {                           // program entry
    int n;                             // variable to hold the input number
    printf("Enter an integer: ");      // ask the user for a number
    scanf("%d", &n);                   // read integer into n
    if (n % 2 == 0) {                  // condition: remainder of n divided by 2 equals 0 → n is even
        printf("%d is even\n", n);     // executed when n is even
    } else {                           // else branch executes when the if-condition is false (i.e., n is odd)
        printf("%d is odd\n", n);      // executed when n is odd
    }                                  // end of if-else block
    return 0;                          // exit program successfully
}                                       // end of main
```

### Example 3 — Nested if: detect divisible by 4 (and by 2)

```c
#include <stdio.h>                         // needed for printf/scanf
int main() {                               // entry point
    int x;                                // integer variable to read
    printf("Enter an integer: ");         // prompt the user
    scanf("%d", &x);                      // read input into x
    if (x % 2 == 0) {                     // outer if: true when x is divisible by 2 (x is even)
        if (x % 4 == 0) {                 // nested if: only checked when outer if is true; true when x is divisible by 4
            printf("%d is divisible by 4 (so also by 2)\n", x); // executed if both conditions hold
        } else {                          // else of nested if — executes when x is even but not divisible by 4
            printf("%d is even but not divisible by 4\n", x);
        }                                 // end nested if-else
    } else {                              // else of outer if — executes when x is not divisible by 2 (x is odd)
        printf("%d is odd\n", x);
    }                                     // end outer if-else
    return 0;                             // normal termination
}                                         // end main
```

### Example 4 — if with logical operators (&&, ||): eligibility check

```c
#include <stdio.h>                           // include standard I/O
int main() {                                 // program starts here
    int age;                                 // holds user's age
    int hasID;                               // flag: 1 if user has ID, 0 if not
    printf("Enter your age: ");              // prompt for age
    scanf("%d", &age);                       // read age into variable 'age'
    printf("Do you have an ID? Enter 1 for Yes, 0 for No: "); // prompt for ID possession
    scanf("%d", &hasID);                     // read the ID flag into 'hasID'
    if (age >= 18 && hasID == 1) {           // condition: true only when age is at least 18 AND hasID equals 1
        printf("You are eligible to vote.\n"); // executed when both sub-conditions are true
    } else {                                 // else executes when either age < 18 OR hasID != 1 (or both)
        printf("You are NOT eligible to vote.\n");
    }                                        // end if-else
    return 0;                                // exit program
}                                            // end main
```

### Example 5 — if with floats and ranges: fever / normal / low temp

```c
#include <stdio.h>                             // std I/O header
int main() {                                   // program entry
    float temp;                                // use float to store body temperature (may have decimal)
    printf("Enter your body temperature (C): "); // ask the user to enter temperature in Celsius
    scanf("%f", &temp);                        // read float value into temp
    if (temp > 37.5f) {                        // condition: if temperature strictly greater than 37.5 C → fever
        printf("You have a fever (%.1f C).\n", temp); // print message when fever detected
    } else if (temp >= 36.5f) {                // else-if: if not fever but temp between 36.5 and 37.5 inclusive → normal
        printf("Temperature is normal (%.1f C).\n", temp);
    } else {                                   // else: temp < 36.5 → below normal
        printf("Temperature is below normal (%.1f C).\n", temp);
    }                                          // end of if-else-if
    return 0;                                  // successful end
}                                              // end main
```


### Example 7 — Smart Home Temperature Control

```c
#include <stdio.h>   // Include standard input-output library for printf and scanf functions

int main() {         // Program execution starts here
    float current_temp, target_temp;  // Variables to store the current and target room temperature
    int time_hour;                    // Variable to store current time in 24-hour format (0–23)
    
    printf("Enter current temperature: ");  // Prompt the user to enter the current room temperature
    scanf("%f", &current_temp);             // Read a floating-point number and store it in current_temp
    
    printf("Enter target temperature: ");   // Prompt the user to enter the desired (target) temperature
    scanf("%f", &target_temp);              // Read a floating-point number and store it in target_temp
    
    printf("Enter current hour (0-23): ");  // Prompt the user to enter the current time in hours
    scanf("%d", &time_hour);                // Read an integer and store it in time_hour
    
    // Smart temperature control logic begins here
    
    if(current_temp > target_temp + 2) {    // If current temperature is more than 2 degrees above target
        printf("Temperature too high! Turning on AC.\n");  // Turn on the air conditioner
        
        if(time_hour >= 22 || time_hour <= 6) { // If it's night time (10 PM or later, OR before 7 AM)
            printf("Night mode: Setting AC to energy-saving mode.\n"); // Set AC to energy-saving mode
        }
        
    } else if(current_temp < target_temp - 2) { // Else if current temperature is more than 2 degrees below target
        printf("Temperature too low! Turning on heater.\n"); // Turn on the heater
        
        if(time_hour >= 22 || time_hour <= 6) { // If it's night time
            printf("Night mode: Setting heater to sleep mode.\n"); // Set heater to sleep mode
        }
        
    } else { // Else, the temperature is within the comfortable range (±2 degrees of target)
        printf("Temperature is comfortable. No action needed.\n"); // No heating or cooling required
    }
    
    return 0; // Indicate that the program ended successfully
}
```

---

## If-Else Statement

### 1. Definition

The if-else statement in C is a decision-making control structure used to execute one block of code if a condition is true, and another block of code if the same condition is false.
It ensures only one of the two possible code blocks will run.

### 2. Syntax

```c
if (condition) {
    // Code block 1 → executes when condition is true
} else {
    // Code block 2 → executes when condition is false
}
```

### 3. How it Works

1. Evaluate the condition inside the parentheses.
2. If the condition is true (non-zero), execute the first block { ... } after if.
3. If the condition is false (zero), skip the first block and execute the block after else.

### 4. Flowchart

```
        ┌────────────────┐
        │  Condition ?   │
        └──────┬─────────┘
               │
         ┌─────▼─────┐
         │   True    │
         │ Execute   │
         │ if-block  │
         └─────┬─────┘
               │
               ▼
          Continue program
               ▲
               │
         ┌─────▼─────┐
         │   False   │
         │ Execute   │
         │ else-block│
         └───────────┘
```

### 5. Important Points

- if-else always executes exactly one block: either the if block or the else block.
- else is optional — if you omit it, you just have a simple if.
- You can nest multiple if-else statements for complex conditions.
- In C:
  - 0 → false
  - Non-zero → true
- The else is paired with the nearest unmatched if (important in nested conditions).

### 6. Real-life Analogy

Imagine checking the weather before going out:

- **Condition**: Is it raining?
- **If yes** → Take an umbrella.
- **Else** → Wear sunglasses.

Only one action will happen depending on the answer.

### Example 1 — Check if a number is positive or negative

```c
#include <stdio.h>                      // Include standard I/O library for printf and scanf

int main() {                            // Start of main function
    int num;                            // Declare an integer variable 'num' to store the input number

    printf("Enter an integer: ");       // Prompt the user to enter an integer
    scanf("%d", &num);                  // Read the integer value from the user into 'num'

    if (num >= 0) {                     // Check if num is greater than or equal to 0
        printf("%d is positive or zero.\n", num); // Executes if condition is TRUE (positive or zero)
    } else {                            // Executes when condition is FALSE (negative number)
        printf("%d is negative.\n", num);         // Prints that the number is negative
    }

    return 0;                           // End program successfully
}
```

### Example 2 — Check if a number is even or odd

```c
#include <stdio.h>                       // Standard I/O library

int main() {                             // Start of program
    int n;                               // Declare variable 'n'

    printf("Enter an integer: ");        // Ask the user for input
    scanf("%d", &n);                     // Store the entered integer in 'n'

    if (n % 2 == 0) {                    // Check if remainder when dividing by 2 is zero
        printf("%d is even.\n", n);      // TRUE case: number is even
    } else {                             // FALSE case: number is not divisible by 2
        printf("%d is odd.\n", n);       // Prints that the number is odd
    }

    return 0;                            // Exit program
}
```

### Example 3 — Check if a student passed or failed

```c
#include <stdio.h>                         // Include I/O functions

int main() {                               // Program entry
    int marks;                             // Variable to store marks

    printf("Enter your marks: ");          // Prompt user
    scanf("%d", &marks);                   // Read marks from user

    if (marks >= 40) {                     // Passing criteria: marks greater than or equal to 40
        printf("Congratulations! You passed.\n"); // TRUE case: student passed
    } else {                               // If marks are less than 40
        printf("Sorry, you failed.\n");    // FALSE case: student failed
    }

    return 0;                              // Program ends
}
```

### Example 4 — Age check for movie ticket discount

```c
#include <stdio.h>                               // Include standard I/O

int main() {                                     // Start program
    int age;                                     // Variable to store age

    printf("Enter your age: ");                  // Ask for age
    scanf("%d", &age);                           // Store input in 'age'

    if (age <= 12) {                             // Condition: age is 12 or younger
        printf("You get a child discount on the ticket.\n"); // TRUE case: eligible for discount
    } else {                                     // Condition is false
        printf("No discount. Normal ticket price applies.\n"); // FALSE case
    }

    return 0;                                    // Exit program
}
```

### Example 5 — Check if temperature is hot or cold

```c
#include <stdio.h>                               // Include input/output functions

int main() {                                     // Main function start
    float temp;                                  // Variable to store temperature

    printf("Enter the temperature in Celsius: "); // Ask user for temperature
    scanf("%f", &temp);                          // Read float value into temp

    if (temp >= 30.0) {                          // Condition: temperature is 30°C or more
        printf("It's a hot day! Stay hydrated.\n"); // TRUE case: hot day
    } else {                                     // Condition is false
        printf("It's a cool day! Enjoy the weather.\n"); // FALSE case: cool day
    }

    return 0;                                    // End of program
}
```

---

## Else-If Ladder

### 1. Definition

The else-if ladder in C is a multi-way decision-making control structure.
It allows you to check multiple conditions one after another, and execute the block of code corresponding to the first condition that is true.
If none of the conditions are true, the else block (if present) is executed.

### 2. Syntax

```c
if (condition1) {
    // Block 1 → runs if condition1 is true
}
else if (condition2) {
    // Block 2 → runs if condition1 is false AND condition2 is true
}
else if (condition3) {
    // Block 3 → runs if all above conditions are false AND condition3 is true
}
...
else {
    // Default block → runs if none of the conditions are true
}
```

### 3. How it Works

1. Evaluate condition1:
   - If true → execute Block 1, then skip the rest.
   - If false → go to next else if.

2. Evaluate condition2:
   - If true → execute Block 2, then skip the rest.
   - If false → go to next else if.

3. Continue this process until:
   - One condition is true → execute its block, stop checking others.
   - None are true → execute the final else block (if present).

### 4. Flowchart

```
         ┌─────────────┐
         │ condition1? │
         └─────┬───────┘
               │
        ┌──────▼──────┐
        │   True      │
        │ Execute B1  │
        └──────┬──────┘
               │
               ▼
           End program
               ▲
               │
        ┌──────▼──────┐
        │  False      │
        │ condition2? │
        └──────┬──────┘
               │
       ... and so on
```

### 5. Important Points

- Only one block executes — the first true condition's block.
- If all conditions are false, the else block (if present) runs.
- The else at the end is optional.
- else-if makes the code cleaner than writing multiple separate if statements.
- It checks in order from top to bottom — so order of conditions matters.

### 6. Real-life Analogy

Think of grading a student:

- If marks ≥ 90 → Grade A
- Else if marks ≥ 75 → Grade B
- Else if marks ≥ 50 → Grade C
- Else → Fail

Once you assign a grade, you don't check further conditions.

### Example 1 — Student grading system

```c
#include <stdio.h>                                  // Include standard input/output library

int main() {                                        // Start of main function
    int marks;                                      // Variable to store student's marks

    printf("Enter your marks: ");                   // Prompt user for marks
    scanf("%d", &marks);                            // Read marks into the variable 'marks'

    if (marks >= 90) {                              // First condition: marks 90 or above
        printf("Grade A\n");                        // TRUE case: top grade
    }
    else if (marks >= 75) {                         // Checked if first condition is FALSE and marks 75 or above
        printf("Grade B\n");                        // Prints Grade B
    }
    else if (marks >= 50) {                         // Checked if above two conditions are FALSE and marks 50 or above
        printf("Grade C\n");                        // Prints Grade C
    }
    else {                                          // Executed if all previous conditions are FALSE
        printf("Fail\n");                           // Student failed
    }

    return 0;                                       // End of program
}
```

### Example 2 — Weather temperature classification

```c
#include <stdio.h>

int main() {
    float temp;                                     // Variable for temperature in Celsius

    printf("Enter temperature in Celsius: ");       // Ask user for temperature
    scanf("%f", &temp);                             // Read float value into temp

    if (temp >= 35.0) {                             // Condition 1: very hot day
        printf("It's very hot! 🥵\n");
    }
    else if (temp >= 25.0) {                        // Condition 2: warm day
        printf("It's warm and sunny.\n");
    }
    else if (temp >= 15.0) {                        // Condition 3: cool day
        printf("It's a bit cool today.\n");
    }
    else {                                          // If none of the above match
        printf("It's cold! 🥶\n");
    }

    return 0;
}
```

### Example 3 — Ticket pricing by age

```c
#include <stdio.h>

int main() {
    int age;

    printf("Enter your age: ");                     // Ask for age
    scanf("%d", &age);                              // Store entered age

    if (age <= 5) {                                 // Condition 1: very young children
        printf("Free ticket for you!\n");
    }
    else if (age <= 12) {                           // Condition 2: children up to 12
        printf("Child ticket price: ₹50\n");
    }
    else if (age <= 60) {                           // Condition 3: adults up to 60
        printf("Adult ticket price: ₹100\n");
    }
    else {                                          // Condition 4: senior citizens
        printf("Senior citizen price: ₹70\n");
    }

    return 0;
}
```

### Example 4 — Simple calculator using else-if

```c
#include <stdio.h>

int main() {
    char op;                                        // Variable to store the operator (+, -, *, /)
    double num1, num2;                              // Variables to store two numbers

    printf("Enter first number: ");
    scanf("%lf", &num1);                            // Read first number
    printf("Enter an operator (+, -, *, /): ");
    scanf(" %c", &op);                              // Read operator (note space before %c to skip whitespace)
    printf("Enter second number: ");
    scanf("%lf", &num2);                            // Read second number

    if (op == '+') {                                // Condition: addition
        printf("Result: %.2lf\n", num1 + num2);
    }
    else if (op == '-') {                           // Condition: subtraction
        printf("Result: %.2lf\n", num1 - num2);
    }
    else if (op == '*') {                           // Condition: multiplication
        printf("Result: %.2lf\n", num1 * num2);
    }
    else if (op == '/') {                           // Condition: division
        if (num2 != 0) {                            // Extra check to prevent divide-by-zero
            printf("Result: %.2lf\n", num1 / num2);
        } else {
            printf("Error: Division by zero!\n");
        }
    }
    else {                                          // If none of the operators match
        printf("Invalid operator!\n");
    }

    return 0;
}
```

### Example 5 — Grade point to description

```c
#include <stdio.h>

int main() {
    int gradePoint;                                 // Variable for grade point (1 to 5)

    printf("Enter your grade point (1-5): ");
    scanf("%d", &gradePoint);                       // Read grade point

    if (gradePoint == 5) {                          // If grade point is exactly 5
        printf("Excellent performance!\n");
    }
    else if (gradePoint == 4) {                     // If grade point is exactly 4
        printf("Very good performance.\n");
    }
    else if (gradePoint == 3) {                     // If grade point is exactly 3
        printf("Good performance.\n");
    }
    else if (gradePoint == 2) {                     // If grade point is exactly 2
        printf("Satisfactory performance.\n");
    }
    else if (gradePoint == 1) {                     // If grade point is exactly 1
        printf("Needs improvement.\n");
    }
    else {                                          // If entered grade point is outside 1–5
        printf("Invalid grade point entered.\n");
    }

    return 0;
}
```

---

## Ternary Operator (Conditional Operator)

### 1. Definition

The ternary operator in C, also called the conditional operator (?:), is a shorthand way of writing an if-else statement.
It allows you to evaluate a condition and choose between two expressions based on whether the condition is true or false — all in one single line.

### 2. Syntax

```c
condition ? expression_if_true : expression_if_false;
```

### 3. How It Works

Evaluate the condition:

- If true (non-zero) → The result of the ternary operation is expression_if_true.
- If false (zero) → The result is expression_if_false.

The chosen expression is then returned and can be:
- Stored in a variable
- Used in a function call
- Printed directly

### 4. Example:

```c
#include <stdio.h>

int main() {
    int a = 10, b = 20;
    int max;

    // Using ternary operator to find maximum
    max = (a > b) ? a : b;

    printf("Maximum value is: %d\n", max);
    return 0;
}
```

**Explanation:**
- `(a > b)` is the condition.
- If `a > b` is true, `a` is assigned to `max`.
- If false, `b` is assigned to `max`.

### 5. Flow of Execution

```
       Condition ?
       ┌──────┬───────┐
    True      False
     │          │
expression1  expression2
```

### 6. Key Points

- Called ternary because it takes three operands: condition, expression_if_true, expression_if_false.
- Compact alternative to if-else when assigning values or returning results.
- Improves code brevity but can reduce readability if overused or nested.
- Can be nested, but it's better to avoid complex nesting for clarity.

### 7. Real-Life Analogy

Imagine you're buying coffee:

- **Condition**: Do you have ₹100 or more?
- **Yes** → Buy large coffee.
- **No** → Buy small coffee.

Using ternary:
```c
coffee = (money >= 100) ? "Large Coffee" : "Small Coffee";
```

### Example 1 — Simple comparison

```c
#include <stdio.h>                    // Include standard input/output library for printf function

int main() {                          // Main function - program execution starts here
    int age = 20;                     // Declare and initialize integer variable 'age' with value 20
    char* status;                     // Declare a pointer to character array (string) named 'status'
    
    // Using ternary operator to determine adult/minor status
    status = (age >= 18) ? "Adult" : "Minor";  // If age >= 18, assign "Adult" to status, else assign "Minor"
    printf("Status: %s\n", status);   // Print the determined status using %s format specifier for string
    
    return 0;                         // Return 0 to indicate successful program completion
}
```

### Example 2 — Finding maximum of three numbers

```c
#include <stdio.h>                    // Include standard input/output library for printf function

int main() {                          // Main function - program execution starts here
    int a = 15, b = 25, c = 10;      // Declare and initialize three integer variables with values 15, 25, and 10
    int max;                          // Declare integer variable 'max' to store the maximum value
    
    // Nested ternary operator to find maximum of three numbers
    max = (a > b) ? ((a > c) ? a : c) : ((b > c) ? b : c);  // Complex nested ternary: 
                                                             // First check: if a > b
                                                             //   If true: check if a > c, if yes return a, else return c
                                                             //   If false: check if b > c, if yes return b, else return c
    
    printf("Maximum of %d, %d, %d is: %d\n", a, b, c, max);  // Print the three numbers and their maximum value
    return 0;                         // Return 0 to indicate successful program completion
}
```

### Example 3 — Grade assignment

```c
#include <stdio.h>                    // Include standard input/output library for printf function

int main() {                          // Main function - program execution starts here
    int marks = 85;                   // Declare and initialize integer variable 'marks' with value 85
    char grade;                       // Declare character variable 'grade' to store the letter grade
    
    // Using nested ternary operators for grade assignment based on marks
    grade = (marks >= 90) ? 'A' :     // If marks >= 90, assign 'A'
            (marks >= 80) ? 'B' :     // Else if marks >= 80, assign 'B'
            (marks >= 70) ? 'C' :     // Else if marks >= 70, assign 'C'
            (marks >= 60) ? 'D' :     // Else if marks >= 60, assign 'D'
            'F';                      // Else assign 'F' (failing grade)
    
    printf("Grade: %c\n", grade);     // Print the assigned grade using %c format specifier for character
    return 0;                         // Return 0 to indicate successful program completion
}
```

### Example 4 — Even or odd check

```c
#include <stdio.h>                    // Include standard input/output library for printf function

int main() {                          // Main function - program execution starts here
    int num = 7;                      // Declare and initialize integer variable 'num' with value 7
    
    // Direct printing with ternary operator embedded in printf statement
    printf("%d is %s\n", num, (num % 2 == 0) ? "even" : "odd");  // Print the number and its even/odd status:
                                                                  // %d prints the number (7)
                                                                  // %s prints the result of ternary operation:
                                                                  //   If num % 2 == 0 (remainder is 0), print "even"
                                                                  //   Else print "odd"
    
    return 0;                         // Return 0 to indicate successful program completion
}
```

### Example 5 — Absolute value

```c
#include <stdio.h>                    // Include standard input/output library for printf function

int main() {                          // Main function - program execution starts here
    int num = -15;                    // Declare and initialize integer variable 'num' with value -15 (negative number)
    int abs_value;                    // Declare integer variable 'abs_value' to store the absolute value
    
    // Using ternary operator to calculate absolute value
    abs_value = (num >= 0) ? num : -num;  // If num >= 0 (positive or zero), keep num as is
                                          // If num < 0 (negative), multiply by -1 to make it positive
                                          // This gives us the absolute value of the number
    
    printf("Absolute value of %d is %d\n", num, abs_value);  // Print the original number and its absolute value
    return 0;                         // Return 0 to indicate successful program completion
}
```

---

## Common Mistakes and Best Practices

### Common Mistakes Students Make

#### 1. **Using = instead of ==**
```c
// WRONG - This assigns 5 to x, not compares!
if (x = 5) {
    printf("x is 5\n");
}

// CORRECT - This compares x with 5
if (x == 5) {
    printf("x is 5\n");
}
```

#### 2. **Missing Curly Braces**
```c
// WRONG - Only first printf is part of if
if (x > 0)
    printf("x is positive\n");
    printf("This always prints!\n");  // This is NOT part of if!

// CORRECT - Both statements are part of if
if (x > 0) {
    printf("x is positive\n");
    printf("This only prints when x > 0\n");
}
```

#### 3. **Dangling Else Problem**
```c
// CONFUSING - Which if does else belong to?
if (x > 0)
    if (y > 0)
        printf("Both positive\n");
else
    printf("x is not positive\n");  // This else belongs to inner if!

// CLEAR - Use braces to avoid confusion
if (x > 0) {
    if (y > 0) {
        printf("Both positive\n");
    }
} else {
    printf("x is not positive\n");
}
```

#### 4. **Floating Point Comparison**
```c
// WRONG - Floating point comparison
float a = 0.1 + 0.2;
if (a == 0.3) {  // This might be false due to precision errors
    printf("Equal\n");
}

// CORRECT - Use tolerance for floating point
float a = 0.1 + 0.2;
if (fabs(a - 0.3) < 0.0001) {  // Check if difference is very small
    printf("Equal\n");
}
```

### Best Practices

#### 1. **Always Use Braces**
```c
// GOOD - Clear and safe
if (condition) {
    statement1;
    statement2;
}
```

#### 2. **Use Meaningful Variable Names**
```c
// BAD
if (x > y) { }

// GOOD
if (user_age >= voting_age) { }
```

#### 3. **Simplify Complex Conditions**
```c
// BAD - Hard to read
if ((x > 0 && y > 0) || (x < 0 && y < 0)) { }

// GOOD - Break into smaller parts
int both_positive = (x > 0 && y > 0);
int both_negative = (x < 0 && y < 0);
if (both_positive || both_negative) { }
```

#### 4. **Use Constants for Magic Numbers**
```c
// BAD
if (age >= 18) { }

// GOOD
#define VOTING_AGE 18
if (age >= VOTING_AGE) { }
```

---

## Advanced Concepts

### 1. **Short-Circuit Evaluation**

C uses short-circuit evaluation for logical operators:

```c
// If x is 0, y is never checked (short-circuit)
if (x != 0 && y/x > 5) {         // First, check if x is not zero. If false, skip checking y/x to avoid division by zero.
    printf("Safe division\n");   // Runs only if x is non-zero AND y/x > 5
}

// If x is non-zero, y is never checked
if (x != 0 || y/x > 5) {         // First, check if x is not zero. If true, skip checking y/x because condition is already satisfied.
    printf("Either condition is true\n"); // Runs if either x != 0 OR y/x > 5
}

```

### 2. **Complex Nested Conditions**

```c
#include <stdio.h>               // Include standard input-output library for printf and scanf

int main() {                     // Main function starts (program execution begins here)
    int age, income, credit_score;   // Declare three integer variables to store user input
    
    printf("Enter age, income, and credit score: ");  // Ask user to enter values
    scanf("%d %d %d", &age, &income, &credit_score);  // Read three integers from user input
    
    // Complex loan approval logic
    if (age >= 18) {             // First condition: User must be at least 18 years old
        if (income >= 50000) {   // Second condition: User must earn at least 50,000
            if (credit_score >= 700) {                // Third condition: Excellent credit score
                printf("Loan approved with best rate!\n");   // Approve with best rate
            } else if (credit_score >= 600) {         // Else if credit score is good
                printf("Loan approved with standard rate.\n");  // Approve with standard rate
            } else {                                  // Else, poor credit score
                printf("Loan denied: Poor credit score.\n");    // Deny loan
            }
        } else {                                      // If income < 50,000
            printf("Loan denied: Insufficient income.\n");      // Deny loan
        }
    } else {                                          // If age < 18
        printf("Loan denied: Too young.\n");          // Deny loan
    }
    
    return 0;                  // Exit program successfully
}

```

---

## Summary

### Key Takeaways

1. **If statements** are the foundation of decision-making in programming
2. **Always use braces** to avoid confusion and bugs
3. **Be careful with comparisons** - use == for equality, = for assignment
4. **Order matters** in else-if ladders
5. **Practice regularly** with real-world problems


---

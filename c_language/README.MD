# 📘 C Language Syllabus (CodingGita Semester 1)

### **Unit 1: Introduction to C Programming**

0. History & importance of C
1. Structure of a C program
2. Compilation & execution process
3. Tokens: keywords, identifiers, constants, variables
4. Input & Output in C

---

### **Unit 2: Data Types (In-Depth)**

5. Data Types & Modifiers

   * Primitive types: `int`, `float`, `char`, `double`, `void`
   * Type modifiers: `short`, `long`, `long long`, `signed`, `unsigned`
   * Size and range of each type (`sizeof` operator)
   * Integer overflow/underflow
   * Type casting (implicit & explicit)
   * Brief mention of **string as character array with `\0` terminator** (detailed later)

---

### **Unit 3: Operators & Expressions**

6. Arithmetic operators (+, -, \*, /, %)
7. Relational operators (>, <, >=, <=, ==, !=)
8. Logical operators (&&, ||, !)
9. Assignment operators (=, +=, -=, etc.)
10. Increment/Decrement operators (++ and --)
11. Bitwise operators

* AND (`&`), OR (`|`), XOR (`^`), NOT (`~`), Shift (`<<`, `>>`)
* Applications: check even/odd, swap values, track attendance using bits

12. Operator precedence and associativity

---

### **Unit 4: Control Flow**

13. Conditional statements:

* `if`, `if-else`, `nested if`, `switch-case`

14. Looping:

* `for`, `while`, `do-while`
* Nested loops
* `break`, `continue`, `goto`

---

### **Unit 5: Arrays & Strings**

15. Arrays

* Single-dimensional arrays
* Multi-dimensional arrays (matrices)
* Applications: searching, sorting, sum/average of elements

16. Strings (detailed)

* Character arrays vs string literals
* String input/output (`scanf`, `printf`, `gets`, `puts`, `fgets`)
* String handling functions (`strlen`, `strcpy`, `strcat`, `strcmp`)

---

### **Unit 6: Functions & Debugging**

17. Functions

* Declaration, definition, calling
* Parameters vs arguments
* Call by value & call by reference
* Recursion

18. Debugging Basics

* Print-based debugging (`printf`)
* Common runtime errors (segfault, infinite loops, uninitialized variables)

---

### **Unit 7: Program Structure & Memory**

19. Modular Programming & Header Files

* Splitting into `.h` and `.c` files
* Function prototypes
* Code reusability

20. Pointers (Basics)

* Memory addresses & dereferencing
* Pointers with variables & arrays
* Call by reference

21. Storage Classes

* auto, extern, register, static
* Scope, lifetime, visibility

22. Preprocessor Directives

* `#include`, `#define`, macros
* Conditional compilation (`#ifdef`, `#ifndef`, `#endif`)

---

### **Unit 8: User-Defined Data Types**

23. Structures

* Defining & using structures
* Arrays of structures
* Nested structures
* Example: Student record system

24. Unions

* Difference between struct & union
* Memory-sharing behavior

25. Enumerations

* Defining enums
* Example: Days of week, course codes

---

### **Unit 9: File Handling & Standard Libraries**

26. File Handling

* `fopen`, `fclose`, `fprintf`, `fscanf`
* Reading & writing text files
* Error handling: `NULL`, `feof`, `ferror`

27. Standard C Libraries

* `<math.h>` (`sqrt`, `pow`, `sin`)
* `<stdlib.h>` (`rand`, `srand`, `atoi`, `exit`)
* `<time.h>` (random seeds, time functions)

---

### **Unit 10: Advanced C Concepts**

28. Dynamic Memory Allocation

* `malloc`, `calloc`, `realloc`, `free`
* Example: dynamic storage for student names



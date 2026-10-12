# Python Output Guessing Worksheet

## Topics: `break`, `continue`, `for-else`, and `pass`

**Course:** Python Programming\
**Level:** B.Tech --- First Semester\
**Question Type:** Predict the Output\
**Total Questions:** 35

------------------------------------------------------------------------

## Instructions for Students

1.  Read each program carefully.
2.  Write the **exact output** without running the code.
3.  Preserve the order of the output lines.
4.  Pay attention to indentation, `range()`, and the placement of
    `print()`.
5.  For questions with no output, write **No output**.
6.  After attempting the worksheet, run the programs to verify your
    answers.

------------------------------------------------------------------------

# Section A --- Basic Questions

### Q1. `break` at the Beginning

Guess the output.

``` python
for i in range(1, 5):
    if i == 1:
        break
    print(i)

print("End")
```

**Your output:**

``` text
Write your answer here
```

### Q2. `break` in the Middle

``` python
for i in range(1, 7):
    print(i)
    if i == 4:
        break
print("Finished")
```

**Your output:**

``` text
Write your answer here
```

### Q3. `continue` Skips One Value

``` python
for i in range(1, 6):
    if i == 3:
        continue
    print(i)
```

**Your output:**

``` text
Write your answer here
```

### Q4. `pass` Does Nothing

``` python
for i in range(1, 5):
    if i == 2:
        pass
    print(i)
```

**Your output:**

``` text
Write your answer here
```

### Q5. A Loop with `else`

``` python
for i in range(3):
    print("Python")
else:
    print("Done")
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Section B --- Understand Where `print()` Is Placed

### Q6. Print Before `break`

``` python
for i in range(1, 5):
    print("A", i)
    if i == 3:
        break
    print("B", i)
```

**Your output:**

``` text
Write your answer here
```

### Q7. `print()` After `continue`

``` python
for i in range(1, 5):
    if i == 2:
        continue
    print("Value:", i)
    print("Next line")
```

**Your output:**

``` text
Write your answer here
```

### Q8. `pass` Before `print()`

``` python
for i in range(1, 4):
    if i == 2:
        pass
        print("Inside if")
    print("Outside if", i)
```

**Your output:**

``` text
Write your answer here
```

### Q9. `break` and Code Outside the Loop

``` python
for i in range(2, 8, 2):
    print(i)
    if i == 4:
        break
    print("Hello")

print("After loop")
```

**Your output:**

``` text
Write your answer here
```

### Q10. `continue` and Multiple Prints

``` python
for i in range(1, 5):
    print("Start", i)
    if i == 3:
        continue
    print("End", i)
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Section C --- `for-else` Behaviour

### Q11. Normal Completion

``` python
for i in range(2, 5):
    print(i)
else:
    print("Loop completed")
```

**Your output:**

``` text
Write your answer here
```

### Q12. `break` Prevents Loop `else`

``` python
for i in range(1, 6):
    if i == 4:
        break
    print(i)
else:
    print("Completed")
print("Program end")
```

**Your output:**

``` text
Write your answer here
```

### Q13. `continue` Does Not Prevent Loop `else`

``` python
for i in range(1, 5):
    if i % 2 == 0:
        continue
    print(i)
else:
    print("Completed")
```

**Your output:**

``` text
Write your answer here
```

### Q14. Empty Sequence

``` python
for i in range(5, 5):
    print(i)
else:
    print("Else executed")
```

**Your output:**

``` text
Write your answer here
```

### Q15. `break` After Some Iterations

``` python
for letter in "CODE":
    print(letter)
    if letter == "D":
        break
else:
    print("All letters checked")
```

**Your output:**

``` text
Write your answer here
```

### Q16. `pass` with `for-else`

``` python
for i in range(1, 4):
    if i == 2:
        pass
    print(i)
else:
    print("Finished normally")
```

**Your output:**

``` text
Write your answer here
```

### Q17. Search for a Character

``` python
word = "banana"

for ch in word:
    if ch == "n":
        print("Found")
        break
else:
    print("Not found")
```

**Your output:**

``` text
Write your answer here
```

### Q18. Search Fails

``` python
word = "apple"

for ch in word:
    if ch == "z":
        print("Found")
        break
else:
    print("Not found")
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Section D --- Strings and `continue`

### Q19. Skip Vowels

``` python
for ch in "education":
    if ch in "aeiou":
        continue
    print(ch, end="")
print()
```

**Your output:**

``` text
Write your answer here
```

### Q20. Stop at a Particular Character

``` python
for ch in "programming":
    if ch == "g":
        break
    print(ch, end="-")
```

**Your output:**

``` text
Write your answer here
```

### Q21. Skip and Then Stop

``` python
for ch in "computer":
    if ch == "o":
        continue
    if ch == "t":
        break
    print(ch, end="")
```

**Your output:**

``` text
Write your answer here
```

### Q22. `pass` Inside a String Loop

``` python
for ch in "cat":
    if ch == "a":
        pass
    print(ch.upper(), end=" ")
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Section E --- `while` Loop Output Guessing

### Q23. `break` in a `while` Loop

``` python
n = 1

while n <= 5:
    print(n)
    if n == 3:
        break
    n += 1

print("Stopped")
```

**Your output:**

``` text
Write your answer here
```

### Q24. `continue` in a `while` Loop

``` python
n = 0

while n < 5:
    n += 1
    if n == 3:
        continue
    print(n)
```

**Your output:**

``` text
Write your answer here
```

### Q25. `continue` After Updating the Variable

``` python
n = 1

while n <= 5:
    if n == 2:
        n += 1
        continue
    print(n)
    n += 1
```

**Your output:**

``` text
Write your answer here
```

### Q26. `break` Before Updating the Variable

``` python
n = 1

while n <= 4:
    if n == 3:
        break
    print(n)
    n += 1

print(n)
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Section F --- Nested Loops and Loop Control

**Reminder:** `break` and `continue` affect the nearest enclosing loop
in which they appear.

### Q27. `break` in the Inner Loop

``` python
for row in range(1, 4):
    for col in range(1, 5):
        if col == 3:
            break
        print(row, col)
```

**Your output:**

``` text
Write your answer here
```

### Q28. `continue` in the Inner Loop

``` python
for row in range(1, 3):
    for col in range(1, 4):
        if col == 2:
            continue
        print(row, col)
```

**Your output:**

``` text
Write your answer here
```

### Q29. `break` Does Not Stop the Outer Loop

``` python
for i in range(1, 4):
    print("Outer", i)
    for j in range(1, 4):
        if j == 2:
            break
        print("Inner", j)
```

**Your output:**

``` text
Write your answer here
```

### Q30. Inner Loop `else`

``` python
for i in range(1, 4):
    for j in range(1, 4):
        if j == 2:
            break
        print(i, j)
    else:
        print("Inner else", i)
```

**Your output:**

``` text
Write your answer here
```

### Q31. `continue` with Inner Loop `else`

``` python
for i in range(1, 3):
    for j in range(1, 4):
        if j == 2:
            continue
        print(i, j)
    else:
        print("Inner loop complete")
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Section G --- Tricky Mixed Questions

### Q32. `continue`, `break`, and `for-else`

``` python
for i in range(1, 7):
    if i == 2:
        continue
    if i == 5:
        break
    print(i)
else:
    print("Loop else")
print("End")
```

**Your output:**

``` text
Write your answer here
```

### Q33. `pass` Does Not Skip the Next Statement

``` python
for i in range(1, 5):
    if i == 3:
        pass
    else:
        print("Else block", i)
    print("Number", i)
```

**Your output:**

``` text
Write your answer here
```

### Q34. Two `print()` Statements Around `continue`

``` python
for i in range(1, 5):
    print("X", end="")
    if i == 2:
        continue
    print("Y", end="")
print("Z")
```

**Your output:**

``` text
Write your answer here
```

### Q35. Predict Carefully

``` python
for i in range(1, 5):
    if i == 2:
        pass
    elif i == 3:
        continue
    elif i == 4:
        break
    print(i)
else:
    print("Completed")
print("Outside")
```

**Your output:**

``` text
Write your answer here
```

------------------------------------------------------------------------

# Student Self-Check

After completing the worksheet, make sure you can answer these
questions:

1.  What is the difference between `break` and `continue`?
2.  Does `pass` skip the current iteration?
3.  When does a loop's `else` block execute?
4.  Does `continue` prevent a loop's `else` block from executing?
5.  In nested loops, which loop is affected by `break`?
6.  Can an empty `range()` cause a loop's `else` block to execute?
7.  Why must a `while` loop update its variable correctly when using
    `continue`?

**Challenge:** Recreate any five programs from memory and explain the
execution line by line to a classmate.

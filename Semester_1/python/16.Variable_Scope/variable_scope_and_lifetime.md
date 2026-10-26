# Variable Scope and Lifetime in Python

## Learning Goals

After studying this topic, you should be able to:

-   Explain what a variable's **scope** and **lifetime** mean.
-   Distinguish between local and global variables.
-   Understand how Python searches for a variable's value.
-   Use `global` correctly.
-   Predict what happens when variables are created inside functions,
    loops, and nested functions.
-   Identify common mistakes and edge cases involving scope and
    lifetime.

------------------------------------------------------------------------

## 1. What Is Variable Scope?

**Variable scope** means the part of a program where a variable name can
be accessed.

Think of scope like a887 room. A name written inside one room may not be
visible from another room.

``` python
def greet():
    message = "Hello"
    print(message)

greet()
```

**Output**

``` text
Hello
```

The name `message` is created inside `greet()`. It can be used there,
but it cannot normally be accessed outside the function.

``` python
def greet():
    message = "Hello"

greet()
print(message)
```

**Output**

``` text
NameError: name 'message' is not defined
```

Python cannot find `message` in the scope where `print(message)` runs.

### Important rule

A variable's scope depends on **where its name is bound**, not on where
the function is called.

### Practice: Scope Basics

1.  What is the scope of `x` in this code?

    ``` python
    def show():
        x = 10
        print(x)
    show()
    ```

2.  Will this code work? Explain why.

    ``` python
    if True:
        score = 50
    print(score)
    ```

------------------------------------------------------------------------

## 2. Local Variables

A **local variable** is a name assigned inside a function, unless Python
treats that name as global or nonlocal because of a declaration.

``` python
def calculate():
    total = 10
    print(total)

calculate()
```

**Output**

``` text
10
```

Here, `total` is local to `calculate()`.

### Local variables in different function calls

Each function call gets its own local execution context.

``` python
def show_number():
    number = 5
    number = number + 1
    print(number)

show_number()
show_number()
```

**Output**

``` text
6
6
```

Each call starts by assigning `5` to its own local `number`. The first
call's local value does not carry over to the second call.

### Edge case: local variable hides a global variable

``` python
count = 100

def show():
    count = 5
    print(count)

show()
print(count)
```

**Output**

``` text
5
100
```

The assignment `count = 5` inside the function creates a local `count`.
It does not change the global `count`.

### Edge case: reading before local assignment

``` python
x = 10

def demo():
    print(x)
    x = 20

demo()
```

**Output**

``` text
UnboundLocalError: cannot access local variable 'x' where it is not associated with a value
```

Why? Python sees an assignment to `x` anywhere in `demo()` and treats
`x` as local throughout that function, unless declared otherwise. The
`print(x)` happens before the local `x` has a value.

**Fix 1: use a different local name**

``` python
x = 10

def demo():
    print(x)
    local_x = 20

demo()
```

**Output**

``` text
10
```

**Fix 2: declare that you intend to use the global name**

``` python
x = 10

def demo():
    global x
    print(x)
    x = 20

demo()
print(x)
```

**Output**

``` text
10
20
```

Use `global` only when you truly intend to reassign the module-level
variable.

### Practice: Local Variables

1.  Predict the output:

    ``` python
    def test():
        value = 7
        print(value)
    test()
    ```

2.  What error occurs here, and why?

    ``` python
    def test():
        print(points)
        points = 10
    test()
    ```

3.  Predict the output:

    ``` python
    item = "pen"
    def show():
        item = "book"
        print(item)
    show()
    print(item)
    ```

------------------------------------------------------------------------

## 3. Global Variables

A **global variable** in a normal Python script is a name assigned at
the module level, outside functions and classes.

``` python
app_name = "StudyApp"

def show_app():
    print(app_name)

show_app()
print(app_name)
```

**Output**

``` text
StudyApp
StudyApp
```

A function can read a global name if no nearer binding shadows it.

### Reading a global variable

``` python
tax_rate = 0.18

def calculate_tax(amount):
    return amount * tax_rate

print(calculate_tax(1000))
```

**Output**

``` text
180.0
```

The function reads `tax_rate` from the global scope.

### Updating a global variable with `global`

To reassign a global name inside a function, use the `global` statement.

``` python
score = 0

def add_point():
    global score
    score = score + 1

add_point()
add_point()
print(score)
```

**Output**

``` text
2
```

`global score` tells Python that assignments to `score` inside this
function refer to the module-level name.

### Without `global`, assignment creates a local name

``` python
score = 0

def add_point():
    score = score + 1

add_point()
```

**Output**

``` text
UnboundLocalError: cannot access local variable 'score' where it is not associated with a value
```

Python treats `score` as local because the function assigns to it. It
then tries to read that local variable before it has a value.

### `global` does not mean "available everywhere"

`global` means the **module-level scope associated with the current
code**, not every module in a program.

If two different Python files each define a variable named `setting`,
those are separate module names. Changing one does not automatically
change the other.

### Edge case: modifying a global mutable object

You usually do not need `global` merely to mutate a global list or
dictionary. You need it if you reassign the name itself.

``` python
items = []

def add_item():
    items.append("book")

add_item()
print(items)
```

**Output**

``` text
['book']
```

The function changes the list object. It does not reassign the name
`items`.

But this needs `global` because it reassigns the name:

``` python
items = []

def reset_items():
    global items
    items = []

reset_items()
```

### Practice: Global Variables

1.  Predict the output:

    ``` python
    language = "Python"
    def show():
        print(language)
    show()
    ```

2.  What is wrong with this code?

    ``` python
    total = 0
    def increase():
        total += 1
    increase()
    ```

3.  Does `global` need to be used here? Explain.

    ``` python
    names = []
    def add_name():
        names.append("Asha")
    add_name()
    print(names)
    ```

------------------------------------------------------------------------

## 4. Scope in `if`, `for`, and `while` Blocks

Python functions create local scopes. **`if`, `for`, and `while` blocks
do not create a new scope** by themselves.

### Variable assigned inside an `if`

``` python
if True:
    result = 25

print(result)
```

**Output**

``` text
25
```

The assignment is still in the surrounding scope.

### Variable assigned inside a `for` loop

``` python
for number in range(3):
    pass

print(number)
```

**Output**

``` text
2
```

The loop variable remains available after the loop in the same scope.

### Edge case: loop never runs

``` python
for number in range(0):
    pass

print(number)
```

**Output**

``` text
NameError: name 'number' is not defined
```

The loop never assigned a value to `number`.

### Loop variable overwrites an existing name

``` python
number = 100

for number in range(3):
    pass

print(number)
```

**Output**

``` text
2
```

The loop reassigns the existing name `number`.

### `while` loop behaves the same way

``` python
count = 0

while count < 3:
    last_value = count
    count += 1

print(last_value)
```

**Output**

``` text
2
```

### Practice: Blocks and Scope

1.  Predict the output:

    ``` python
    if 5 > 2:
        message = "Yes"
    print(message)
    ```

2.  What happens?

    ``` python
    for i in range(0):
        print(i)
    print(i)
    ```


------------------------------------------------------------------------

## 5. The LEGB Rule: How Python Finds Names

When Python needs to resolve a name inside a function, it searches in
this order:

-   **L --- Local:** names in the current function.
-   **E --- Enclosing:** names in any enclosing function, from inner to
    outer.
-   **G --- Global:** names at the module level.
-   **B --- Built-in:** names provided by Python, such as `len`,
    `print`, and `range`.

``` python
message = "global"

def outer():
    message = "enclosing"

    def inner():
        message = "local"
        print(message)

    inner()

outer()
```

**Output**

``` text
local
```

Python finds `message` in `inner()` first.

### Example: enclosing, global, and built-in

``` python
message = "global"

def outer():
    message = "enclosing"

    def inner():
        print(message)
        print(len("cat"))

    inner()

outer()
```

**Output**

``` text
enclosing
3
```

-   `message` is found in the enclosing function.
-   `len` is found in the built-in scope.

### Edge case: shadowing a built-in name

``` python
list = [1, 2, 3]
print(list)
print(list("cat"))
```

The second call raises a `TypeError` because the name `list` now refers
to a list object, not Python's built-in `list()` function.

**Better approach:** avoid naming variables `list`, `str`, `sum`, `max`,
`input`, or `print`.

If you accidentally shadow a built-in at module level in an interactive
session, assigning `del list` removes that binding and can make the
built-in name available again, provided no other binding shadows it.

### Practice: LEGB

1.  Which value is printed?

    ``` python
    x = "G"
    def outer():
        x = "E"
        def inner():
            print(x)
        inner()
    outer()
    ```

2.  Which scope provides `len` in `len("hello")`?

3.  Why is naming a variable `sum` potentially confusing?

------------------------------------------------------------------------

## 6. Nested Functions and `nonlocal`

A nested function is a function defined inside another function. An
inner function can read a variable from an enclosing function.

``` python
def outer():
    message = "Hello"

    def inner():
        print(message)

    inner()

outer()
```

**Output**

``` text
Hello
```

### Reassigning an enclosing variable with `nonlocal`

Use `nonlocal` when a nested function needs to reassign a name from the
nearest enclosing function scope.

``` python
def outer():
    count = 0

    def inner():
        nonlocal count
        count += 1

    inner()
    inner()
    print(count)

outer()
```

**Output**

``` text
2
```

### What happens without `nonlocal`?

``` python
def outer():
    count = 0

    def inner():
        count = count + 1

    inner()

outer()
```

This raises `UnboundLocalError`. The assignment makes `count` local to
`inner()`, so Python tries to read the local `count` before assigning
it.

### `nonlocal` needs an enclosing function binding

``` python
def outer():
    def inner():
        nonlocal value
        value = 10
    inner()

outer()
```

This raises `SyntaxError` because there is no existing `value` binding
in an enclosing function scope. A global variable does not count as an
enclosing function binding for `nonlocal`.

### Practice: Nested Scope

1.  Predict the output:

    ``` python
    def outer():
        x = 4
        def inner():
            print(x)
        inner()
    outer()
    ```

2.  What does `nonlocal` do?

3.  Why does `nonlocal x` fail if `x` exists only at module level?

------------------------------------------------------------------------

## 7. What Is Variable Lifetime?

**Variable lifetime** means how long a variable's binding or the object
it refers to remains available.

Scope and lifetime are related, but they are **not the same thing**:

-   **Scope:** where a name can be accessed.
-   **Lifetime:** how long a name binding or object continues to exist.

For beginners, local variables are often described as existing during a
function call. More precisely, when a function returns, its local names
normally stop being accessible from outside that function. Objects those
names referred to can remain alive if other references still exist.

### Typical local variable lifetime

``` python
def make_message():
    message = "Hello"
    print(message)

make_message()
```

The local name `message` is used during the function call. After the
call ends, the name is not available from outside the function.

### Edge case: returning a value

``` python
def make_number():
    number = 42
    return number

answer = make_number()
print(answer)
```

**Output**

``` text
42
```

The local name `number` is not exposed to the caller. Its value is
returned and assigned to the caller's name `answer`.

### Edge case: returning a mutable object

``` python
def make_list():
    values = [10, 20]
    return values

result = make_list()
result.append(30)
print(result)
```

**Output**

``` text
[10, 20, 30]
```

The local name `values` disappears when the function returns, but the
list object remains alive because `result` refers to it.

### Edge case: a function can keep state between calls

``` python
def make_counter():
    count = 0

    def increment():
        nonlocal count
        count += 1
        return count

    return increment

counter = make_counter()
print(counter())
print(counter())
print(counter())
```

**Output**

``` text
1
2
3
```

The inner function keeps a reference to the enclosing variable `count`.
This is called a **closure**. The enclosing state can remain alive after
`make_counter()` has returned because the returned function still refers
to it.

### Global variable lifetime

A module-level name usually remains available while its module is loaded
and the binding exists. Reassigning or deleting the name changes that
binding. It does not necessarily destroy an object if other references
to the object remain.

### Important accuracy note

Python does not guarantee that every object is destroyed at the exact
moment a function returns. Object lifetime depends on references and the
Python implementation's memory management. Do not rely on object
destruction timing for program logic.

### Practice: Lifetime

1.  Why can `result` still refer to a list after `make_list()` returns?
2.  Why does the counter example remember its previous value?
3.  Does returning a value make the local variable itself accessible
    outside the function?

------------------------------------------------------------------------

## 8. Scope and Lifetime: Comparison

  -----------------------------------------------------------------------
  Concept                 Meaning                 Example
  ----------------------- ----------------------- -----------------------
  Local scope             Name assigned in a      `def f(): x = 1`
                          function, unless        
                          declared otherwise      

  Global scope            Module-level names      `x = 1` outside
                                                  functions

  Enclosing scope         Names in outer          A variable in `outer()`
                          functions               read by `inner()`

  Built-in scope          Names supplied by       `len`, `print`, `range`
                          Python                  

  Lifetime                How long a binding or   A returned list can
                          object remains          outlive its local name
                          available               
  -----------------------------------------------------------------------

Remember: **scope answers "where can I use this name?" Lifetime answers
"how long does this binding or object remain available?"**

------------------------------------------------------------------------

## 9. Common Mistakes

### Mistake 1: Assuming `if` creates a local scope

``` python
if True:
    x = 10
print(x)
```

In ordinary module or function code, `x` is available after the `if`
block if the assignment ran.

### Mistake 2: Assuming a loop variable disappears after the loop

``` python
for item in ["a", "b"]:
    pass

print(item)
```

**Output**

``` text
b
```

The loop variable remains bound in the surrounding scope.

### Mistake 3: Assuming assignment changes a global variable

``` python
price = 100

def change_price():
    price = 50

change_price()
print(price)
```

**Output**

``` text
100
```

The function creates a local `price`.

### Mistake 4: Forgetting `global` for reassignment

``` python
total = 0

def update():
    global total
    total += 5
```

Without `global total`, Python treats `total` as local in this function
and the read-modify-write operation fails with `UnboundLocalError`.

### Mistake 5: Confusing `global` and `nonlocal`

-   `global` refers to a name in the current module's global scope.
-   `nonlocal` refers to a name in an enclosing function scope.
-   Neither statement creates a new value by itself; assignment or
    another operation must do that.

### Mistake 6: Assuming a local object always disappears when a function returns

The local **name** stops being available outside the function, but an
object can survive if it is returned or referenced elsewhere.

------------------------------------------------------------------------

## 10. More Edge Cases: Predict the Output

Try each question before checking the answers.

### Question A: Local and global names

``` python
x = 10

def demo():
    x = 20
    print(x)

demo()
print(x)
```

### Question B: Assignment after reading

``` python
x = 10

def demo():
    print(x)
    x = 20

demo()
```

### Question C: Loop runs zero times

``` python
for value in []:
    print(value)

print(value)
```

### Question D: Mutable global object

``` python
data = {"count": 0}

def update():
    data["count"] += 1

update()
print(data)
```

### Question E: Closure remembers state

``` python
def outer():
    x = 1
    def inner():
        return x
    return inner

f = outer()
print(f())
```

### Question F: Comprehension variable

``` python
x = 9
values = [x for x in range(3)]
print(x)
print(values)
```

------------------------------------------------------------------------

## 11. Answer Key

### Practice: Scope Basics

1.  `x` is local to `show()`.
2.  It works and prints `50`, because an `if` block does not create a
    new scope.

### Practice: Local Variables

1.  `7`
2.  `UnboundLocalError`, because `points` is treated as local and read
    before assignment.
3.  It prints `book`, then `pen`.

### Practice: Global Variables

1.  `Python`
2.  `total += 1` assigns to `total`, so Python treats it as local unless
    `global total` is declared.
3.  No. The function mutates the list object; it does not reassign the
    name `names`.

### Practice: Blocks and Scope

1.  `Yes`
2.  `NameError`, because the loop never ran and `i` was never bound.
3.  It prints `50`, then `[0, 1]`.

### Practice: LEGB

1.  `E`
2.  Built-in scope.
3.  It shadows Python's built-in `sum()` function.

### Practice: Nested Scope

1.  `4`
2.  It allows a nested function to reassign a name from an enclosing
    function scope.
3.  `nonlocal` searches enclosing function scopes, not the module's
    global scope.

### Practice: Lifetime

1.  The list object remains alive because `result` refers to it.
2.  The closure retains access to `count`.
3.  No. The returned value is available through the caller's name; the
    local name remains local.

### Edge Cases

-   **A:** Prints `20`, then `10`.
-   **B:** Raises `UnboundLocalError`.
-   **C:** Raises `NameError`.
-   **D:** Prints `{'count': 1}`.
-   **E:** Prints `1`.
-   **F:** Prints `9`, then `[0, 1, 2]`.

------------------------------------------------------------------------

## 12. Practice Problems

### Beginner

1.  Create a function with a local variable `city` and print it.
2.  Create a global variable `school`. Read it inside a function.
3.  Assign a variable inside an `if` block and print it outside the
    block.
4.  Use a `for` loop to assign a loop variable. Print it after the loop.
5.  Explain the difference between scope and lifetime in your own words.

### Intermediate

6.  Predict the output:

    ``` python
    value = 100
    def test():
        value = 200
        print(value)
    test()
    print(value)
    ```

7.  Fix this code so it increments the global variable:

    ``` python
    clicks = 0
    def click():
        clicks += 1
    ```

8.  Explain why this code raises an error:

    ``` python
    name = "Asha"
    def show():
        print(name)
        name = "Ravi"
    show()
    ```

9.  Write a nested function that reads a variable from its enclosing
    function.

10. Write a function that returns a list. Show that the returned list
    can be changed by the caller.

### Challenging

11. Use `nonlocal` to create a counter that returns `1`, `2`, `3` across
    three calls.
12. Predict the output:
    `python     x = 1     def outer():         x = 2         def inner():             x = 3             print(x)         inner()         print(x)     outer()     print(x)`
13. Explain why the loop variable in a normal `for` loop can remain
    available after the loop, but a list-comprehension variable in
    Python 3 does not overwrite an outer variable.
14. Create a function that returns another function. Explain which
    variable remains available and why.
15. Explain why variable names such as `list`, `str`, and `sum` should
    usually be avoided.

------------------------------------------------------------------------

## 13. Quick Revision

-   A **local variable** belongs to a function's local scope.
-   A **global variable** is bound at module level.
-   Python uses the **LEGB** rule to look up names in functions.
-   Use `global` to reassign a module-level name inside a function.
-   Use `nonlocal` to reassign a name from an enclosing function.
-   `if`, `for`, and `while` do not create a new scope by themselves.
-   In Python 3, comprehension iteration variables have their own scope.
-   **Scope** is where a name can be used.
-   **Lifetime** is how long a binding or object remains available.
-   A local name may stop being accessible when a function returns,
    while an object it referenced may remain alive.

# Assignment: Array Methods in JavaScript
---
**1. push()**  
1. Create an array of 3 colors. Use `push()` to add two more colors and print the final array.  
2. Start with an empty array. Use `push()` three times to add the numbers 5, 10 and 15. Print the array.  
3. Create an array `["Pen", "Book"]`. Add `"Eraser"` and `"Scale"` using a single `push()` call and print the result.  
4. Where does `push()` add the new element(s) in the array?  
5. Does `push()` change the original array? Explain in one sentence.

**2. pop()**  
1. Create an array of 5 numbers. Use `pop()` twice and print the modified array and the two removed values.  
2. Create an array `["Red", "Blue", "Green"]`. Remove the last element using `pop()` and print both the array and the removed element.  
3. Start with `[100, 200, 300, 400]`. Call `pop()` once and store the returned value in a variable. Print the variable and the array.  
4. What does `pop()` return?  
5. What happens if you call `pop()` on an empty array?

**3. unshift()**  
1. Start with `["CSS", "JavaScript"]`. Use `unshift()` to add `"HTML"` at the beginning and print the array.  
2. Create an array `[20, 30]`. Add 5 and 10 at the beginning using `unshift()` and print the result.  
3. Create an empty array. Use `unshift()` to add three city names one by one and print the final array.  
4. Where does `unshift()` add the new element(s)?  
5. Can `unshift()` add more than one element at the same time? Give a short explanation.

**4. shift()**  
1. Create an array of 4 city names. Remove the first city using `shift()` and print the remaining array and the removed city.  
2. Create `[10, 20, 30, 40]`. Call `shift()` twice and print the final array and both removed values.  
3. Start with `["Apple", "Banana", "Mango"]`. Remove the first element and store it in a variable. Print the variable and the array.  
4. How is `shift()` different from `pop()`?  
5. What does `shift()` return?

**5. indexOf()**  
1. Create an array of 6 fruits. Find the index of a fruit that exists and one that does not exist using `indexOf()`.  
2. Create an array `["A", "B", "C", "B", "D"]`. Print the index of `"B"` using `indexOf()`.  
3. Create an array of 4 student names. Check the index of your name (or any name) and print the result.  
4. What does `indexOf()` return if the element is not found?  
5. What will `indexOf()` return if the element appears more than once in the array?

**6. lastIndexOf()**  
1. Create an array where one element is repeated 3 times. Use `lastIndexOf()` to find the last occurrence of that element.  
2. Create `["X", "Y", "Z", "Y", "X"]`. Print the last index of `"Y"` and `"X"`.  
3. Create an array of 5 numbers with one number repeated. Find its last index using `lastIndexOf()`.  
4. How is `lastIndexOf()` different from `indexOf()`?  
5. When would you prefer `lastIndexOf()` over `indexOf()`?

**7. includes()**  
1. Create an array of your friends’ names. Check whether a particular name is present using `includes()` and print a suitable message.  
2. Create an array of numbers `[11, 22, 33, 44]`. Check if 33 and 55 are present using `includes()`.  
3. Create an array of 4 subjects. Use `includes()` to check for one subject that exists and one that does not.  
4. What does `includes()` return?  
5. Does `includes()` work the same way for both numbers and strings?

**8. reverse()**  
1. Create an array of 5 numbers and reverse it. Print the array before and after reversing.  
2. Create `["A", "B", "C", "D"]`. Reverse the array and print the result.  
3. Create an array of 4 city names, reverse it, and print the final array.  
4. Does `reverse()` create a new array or modify the original one?  
5. What is the meaning of “in-place” when we say `reverse()` works in-place?

**9. sort() – Basic Version**  
1. Sort an array of 5 student names alphabetically and print the result.  
2. Create an array `["Dog", "Cat", "Elephant", "Ant"]` and sort it. Print the sorted array.  
3. Create the array `[40, 100, 5, 25]` and sort it. Print the result.  
4. Why does `sort()` give an incorrect order for the numbers `[40, 100, 5, 25]`?  
5. Does `sort()` change the original array?

**10. join()**  
1. Convert an array of 4 programming languages into a string separated by `" | "`.  
2. Create `["HTML", "CSS", "JavaScript"]`. Join them with `" - "` and print the string.  
3. Create an array of 3 of your favorite subjects and join them using `" / "`.  
4. What happens if you do not pass any separator to `join()`?  
5. What does `join()` return – an array or a string?

**11. concat()**  
1. Create two arrays of numbers and combine them using `concat()`. Print the new array and both original arrays.  
2. Create `arr1 = [1, 2]` and `arr2 = [3, 4]`. Use `concat()` and print the result.  
3. Create three small arrays and combine all of them using a single `concat()` call.  
4. Does `concat()` change the original arrays?  
5. Can you combine more than two arrays using one `concat()` call?

**12. slice()**  
1. From the array `[5, 10, 15, 20, 25, 30]`, extract elements from index 2 to 5 using `slice()`.  
2. Create `[10, 20, 30, 40, 50]`. Use `slice(1, 4)` and print both the new array and the original array.  
3. Create an array of 6 numbers. Extract the first 3 elements using `slice()` and print them.  
4. Does `slice()` modify the original array?  
5. What happens if you omit the second argument in `slice()`?

**13. splice()**  
1. Start with `["Jenil", "Mahir", "Arjun"]`. Use `splice()` to insert `"Krishna"` between Jenil and Mahir.  
2. Create `[10, 20, 30, 40, 50]`. Remove two elements starting from index 1 and insert a new number at that position. Print the final array.  
3. Create `[100, 200, 300]`. Use `splice()` to replace 200 with 250 and print the array.  
4. What is the main difference between `slice()` and `splice()`?  
5. Does `splice()` change the original array?

**14. toString()**  
1. Convert an array of your 4 favorite movies into a string using `toString()` and print it.  
2. Create `[1, 2, 3, 4]` and convert it to a string using `toString()`. Print the result.  
3. Create an array of 3 subject names and convert it using `toString()`.  
4. How is `toString()` different from `join()`?  
5. What separator does `toString()` use by default?

**15. fill()**  
1. Create an array of 6 numbers and fill the entire array with the value `10`.  
2. Create `[1, 2, 3, 4, 5]` and fill it with `0`. Print the result.  
3. Create an array of 4 elements and fill it with the string `"Hello"`.  
4. Does `fill()` change the original array?  
5. Can `fill()` change only a part of the array?

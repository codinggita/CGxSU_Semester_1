https://api.mfapi.in/mf/search?q=jm

Demain: https://api.mfapi.in
Route: /mf
       /mf/search
Query Parameters: ? variable = value &
Parameters:  /:id 

https://imdb232.p.rapidapi.com/api/news/get-by-category?limit=25&category=CELEBRITY&rapidapi-key=1e2efc412cmshe81609abcce8a6ap1775efjsn96a988dcc287


https://imdb232.p.rapidapi.com
/api
/api/news
/api/news/get-by-category

? limit =  25
? category = CELEBRITY
?

// function greet1(){
//     console.log("Hello");
// }
// greet1();

// const greet = (name) => {
//   return `Hello, ${name}!`;
// };

// console.log("Arrow Function:", greet("Rahul"));

// // num1, num2

// var num1 = 10;
// var num2 = 20;

// function sum(num1, num2){
//     console.log("regular Function: ",num1+num2);
// }
// sum(num1, num2);

// let sum1 = (num1, num2)=>{
//     console.log("Arrow Function: ",num1+num2);
// }

// sum1(num1, num2);

const [firstCar, secondCar] = ["Maruti", "Hyundai"];

console.log("Destructuring: First Car -", firstCar, "Second Car -", secondCar);

const colors = ["red", "green", "blue"];
const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor); // Output: "red"
console.log(secondColor); // Output: "green"
console.log(thirdColor); // Output: "blue"

const fruits = ["apple", "banana", "cherry", "date"];
const [firstFruit, , , lastFruit] = fruits;

console.log(firstFruit); // Output: "apple"
console.log(lastFruit); // Output: "date"

const numbers = [1, 2, 3, 4, 5];
const [firstNumber, ...restNumbers] = numbers;

console.log(firstNumber); // Output: 1
console.log(restNumbers); // Output: [2, 3, 4, 5]

const employee = {
  name: "Bob",
  job: {
    title: "Developer",
    department: "Engineering",
  },
};
const {
  name,
  job: { title, department },
} = employee;

console.log(name); // Output: "Bob"
console.log(title); // Output: "Developer"
console.log(department); // Output: "Engineering"

const greetPerson = (name = "Guest") => {
  return `Hello, ${name}!`;
};

console.log("Default Parameters:", greetPerson("Priya"));


function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0);
}

console.log(sum(1, 2, 3, 4)); // Output: 10

// Rest in Array Destructuring:
// Collect remaining elements into an array.

const [first, ...rests] = [1, 2, 3, 4, 5];

console.log(first); // Output: 1
console.log(rests); // Output: [2, 3, 4, 5]

// Rest in Object Destructuring:
// Collect remaining object properties into an object.

const { a, ...rest } = { a: 1, b: 2, c: 3 };

console.log(a); // Output: 1
console.log(rest); // Output: { b: 2, c: 3 }

// Spread Operator
// The spread operator (...) allows for the expansion of elements in arrays, objects, and function arguments. It simplifies operations like concatenating arrays.
const cities = ["Mumbai", "Delhi", "Bangalore"];
const moreCities = ["Chennai", "Kolkata", ...cities];

console.log("Spread Operator: Cities -", moreCities.join(", "));

// Spread in Function Arguments:
// Spread elements of an array into function arguments.

function multiply(x, y, z) {
  return x * y * z;
}

const values = [2, 3, 4];
console.log(multiply(...values)); // Output: 24

// Spread in Array Creation:
// Create a new array by spreading elements from an existing array.

const arr1 = [1, 2, 3];
const arr2 = [...arr1, 4, 5];

console.log(arr2); // Output: [1, 2, 3, 4, 5]

// Spread in Object Properties:
// Create a new object by spreading properties from an existing object.

const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Output: { a: 1, b: 2, c: 3 }

// Spread for Cloning Objects:
// Create a new object with the same properties as an existing one (shallow copy).

const original = { x: 1, y: 2 };
const clone = { ...original };

console.log(clone); // Output: { x: 1, y: 2 }

// Spread for Merging Arrays:
// Merge multiple arrays into one.

const arr_1 = [1, 2];
const arr_2 = [3, 4];
const mergedArray = [...arr_1, ...arr_2];

console.log(mergedArray); // Output: [1, 2, 3, 4]

// // Rest Operator (...): It's used to collect multiple values (parameters, elements, properties) into a single array or object.

// // Spread Operator (...): It's used to spread (expand) the elements of an array or the properties of an object into another array or object, effectively making copies or combining them.

// // Set
// // Sets are collections of unique values, allowing you to work with distinct elements. They are useful when you need to ensure uniqueness in a collection of data.
// const uniqueNumbers = new Set();
// uniqueNumbers.add(1);
// uniqueNumbers.add(2);
// uniqueNumbers.add(1); // Duplicates are automatically removed

// console.log("Set: Unique Numbers -", Array.from(uniqueNumbers).join(", "));

// // Map
// // Maps are collections of key-value pairs, providing an efficient way to associate data with keys. They offer better performance than plain objects in certain scenarios.
// const person = new Map();
// person.set("name", "Rahul");
// person.set("age", 30);

// console.log("Map: Name -", person.get("name"), "Age -", person.get("age"));

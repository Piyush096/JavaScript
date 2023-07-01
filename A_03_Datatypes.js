/*
JavaScript has 7 primitive Datatypes
1. String
2. Symbol
3. Number
4. Null
5. Bigint
6. Boolean
7. Undefined
*/

/*
The Object Datatype(Non-Primitive)
1. An object
2. An array
3. A date
*/

// Strings:
let color = "Yellow";
let lastName = "Johnson";
console.log(typeof color);

//symbol:
let a = Symbol("i am symbol");

// Numbers:
let length = 16;
let weight = 7.5;
console.log(typeof length);

//null:
let employee = null;

// Booleans
let x = true;
let y = false;

//Bigint:
let c = BigInt("576")

//undefined"
let name;

// Object:
const person = {firstName:"John", lastName:"Doe"};
console.log(person["Done"]);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");

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
const person = {firstName:"John",
                lastName:"Doe"};

console.log(person['firstName']);

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");


//practice:-

 let s = "piyush";
 let t = 96;
 console.log(s+t); // If you add a number and a string, the result will be a string concatenation
 console.log(typeof (s+t))

const names = { // here names is the reference which is pointing to the object
    name: " piyush",
    section: 1
}
 //names = "kumar" // here this shows an error we can not hold a number to a const object
 names['principle'] = null; // we can do this by this we can add new key in the existing object
 names['name'] = "shivam"; // by this we can also update the existing key in the object.

 // since hare names is const so we cannot redifine it and update it but inside that object we can update any keys .


 // create a js program to create a word-meaning dictionary of 5 words :-

 const dictionary = {
    appreciate : "recognize the full worth of",
    ataraxia : " a state freedom"
 }
 console.log(dictionary['ataraxia'])
 // we can also write it as :-
 console.log(dictionary.ataraxia)


 /*
In JavaScript, there are 3 types of quotes.

    Double quotes: "Hello".
    Single quotes: 'Hello'.
    Backticks: `Hello`.

Double and single quotes are “simple” quotes. There’s practically no difference between them in JavaScript.
Backticks are “extended functionality” quotes. They allow us to embed variables and expressions into a string
by wrapping them in ${…}, for example:

    let name = "John";

    // embed a variable
    alert( `Hello, ${name}!` ); // Hello, John!

    // embed an expression
    alert( `the result is ${1 + 2}` ); // the result is 3

The expression inside ${…} is evaluated and the result becomes a part of the string. We can put anything in there:
a variable like name or an arithmetical expression like 1 + 2 or something more complex.

alert( "the result is ${1 + 2}" ); // the result is ${1 + 2} (double quotes do nothing)
*/

//In JavaScript, there is no character type. There’s only one type: string.
//A string may consist of zero characters (be empty), one character or many of them.

typeof null // "object"
//null is not an object. It is a special value with a separate type of its own.
//The behavior of typeof is wrong here.



console.log(3 +"2");  // here the output will be the 32
console.log(3 + +"2"); // and here the output wil be 5  Using +"2" casts the string value ("2") to a number,
//therefore the exrpession evaluates to 6 because it essentially evaluates to 1 + (+"2") + 3
//which in turn evaluates to 1 + 2 + 3.



//------------------------------------------------------------------------------
// NUMBERS :-

/*
let billion = 1_000_000_000;
let billion = 1000000000; both are same

Here the underscore _ plays the role of the “syntactic sugar”, it makes the number more readable.
The JavaScript engine simply ignores _ between digits, so it’s exactly the same one billion as above.
*/

/*
In JavaScript, we can shorten a number by appending the letter "e" to it and specifying the zeroes count:

let billion = 1e9;  // 1 billion, literally: 1 and 9 zeroes
alert( 7.3e9 );  // 7.3 billions (same as 7300000000 or 7_300_000_000)

in other words , e multiplies the number by 1 with the given zeroes count

 1e3 === 1 * 1000; ie 1000
 5e4 === 5 * 10000; ie 50000

 we can also write it
 let mcs = 0.000001   as
 let mcs = 1e-6;


// -3 divides by 1 with 3 zeroes
1e-3 === 1 / 1000; // 0.001

// -6 divides by 1 with 6 zeroes
1.23e-6 === 1.23 / 1000000; // 0.00000123

// an example with a bigger number
1234e-2 === 1234 / 100; // 12.34, decimal point moves 2 times
*/


/*
Hex, binary and octal numbers:_

Hexadecimal numbers are widely used in JavaScript to represent colors,
encode characters, and for many other things. So naturally, there exists a shorter way
to write them: 0x and then the number.

alert( 0xff ); // 255
alert( 0xFF ); // 255 (the same, case doesn't matter)
*/

/*
toString(base):-

The method num.toString(base) returns a string representation of num in the numeral system with the given base.

let num = 255;

alert( num.toString(16) );  // ff
alert( num.toString(2) );   // 11111111

The base can vary from 2 to 36. By default it’s 10.
 */

/*
 Rounding:-

Math.floor--
    Rounds down: 3.1 becomes 3, and -1.1 becomes -2.

Math.ceil--
    Rounds up: 3.1 becomes 4, and -1.1 becomes -1.

Math.round--
    Rounds to the nearest integer: 3.1 becomes 3, 3.6 becomes 4, the middle case: 3.5 rounds up to 4 too.

toFixed(n) --
    rounds the number to n digits after the point and returns a string representation of the result.
    let num = 12.34;
    alert( num.toFixed(1) ); // "12.3"
 */

/*
Consider this (falsy!) equality test:

alert( 0.1 + 0.2 == 0.3 ); // false
That’s right, if we check whether the sum of 0.1 and 0.2 is 0.3, we get false.

Strange! What is it then if not 0.3?
alert( 0.1 + 0.2 ); // 0.30000000000000004

A number is stored in memory in its binary form, a sequence of bits – ones and zeroes.
But fractions like 0.1, 0.2 that look simple in the decimal numeric system are actually
unending fractions in their binary form.

What is 0.1? It is one divided by ten 1/10, one-tenth.
In decimal numeral system such numbers are easily representable.
Compare it to one-third: 1/3. It becomes an endless fraction 0.33333(3).

So, division by powers 10 is guaranteed to work well in the decimal system,
but division by 3 is not. For the same reason, in the binary numeral system,
the division by powers of 2 is guaranteed to work, but 1/10 becomes an endless binary fraction.


 These rounding rules normally don’t allow us to see that “tiny precision loss”, but it exists.

We can see this in action:

alert( 0.1.toFixed(20) ); // 0.10000000000000000555

And when we sum two numbers, their “precision losses” add up.
That’s why 0.1 + 0.2 is not exactly 0.3.

the most reliable method is to round the result with the help of a method toFixed(n):

let sum = 0.1 + 0.2;
alert( sum.toFixed(2) ); // "0.30"

Please note that toFixed always returns a string. It ensures that it has 2 digits after the decimal point.
That’s actually convenient if we have an e-shopping and need to show $0.30. For other cases,
we can use the unary plus to coerce it into a number:

let sum = 0.1 + 0.2;
alert( +sum.toFixed(2) ); // 0.3

Other math functions:-

Math.random()
  Returns a random number from 0 to 1 (not including 1).

Math.max(a, b, c...) and Math.min(a, b, c...)
  Returns the greatest and smallest from the arbitrary number of arguments.

Math.pow(n, power)
  Returns n raised to the given power.

 */

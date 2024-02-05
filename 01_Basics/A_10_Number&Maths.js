const score = 400
// console.log(score);

const balance = new Number(100)
//?This way,directly assign a primitive number value to the variable.
// console.log(balance);

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));
//?The toFixed() method rounds the string to a specified number of decimals.
//?Note. If the number of decimals are higher than in the number, zeros are added.

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4));
//?toPrecision() method of Number values returns a string representing this number to the specified precision.

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4));//? converts negative values into positive;
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));//?rounds up and returns the smallest integer greater than or equal to a given number.
// console.log(Math.floor(4.9));//? always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//++++++++++++++++++++++ dates & time +++++++++++++++++++++++++

// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",

})

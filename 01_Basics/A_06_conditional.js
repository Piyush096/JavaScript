//sometime we might have to run a few block of code bsed on  some condition.

// let a = prompt("hey what is age");

//prompt() is a method of the Global window object found in browsers.
                                   //It's not part of the JavaScript language.
         //If you don't run your code in a browser or an environment that supports the Browser Object Model,
       //window won't be there and if window isn't there, neither will prompt() be. Run your code in a browser.
// and this running in the html file and the browser consolel;



// in javascript there are three forms of if..else statement
// if statement
// if....else statement
//if....else if...else statement


//switch--------------------------------------------------------------------------

const fruit = 'papaya';

switch(fruit){
    case'orange':
    console.log("it is orange");
    break;

    case 'banana':
        console.log("it is orange");
    break;

    default:
        console.log(`sorry, no match found ${fruit}`);
}
// in this way the switch statements works;


// ternary operator:-

let age = 12;

console.log(age >= 12 ? "you are kid" : "you are not kid");

// operators - <, >, <=, >=, ==, !=. ===, !==

//--------------------------------------------------------------------------------
//TRUTHLY :-
/*Truthy values In JavaScript, a truthy value is a value that is considered
true when encountered in a Boolean context. */

//FALSY:-
/* Falsy values In JavaScript, a falsy value is a value that is considered
false when encountered in a Boolean context. */

/*
fasly values :- fasle, 0, -0, BigInt 0n, null, undefined, NaN, "".

TRUTHLY values :- "0", 'fasle', " ", [], {}, function(){}, and rest all except falsy values.
*/


const useremail = "p@gmail.com" // but is string in that case it return false and print the else part

if(useremail){ // here if we have the value of useremail it will return true and pritn the value
    console.log("got user email");
}
else{
    console.log("don't havae user email");
}

/*
const useremail = []
if(userEmail.length == 0){
    console.log("array is empty") // in this way we can check the length of array
}


const useremail = {}
if(Object.keys(useremail).length == 0){ // here Object.keys(username) returnthe objects as array and we know
    console.log("object is empty")          how to determine the length of array so we use .length after that
}
*/

//-----------------------------------------------------------------------------------

// Nullish Coalescing Operator (??) : null , undefined

//  let val1;
//  val1 = 5 ?? 10;
//  console.log(val1);  output - 5

//  let val2;
//  val2 = null ?? 10;
//  console.log(val2)  output - 10

//-----------------------------------------------------------------------------------
// Terniary operator
// condition ? true : false

const iceprice = 100
iceprice >= 80 ? console.log("less than 80") : console.log("greater than 80");

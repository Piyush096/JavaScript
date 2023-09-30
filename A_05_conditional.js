//sometime we might have to run a few block of code bsed on  some come condition.

// let a = prompt("hey what is age");

//prompt() is a method of the Global window object found in browsers.
                                   //It's not part of the JavaScript language.
         //If you don't run your code in a browser or an environment that supports the Browser Object Model,
       //window won't be there and if window isn't there, neither will prompt() be. Run your code in a browser.
// and this running in the html file and the browser consolel;

let b = "89"
console.log(typeof b );
b = Number.parseInt(b); // it converts string to a number;
console.log(typeof b );


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

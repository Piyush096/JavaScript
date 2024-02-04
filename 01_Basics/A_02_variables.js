 // if we have to run th ejs file through th eterminal then we have to wrie:-
    //    node file_name.js and then enter , then the program excuted

// You can think of variables as simply “storage containers” for data in your code.
let message;
message = 'Hello'; // store the string 'Hello' in the variable named message

let user = 'John', age = 25, mess = 'Hello'; // we can also declare multiple variable in one line;

// let user = 'John';
// let age = 25;
// let mess = 'Hello'; in this way we can also write and easier to read


/*There are two limitations on variable names in JavaScript:

    The name must contain only letters, digits, or the symbols $ and _.
    The first character must not be a digit.
*/

/* Case matters:-
   Variables named apple and APPLE are two different variables.
*/

// Until recently there was only one way to create a variable in JavaScript — the var statement.
//  But in the newest JavaScript versions we have two more ways — let and const.

// previously for assigning variables name var wa used but now let and const were used
// where var is globally scoped while let & const aare block scoped.

// var can be updated and reused within its scope
// let can be updated but not re-declared
   let x = 3;
// let x = 4; this shows an error
   x = 4; //this is true


/*  const can be neither be updated nor be re-declared
       const pi = 3.14;
             pi = 2.67; this shows an error as const can not be updated and modified
    When a programmer is sure that a variable will never change,
    they can declare it with const to guarantee and clearly communicate that fact to everyone.
*/

// and const must be initialized during declaration unlike let and var
// cont innerHeight; ----> this shows ans error;
   const innerHeight = 4; // it is correct show we have to initialized during declaration;

const account = 1444
let accountemail = "hitesh@"
var accountpass = "aaaa"
accountcity = "bangluuuru"

console.table([account, accountemail, accountpass, accountcity]) // using this we can print it in a single table

/*
prefer not to use var
because of issue in block scope and functional scope
*/

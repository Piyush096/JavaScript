 // Immediately Invoked Function Expression (IIFE)
//An IIFE (Immediately Invoked Function Expression) is a JavaScript function that runs as soon as it is defined.


(function user(){ // this is named IIFE as name of function is mentioned
    console.log("user entered")
})();
// here we have to put the semicoloum other we are unable to execute the other function after this
// without ; it unablel to identify where to stop the context

(() =>{ // unnamed IIFE as the name of the function is not mentioned
    console.log("hello user")
})();

//in first () we define the fuction and second part () creates the immediate function execution
/*
It is a design pattern which is also known as a Self-Executing Anonymous Function and contains two major parts:

1. The first is the anonymous function with lexical scope enclosed within the Grouping Operator ().
This prevents accessing variables within the IIFE idiom as well as polluting the global scope.

2. The second part creates the immediately invoked function expression () through which the JavaScript
engine will directly interpret the function. */


/*
NOTE :-

Avoid polluting the global namespace
Because our application could include many functions and global variables from different source files,
it's important to limit the number of global variables. If we have some initiation code that we don't
need to use again, we could use the IIFE pattern. As we will not reuse the code again, using IIFE in this
case is better than using a function declaration or a function expression.


*/

(function user1(name){
    console.log(`user entered :- ${name}`)
})("piyush"); // in this we can pass the parameter

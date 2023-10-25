//-------------------------------THIS and arraow function---------------------------------------

const user_data = {
    username : "piyush",
    phone : 9661646499,

    welcome_messsage: function() {
        console.log(`${this.username} , welcome to the website`); // here using this keyword we  current context of that object
        // console.log(this); here usng this we can check the curent context
    }
}

user_data.welcome_messsage();  // here the ouptut will be piyush
user_data.username = "hitesh"
user_data.welcome_messsage(); // now the output will be hitesh as we  change the context and it will reflect the using this keyword
// context means value of that oblects

console.log(this); // here the current obeject is empty as we are in the node enviroment because there is no object defined globally
// in browser the global object is window


function chai() {
    let user = "piyush"
    console.log(this.user) // here it will print undefined as this keyword woks on the object
    // we cannot directly use inside the function
}

chai()
//-------------------------------------------------------------------------------------------------
// another way of defining function

const sum = (a, b) =>{  // here => this is an arrow function
    return a + b  // this  explicit return
}
console.log(sum(9,7))


/*
if functon is only in single wew can do it in this way also

const sum = (num1, num2) => num1 + num2  // this is impicit return

here no need to write curley braces and rturn*/

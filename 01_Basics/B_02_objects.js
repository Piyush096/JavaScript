//singleton -when we create stirng through constructor a then a object will create and that object is singleton
// by using object.create

//objects literals

const Jsuser = {
    name : "piyush",
    "full name" : "piyush kumar mishra",
    age : 19,
    location : "asansol",
    email : "piyush@gmail.com",
    isLoggedin : false,
    lastloginDays : ["monday" , "saturday"]
}
// here internally the keys are also treated as strings ex - "name" , "age" like this.

// now accesing vlues from the object
console.log(Jsuser.email)
console.log(Jsuser["email"])  // by using two different ways we can acces the values  and this is the better way

// now we  using the . operator we can not acces the vlaue we have to use the square bracket beacuse
/*In JavaScript, when you want to access a property of an object using dot notation,
you should provide the property name directly after the dot, without quotes.
In your code, you are using dot notation with quotes, which is why it's not working. */

console.log(Jsuser["full name"]) // correct
//console.log(Jsuser."full name")  this is incorrect

Jsuser.email = "mishra.piyu@gmail.com" // using this we can override and change the value  of the eamil.

//Object.freeze(Jsuser) // using this freeze method we can restrict that no one can change the data of that onject.

// now if we do any changes to that object it cant reflect
Jsuser.name = "piyush mishra"
console.log(Jsuser); // it not print piyush mishra


//-----------------------------------------------------------------------------------------------
// here we are adding another key greeting in Jsuser object whose value is function
Jsuser.greeting = function(){
    console.log("hello js user")
}


//Now here we are addig another key greetingTwo which holds value as function
Jsuser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`) // here using this keyword we can acces the current onject name
}

console.log(Jsuser.greeting())
console.log(Jsuser.greetingTwo()); // here we are unable to print the output beacuse we have freez the oblect
// so any changes will not reflect. but when we remove the freez it print.

//-----------------------------------------------------------------------------------------------
// Now we have to create one symbol and use that symbol as a key in object

const mysym = Symbol("key1")

const  user = {

    //mysym : "mykey" -- it is not correct as we print the type it is string .
    [mysym] : "mykey"
}
console.log(user[mysym]) // here we have not use the double quotes in the square bracket in the as mysym is a symbol.
console.log(user)

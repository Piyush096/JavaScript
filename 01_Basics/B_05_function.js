function add(a,b){
    console.log(a + b)
}
add(4,4)


function average(a,b){ //a and b are parameters
    let average = (a + b)/2
    return average;
}

console.log(average(4,5)) //average is refrence but average() is function execution
//4 and 5 are arguments
//here if we not send argumet it will return NaN


function loginuser(username){
    if(!username){
        console.log("please enter a username");
        return
    }
    return `${username}`
}
console.log(loginuser()); //output as undefined
console.log(loginuser("piyush"));//output as piyush

//---------------------------------------------------------------------------------------------------
function add2(a,b){
    console.log(a + b)
}
add2(2,4)
// here in this cse we konw that we are passing the two arguments 2 and 4
// but there may a  case arises where we dont know the number of arguments we have to pass
// so in that case we use the rest operator
//!rest parameter syntax allows a function to accept an indefinite number of arguments as an array

function add1(...num){
    return num // return the value in the form of the array.
}
console.log(add1(12, 13, 44, 15))


// similar case
function addno(num1, num2, ...num){
    return num
}
console.log(addno(12, 14, 24, 56, 67));
// in this case one important thing to note that
// the first two arguments will taken by num1 and num2 and the rest onther will taken by other and it print the rest other part
//[24, 56, 67] :- output

// ----------------------------------Taking object as a parameter-----------------------------------------

const userdata = {
    name : "piyush",
    roll : 96
}

// now creating the function

function user_details(user){
    console.log(`user name is ${user.name} and roll is ${user.roll}`)
}

user_details(userdata)

// we can also pass the oject as an argumentt
/*
user_details({
    name : "piyush",
    roll : 96
}) */


// similarly we can also pass the array as an a rgument

const myarr = [19, 56, 67, 87]

function returnval(getarr){
    return getarr[2]
}
console.log(returnval(myarr));


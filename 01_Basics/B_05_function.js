function add(a,b){
    console.log(a + b)
}
add(4,4)


function average(a,b){ // here a and b are the parameters
    let average = (a + b)/2
    return average;
}

console.log(average(4,5)) // here if average is only refrence but average() is function execution
// and here 4 and 5 aare the arguments


// if we call a function and does  not send any argumet in that case it will return undefined
function loginuser(username){
    return `${username}`
}
console.log(loginuser()); // in this case we got the output as undefined
console.log(loginuser("piyush"));//but in this case we got the output as piyush

//---------------------------------------------------------------------------------------------------
function add2(a,b){
    console.log(a + b)
}
add2(2,4)
// here in this cse we konw that we are passing the two arguments 2 and 4
// but there may a  case arises where we dont know the nuber of arguments we have to pass
// so in that case we use the rest operator

function add1(...num){
    return num // here the num return the value in the forn of the array means all the values inside the array
}
console.log(add1(12, 13, 44, 15))


// similar case related to this is
function addno(num1, num2, ...num){
    return num
}
console.log(addno(12, 14, 24, 56, 67));
// in this case one important thing to note that
// the first two arguments will taken by num1 and num2 and the rest onther will taken by other and it will onky print the rest other part
//[24, 56, 67] :- output

// Taking object as a parameter

const userdata = {
    name : "piyush",
    roll : 96
}

// now creating the function

function user_details(user){
    console.log(`user name is ${user.name} and roll is ${user.roll}`)
}

user_details(userdata)
// and in another we can also pass the oject as an argumentt
// like no need to create objects seperately define the object in side the argument
/*
user_details({
    name : "piyush",
    roll : 96
}) */


// similarly we can also pass the array as an a rgument




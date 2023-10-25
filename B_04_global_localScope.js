var g = 10
let a = 19
if(true){
    let a  = 19
    const b = 20
    var g = 78
}
// here {} this is called as scope of program

//console.log(a) -- here a will not print as it defined inside the if scope
//console.log(b) -- here b will also not get printed as it difined inside the if scope
console.log(g) // but  here gets printd which will create problem
console.log(a); // but now here it will printt as we also define it outside the scope
// as we definte g as 10 out of the scope but inside th escope agian inisealise g as 78 and it will print 78
// but this case will not arise in let and const


// any declaration outside the scope is called global scope and inside the scope is called as local scope

//----------------------------------------------------------------------------------------
//nested scope

function one(){
    const user_name = "piyush"

    function two(){
        const wesite = " youtube"
        console.log(user_name)
    }
    //console.log(wesite) :- here this will not printed
    two()
}
one()

//----------------------------------------------------------------------------------------
if(true){
    const username = "piyush"
    if(username == "piyush"){
        const web = " youtube"
        console.log(username + web);
    }
    // console.log(web) here this will not get printed due to the scope
}
// console.log(username) and this will also not get printed

//A closure is a feature of JavaScript that allows inner functions to access the outer scope of a function.

//-----------------INTERESTING------------------------------------------------

const add_no = function(num){
    return num + 2;
}

add_no(5) // NOTE :- we can not call this function before declaration it giver error
// " cannot access 'add_no' before initialization"

/* function add_no(num){
    return num + 2
   }

   but in this case we can call this function from anywhere within this file
 */


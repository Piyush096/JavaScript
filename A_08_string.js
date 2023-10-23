let name = "piyush kumar"
const age = 23

console.log("my name is " + name + " and my age is " + age)// this is an old style of conctinating stirng
// we can also write in different way also

console.log(`my name is ${name} and my age is ${age}`) // called string interpolation

// we can also declare stirng in another format
const new_name = new String("piyush")
// in this form the characters are stored in key value pair
// 0:p
// 1:i
// 2:y .... in this way

//we can also print the characters using the key or the pre-defined methods of stirng
console.log(new_name[0]);
console.log(new_name.length);
console.log(new_name.toUpperCase());// this changes not reflect in the original string
console.log(new_name);


const anothername = "  piyush   "
console.log(anothername);
console.log(anothername.trim());
console.log(anothername.includes("i"));

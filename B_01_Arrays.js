//declaration of an array in many ways :-

const myarr = [0,1,2,3,4]
const myarr2 = new Array(1,2,3,4)

console.log(myarr2[2]) // using this we can fetch the data from the array

myarr.push(8) // using this method we can add the values form the end of the array.

myarr.pop() // using this we can delete the last index element form the array

myarr.unshift(9) // using this we can add the element form the front of the array and
                               // each index in the array is shifted by one .

console.log(myarr)

myarr.shift() // using this we can remove the first element from the array

console.log(myarr)

console.log(myarr.includes(3)) // it gives output as true or false if it includes that parameter it prints true

const newarr = myarr.join() // using this function it return an array as a stinrg
console.log(typeof newarr) // it will print stirng

//---------------------------------------------------------

console.log("A" , myarr)

const myn1 = myarr.slice(1, 3)
console.log(myn1)

console.log("B" , myarr)

const myn2 = myarr.splice(1, 3);
console.log("C" , myarr)
console.log(myn2)

/*
slice returns a piece of the array but it doesn't affect the original array.
splice changes the original array by removing, replacing, or adding values and returns the affected values. */


const names = ["ram", "shyam" , "mohan"]
const age = [ 23, 34, 33]

//names.push(age) // after doing this it add the whole age array to the last index to the names

const new_data = names.concat(age);
console.log(new_data)
// usint this it cant add the whole array to the last index
// it simply merege both the array and create new object.


//we can do same thing concat by another method called spread

const all_new = [...names, ...age]
console.log(all_new)

//The JavaScript spread operator ( ... ) allows us to quickly copy all or part of an
//existing array or object into another array or object.


const arr1 = [1, 2, [4, 5], 6, [1, 2, [4, 5, 6]]]
const arr2 = arr1.flat(Infinity);
console.log(arr2)
// using this flat method we can spread the multiple array.

console.log(Array.isArray("piyush")) // using this it will check weather it will an array or not and return ture or false.

console.log(Array.from("piyush"));
//it will change the given parameter into the array

console.log(Array.from({name: "piyush"}))// interesting
//in this case it will give an empty Array as it unable to identify which one to make array

// we can also use Array.of

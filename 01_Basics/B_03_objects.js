const name = new Object(); //this is sinngelton
//console.log(name)

name.id = "123a"
name.fullname = "piyush mishra"
name.islogedin = false

//----------------------------------------------------------------------------------------
console.log(Object.keys(name))//here using Objects.keys method we acces the keys and within the paranthesis we specify that object name
// here we got to know that the  data of this is array means all the keys are printes inside the array
// now we can also use the loops on that for any further operations
// using this we can also evaluate the
// we can also use the different method as checks the lenght of keys and many more


console.log(Object.entries(name)) // here using this we can print key value pair which is inside the array
//and all the key vlaue pair also in array at each index
//ex - [[], [], []]  -- here each array at the index of outer array is key value pair

console.log(name.hasOwnProperty('id')) // using this we can ask the object wheather it exists  or  not

//-----------------------------------------------------------------------------------------
// now creating the nested objects vlues
const user = {
    email: "some@gmail.com",
    fullname: {
        userfullname :{
            fisrtname : "piyush",
            lastname : "mishra"
        }
    }
}

console.log(user.fullname) // we can acces more nested oblect using multiple dot operator


// now merging two objects.

const obj1 = {1:"a", 2:"b", 3:"c"}
const obj2 = {4:"a", 5:"b", 6:"c"}

const obj3 = Object.assign({}, obj1, obj2)
// why we add extra {} ? --> here {} it act as target where all the objects get copied.
// here if we dont add it also correct in that case all the objects get copied in obj1.

// const returnedTarget = Object.assign(target, source);  this the syntax means the first one is target and the rest one are the sourece
// thats why we add extra {} which acts as target and rest other as the source and the source are copied to that target
// but we can also make  obj1  as tareget
//The Object.assign() static method copies all enumerable own properties from one or more source objects to a target object.
//It returns the modified target object.
console.log(obj3)


// another way of merging the objectt is spread

const obj = {...obj1, ...obj2}
console.log(obj)

//----------------------------------------------------------------------------------------
// when values come from the database in that we get array of objects not single objects

const user1 = [
    {
        id:1,
        email:"h@gmail.com"
    },
    {
        id:2,
        email:"k@gmail.com"
    }
    // in same  multiple objects
]
console.log(user1[1].email) // using this we accesing the first element of aray of object and on that 1st object we accesing the mail

//-------------------------------------------------------------------------------------------
// object de-structure

const user_data = {
    name : "piyush",
    Roll : 96,
    email : "a@gmail.com"
}

user_data.email // generally in this way we can fetch the value

const {email} = user_data // this is de-structure
// const {email : e} = user_data   -- and then print e it will print the same value as email
console.log(email) // now after that we simply fetch email no need to use dot operator


//-------------------------------------------------------------------------------------------

//!jason API intro ?



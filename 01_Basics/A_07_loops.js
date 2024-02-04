//types of loop
/*
1.for loop
2.for in loop
3.for of loop
4.while loop
5.do-while loop
 */

//for in
let obj = {
    harry : 97,
    shivam : 90,
    rahul : 80
}

for(let a in obj){
    console.log("marks of " + a + " are " + obj[a])       // this is for in loop
}

// for of loop
const arr = [1, 2, 3, 4, 5]

for (const i of arr) {
    console.log(i);
}


// while loop

//let n = prompt("enter th evalue  of n");
// n = Number.parseInt(n);

let i = 0;

while(i <= 2){
    console.log(i)
    i++;
}


//do while

let j = 0;
do{
    console.log(j); // do while runs atlest runs once before checking th econdition
    j++;
}while(j <= 4)

//---------------------------------------------------------------------
//map

const map = new  Map()
map.set('In', "India")
map.set('usa', "united state of america")

for (const [key, value] of map) { // const kkey of map :-  it print the whole object
    console.log(key, ':-' , value);
}
// we cannot iteratratae in object in this way
// for object we use for in loop

let obj1 = {
    harry : 97,
    shivam : 90,
    rahul : 80
}

for (const key in obj1) {
    console.log(`${key} roll no is ${obj1[key]}`);
}


//---------------------------------
const programming = ["js", "java", "c"]

// for(const key in programming){
//     console.log(key); //using this we can only print keys
//     console.log(programming[key]); // here it will print the values
//                                    //in array indices in array is called as the key
// }


//for each loop:-
const programming1 = ["js", "java", "c"]

programming1.forEach(function (val) { //mostky we use for each loop in array
    console.log(val);
})
// we can do it in differnent way also we can define the function saperately and call that functioin
//  inside the forEach loop

/*
function printme(val){
    console.log(val)
}

programming1.forEach(printme) here we havae to only write function reference meand printme not write pritnme()

in this way we can do it
*/

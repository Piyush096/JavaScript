//types of loop
/*
1.for loop
2.for in loop
3.for of loop
4.while loop
5.do-while loop
 */
let obj = {
    harry : 97,
    shivam : 90,
    rahul : 80
}

for(let a in obj){
    console.log("marks of " + a + " are " + obj[a])       // this is for in loop
}


// while loop

let n = prompt("enter th evalue  of n");
n = Number.parseInt(n);

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

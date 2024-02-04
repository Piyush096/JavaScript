const coding = ["js", "ruby", "java", "python"]

const values = coding.forEach( (item) => {
    console.log(item);
    //return item
})
// for each loop never returns a value
// console.log(values); here it will return undefined


const mynums = [1, 2, 3, 4, 5, 6]

// filter also take call back
const newnums = mynums.filter((num) => {
    return num > 4
})
/*
we can also write it in another way

const newnums = mynums.filter( (num) => num > 4) )

here no need to write return statement as we have already studied about implict and explicit return
so here this implicit return we have to write it within a line without {} this
*/
console.log(newnums);


// we have to do same thing in foreach loop

const newnums1 =[]
mynums.forEach((num) => {
    if(num > 4){
        newnums1.push(num)
    }
})

console.log(newnums1); // we will get same output as in filter
// filter is mainley used in databases.
//ex :-

const book = [
    {title : 'B1', gen : 'history', publish : 1987},
    {title : 'B2', gen : 'science', publish : 1988},
    {title : 'B3', gen : 'history', publish : 1985},
    {title : 'B4', gen : 'fiction', publish : 1980},
    {title : 'B5', gen : 'history', publish : 1982},
    {title : 'B6', gen : 'non-fiction', publish : 1981},
    {title : 'B7', gen : 'history', publish : 1986}

]


// if ther user wants only the history book then here we can use the filter

const userbook =  book.filter((bk)  => bk.gen === 'history')
console.log(userbook);


//------------------------------------------------------------------------

const mynums2  = [1, 2, 3, 4, 5, 6, 7, 8]

const newno = mynums2.map((num) => num + 10)
console.log(newno);

//we can also use chaining like mynums2.map().map().filter() ...... in this way
//------------------------------------------------------------------------
//reduce function

const myNumber = [1, 2, 3]

const initialval = 0
const mytotal = myNumber.reduce( function(acc , currval){  // her for the first time acc value will store the value
    //of initialval , and after that it will stores the val of acc + currval
    console.log(`acc ${acc} and currval ${currval}`) // for checking the values we print them
    return acc + currval
}, initialval)

/*
same thing we write in call back function also
const mytotal = myNumber.reduce( (acc, currval) => acc + currval , initialval)
*/


// another example

const details  = [
    {
        itemname : "web course",
        price : 999
    },
    {
        itemname : "app course",
        price : 1999
    },
    {
        itemname : "java course",
        price : 4999
    },
    {
        itemname : "python course",
        price : 2999
    }
]

const total = details.reduce( (accu, item) => accu + item.price , 0)
console.log(total);

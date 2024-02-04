let b = "89"
console.log(typeof b );
b = Number.parseInt(b);
console.log(Number(b)) // it converts string to a number;
console.log(typeof b );

let c = "33a"
console.log(Number(c)); //!in this case it will print NaN- not a number but its type is still number.

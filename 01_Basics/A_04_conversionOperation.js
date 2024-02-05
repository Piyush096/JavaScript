let b = "89"
console.log(typeof b );
b = Number.parseInt(b);
console.log(Number(b)) // it converts string to a number;
console.log(typeof b );

let c = "33a"
console.log(Number(c)); //!in this case it will print NaN- not a number but its type is still number.

//? when we convert "null" into number it will print 0;
//? and when we convert "undefined" into number it will print NAN.
//? true will pritn 1 if we convert it into number;


 //! any tyepe to boolean ;
 // 1 => true, 0 => false
 // "" => fasle
 // "piyush" => true

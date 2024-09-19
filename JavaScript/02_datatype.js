// alert(3+3) //we r using nodejs not browser
// datatype




// Datatype conversions
let score= "33abc"
let score1=null

console.log(typeof score);
console.log(typeof(score1));

let valueInNumber = Number(score)
console.log(valueInNumber);
console.log(typeof valueInNumber);

let valueInNumber2 = Number(score1)
console.log(valueInNumber2);
console.log(typeof valueInNumber2);

// "33" =>33
// "33abc"=>NaN
// true => 1; false =>0

// 1=>true; 0 =>false
// ""=>false
// "abc"=>true

// Primitive :Primitive data types are the basic types that are not objects and have no methods. They are simple values that are immutable (i.e., their values cannot be changed once created)

// 7type : String, Number, Boolean,null,undefined,symbol,BigInt



// reference (non primitive):Non-primitive data types are more complex and can contain multiple values or properties. They are mutable (i.e., their contents can be changed).

// Array, object, Function
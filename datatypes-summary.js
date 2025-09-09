//primitive
//7 types : string, number, bigint, boolean, undefined, symbol, null

//non-primitive (reference)
//object, function, array

//examples for primitive
let str = "hello"; //string
let num = 42; //number
let bigIntNum = 9007199254741991n; //bigint
let bool = true; //boolean
let undef = undefined; //undefined
let sym = Symbol('sym'); //symbol
let nul = null; //null

//examples for non-primitive (reference)
let obj = { name: "Alice", age: 30 }; //object
function greet() { //function
    console.log("Hello!");
}
let arr = [1, 2, 3, 4, 5]; //array

console.log(typeof str); //string
console.log(typeof num); //number
console.log(typeof bigIntNum); //bigint
console.log(typeof bool); //boolean
console.log(typeof undef); //undefined
console.log(typeof sym); //symbol
console.log(typeof nul); //object (this is a known quirk in JavaScript)

console.log(typeof obj); //object
console.log(typeof greet); //function
console.log(typeof arr); //object (arrays are a type of object in JavaScript)   

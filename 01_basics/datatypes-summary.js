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


//memory types : stack and heap
//primitive types are stored in stack memory
//non-primitive types are stored in heap memory and a reference to that memory is stored in stack memory

//example

let myYoutubeChannel = "Codevolution"; //primitive type stored in stack memory
let anotherChannel = myYoutubeChannel; //another reference in stack memory

console.log(myYoutubeChannel); //Codevolution
console.log(anotherChannel); //Codevolution

anotherChannel = "Techsith"; //changing anotherChannel does not affect myYoutubeChannel

console.log(myYoutubeChannel); //Codevolution
console.log(anotherChannel); //Techsith

let userOne ={
    email: "user@gmail.com", //non-primitive type stored in heap memory
    upi:"user@oksbi" //non-primitive type stored in heap memory
    }

let userTwo = userOne; //userTwo references the same object in heap memory

console.log(userOne.email); //
console.log(userTwo.email); //

userTwo.email = "somethingelse@gmail.com"; //changing userTwo also affects userOne since both reference the same object

console.log(userOne.email); //
console.log(userTwo.email); //
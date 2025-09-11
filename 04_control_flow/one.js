/**
 * Note: The if...else statement is used to execute different blocks of code based on a condition.
 **/ 
//  Example:
//   if (condition) {
//     // code to execute if condition is true
//   } else {
//     // code to execute if condition is false
//   }
let age = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
} else {
    console.log("You are not eligible to vote.");
}


//switch case statement
let month = 3; // Example: 3 for March

switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    case 7:
        console.log("July");
        break;
    case 8:
        console.log("August");
        break;
    case 9:
        console.log("September");
        break;
    case 10:
        console.log("October");
        break;
    case 11:
        console.log("November");
        break;
    case 12:
        console.log("December");
        break;
    default:
        console.log("Invalid month");
}

//falsy values in js
// false
// 0
// -0
// ""
// null
// undefined
// NaN

//truthy values in js
// true
// any number other than 0 and -0 (e.g., 1, -1, 3.14)
// any non-empty string (e.g., "hello", "0", "false")
// objects (e.g., {}, [])
// arrays (e.g., [1, 2, 3])
// functions (e.g., function() {})

//How detect if array is empty or not
let arr = [];
if (arr.length === 0) {
    console.log("Array is empty");
}
else{
    console.log("Array is not empty");
}
//how to detect if object is empty or not
let obj = {};
if (Object.keys(obj).length === 0) {
    console.log("Object is empty");
}
else{
    console.log("Object is not empty");
}

//and or operator
let username = "arin";
let password = "12345";

if (username === "arin" && password === "12345") {
    console.log("Login successful");
} else {
    console.log("Invalid credentials");
}

if (username === "arin" || password === "12345") {
    console.log("At least one condition is true");
} else {
    console.log("Both conditions are false");
}

// //nullish coalescing operator
// let val2;
// val2 =  null ?? 10
// console.log(val2); // Output: 10    

// let val3;
// val3 =  undefined ?? 10;
// console.log(val3); // Output: 10

// let val4;
// val4 = null ?? 10 ?? 20; // val4 will be 10 because the first operand is null

//ternary operator
const iceTeaPrice = 50;
iceTeaPrice >= 50 ? console.log("I will buy ice tea") : console.log("I will not buy ice tea");

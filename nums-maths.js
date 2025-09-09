const score = 400;
console.log(score);

const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); //toString() converts number to string and length gives length of that string


const newCount = 123.456789
console.log(newCount.toFixed(2)); //toFixed() formats a number to a specified number of decimal places

const otherNumber = 123.8800
console.log(otherNumber.toPrecision(4)); //toPrecision() formats a number to a specified length

const hundreds = 1000000
console.log(hundreds.toLocaleString("en-IN")); //toLocaleString() formats a number according to the specified locale

// +++++++++++++++++++++++++ Maths +++++++++++++++++++++++++++++
console.log(Math);
console.log(Math.PI); //PI constant
console.log(Math.abs(-4)); //absolute value
console.log(Math.round(4.6)); //rounds to nearest integer
console.log(Math.floor(4.2)); //rounds down to nearest integer
console.log(Math.ceil(4.2)); //rounds up to nearest integer
console.log(Math.min(4, 1, 8, -3, 0)); //returns minimum value
console.log(Math.max(4, 1, 8, -3, 0)); //returns maximum value

console.log(Math.random()); //returns a random number between 0 and 1
console.log(Math.random() * 10);  

console.log(Math.floor(Math.random() * 10)); //random number between 0 and 9
console.log(Math.floor(Math.random() * 10) + 1); //random number between 1 and 10

const min = 10;
const max = 20;
console.log(Math.floor(Math.random() * (max - min + 1)) + min); //random number between min and max (inclusive)

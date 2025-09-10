// arrays are resizable lists

const myArr = [0,1, 2, 3, 4, 5];
// console.log(myArr[0]); // 1

//creates a shallow copy which means that objects and arrays inside the array are still referenced. original array will also change if the copied array is changed
const myHeroes = ["spiderman", "batman", "superman"];

const myArr2 = new Array(1, 2, 3, 4, 5); 

//array methods
// myArr.push(6);
// console.log(myArr); // [1, 2, 3, 4, 5, 6]

// myArr.pop();
// console.log(myArr); // [1, 2, 3, 4, 5]

// myArr.unshift(0);
// console.log(myArr); // [0, 1, 2, 3, 4, 5]

// myArr.shift();
// console.log(myArr); // [1, 2, 3, 4, 5]

// console.log(myArr.includes(9)); // false
// console.log(myArr.indexOf(9)); // -1
// console.log(myArr.indexOf(3)); // 2

// const newArr = myArr.join();
// console.log(myArr); // [1, 2, 3, 4, 5]
// console.log(typeof newArr); // string


//slice, splice 
console.log("A ", myArr); 

const myn1 = myArr.slice(1, 3); // does not modify the original array

console.log(myn1);
console.log("B ", myArr); 


const myn2 = myArr.splice(1, 3); // modifies the original array

console.log(myn2);
console.log("C ", myArr);
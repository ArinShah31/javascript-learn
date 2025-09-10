//functions are the best for reusability of code
// function sayMyName() {
//     console.log("A");
//     console.log("r");
//     console.log("i");
//     console.log("n");
// }

// sayMyName();

// function AddTwoNum(num1, num2) {
//     return num1 + num2;
// }

// const ans = AddTwoNum(5, 7);
// console.log(ans); //12

// function loginUserMessage(username){
//     if(username === undefined){
//         console.log("please enter a username");
//         return
//     }
//     return `${username} just logged in`;
// }

// loginUserMessage("arin"); 
// console.log(loginUserMessage());

function calaculateCartPrice(...num)/*rest operator*/ {
    return num;
}

console.log(calaculateCartPrice(1,2,3,4,5,6,7,8,9)); // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]


const user = {
    username : "arin",
    userId : "123abc"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and id is ${anyobject.userId}`);
}

handleObject(user);
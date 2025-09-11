const user = {
    username: "arin",
    price: 999,

    welcomeMessage: function(){
        console.log(`Welcome ${this.username}, your price is ${this.price}`);
    }
}

user.welcomeMessage()
user.username = "sam"
user.welcomeMessage()

//arrow functions

// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// console.log(addTwo(5,7));

// const addTwo = (num1, num2) => (num1 + num2) // implicit return
// console.log(addTwo(5,7));

// const addTwo = (num1, num2) => ({username: "arin"}) // implicit return of object
// console.log(addTwo(5,7));


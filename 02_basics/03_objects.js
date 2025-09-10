//singleton

//object literal

//adding symbols to object properties
const mySym = Symbol("Key1");
const JsUser = {
    name: "arin",
    age: 22,
    [mySym]: "mykey1", //symbol as key
    location: "india",
    email: "arin@arin.com",
    isloggedin: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(JsUser.email); //one way to access object properties
// console.log(JsUser["email"]); //another way to access object properties. this is more preferred
// console.log(JsUser[mySym]); //accessing symbol property
// console.log(typeof (mySym)); //symbol

//changing values of object properties
JsUser.email = "arin@gmail.com";
// Object.freeze(JsUser); //prevents modification of object properties
JsUser.email = "arin@ssssss.com"; //this will not change the email property as the object is frozen
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("hello js user");
}
 
JsUser.greetingTwo = function(){
    console.log(`hello ${this.name} welcome back`); //using "this" keyword to access object properties
};

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());
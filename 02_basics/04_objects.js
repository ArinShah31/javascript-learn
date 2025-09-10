// const tinderUser = new Object();

const tinderUser = {};


tinderUser.id = "123abc";
tinderUser.name = "arin";
tinderUser.isLoggedIn = false;

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userFullname:{
                firstname: "arin",
                lastname: "joy"
        }
    }
}

console.log(regularUser.fullname?.userFullname.firstname); //undefined. because the function does not return anything

const obj1 = {1: "a", 2: "b"};
const obj2 = {3: "c", 4: "d"};

const obj3 = {...obj1, ...obj2}; //merging two objects using spread operator
console.log(obj3); // { '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
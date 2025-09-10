let myDate = new Date(); //current date and time
console.log(myDate.toString()); //convert to string
console.log(myDate.toDateString()); //convert to date string
console.log(myDate.toLocaleString()); //convert to locale string
console.log(myDate.toTimeString()); //convert to time string

let myCreatedDate = new Date(2023, 0, 23, 5, 3); //23rd Jan 2023 (month is 0-indexed)
console.log(myCreatedDate.toDateString());
console.log(myCreatedDate.toLocaleString());

let myCreatedDate2 = new Date("2023-01-14"); //14th Jan 2023
console.log(myCreatedDate2.toDateString());
console.log(myCreatedDate2.toLocaleString()); 

let myCreatedDate3 = new Date("01-14-2023"); //14th Jan 2023 other way
console.log(myCreatedDate3.toDateString());

let timestamp = Date.now(); //current timestamp in milliseconds
console.log(timestamp);
console.log(myCreatedDate.getTime()); //timestamp of myCreatedDate

console.log(Math.floor(Date.now()/1000)); //current timestamp in seconds

let newDate = new Date();
console.log(newDate.getMinutes()); //current minutes

console.log(`day is ${newDate.getDay()} and the time is ${newDate.getHours()}:${newDate.getMinutes()}`)

console.log(newDate.toLocaleString("default", {
    weekday: "long"
})); //full name of the day
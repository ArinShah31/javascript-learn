// for of loop

const arr = [1, 2, 3, 4, 5];

for (const num of arr) {
    console.log(num);
}

const greetings = "hello world";

for (const greet of greetings){
    if(greet === " ") continue; // to skip space
    console.log(`Each character is: ${greet}`);
}

// Maps

const map = new Map();
map.set("name", "arin");
map.set("age", 22);
map.set("city", "new york");
map.set("name", "arin"); // duplicate key will be ignored
console.log(map);

for (const [key, value] of map){
    console.log(key, ":", value)
}

//objects cannot be directly iterated using for of loop
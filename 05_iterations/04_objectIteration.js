const myObject = {
    js : 'javaScript',
    cpp : 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

//for in loop
for (const key in myObject) {
    console.log(`${key} is short for ${myObject[key]}`);
}

const programming = ["js", "rb", "py", "java", "cpp"];

for (const key in programming) {
   console.log(key);
}
for (const key in programming) {
   console.log(`${key}: ${programming[key]}`);
}

// maps cannot be iterated using for in loop

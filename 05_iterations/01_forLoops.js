// Example 1: Nested for loop with 'break'
console.log('Nested for loop with break:');
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            break; // Exit inner loop when j is 2
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}

// Example 2: Nested for loop with 'continue'
console.log('\nNested for loop with continue:');
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        if (j === 2) {
            continue; // Skip this iteration when j is 2
        }
        console.log(`i = ${i}, j = ${j}`);
    }
}
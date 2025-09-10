let a = 300 // global scope
if (true) {
    let a = 400
    const b = 20
    console.log("INNER: ",a);
} // local scope

console.log(a);

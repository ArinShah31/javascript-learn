let a = 300 // global scope
if (true) {
    let a = 400
    const b = 20
    console.log("INNER: ",a);
} // local scope

console.log(a);

function one(){
    const username = "arin"

    function two(){
        const website = "arin.com"
        console.log(username); //can access parent scope variable so it wont throw error
        console.log(website);
    }
    // console.log(website);//error
    two()
}
one()

// if else 

    if (true) {
        const username = "arin"
        if(username === "arin"){
            const website = " youtube"
            console.log(username + website);
        }
        //console.log(website); // will throw error
    }
    // console.log(username); // will throw error as it is inside if block which is a local scope

// ++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++++
// there are two ways to create a function in js
// 1. function declaration
// 2. function expression

// function declaration
addOne(5) //6 // can be called before declaration
function addOne(num1){
    return num1 + 1
}


// function expression

//addTwo(5) //7 // will throw error if called before declaration
const addTwo = function(num1){
    return num1 + 2
}
addTwo(5) //7
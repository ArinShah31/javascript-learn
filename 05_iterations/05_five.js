const coding = ["js", "rb", "py", "java", "cpp"];

// coding.forEach(function(val){
//     console.log(val);
// })

// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe);//dont add () with printMe because it will call the function immediately

coding.forEach((item, index, arr)=>{
    console.log(item, index, arr);
}) //other parameters that forEach can take are index and array itself

//IMPORTANT
//iterating through array of objects
const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
]

myCoding.forEach((item)=>{
    console.log(`language name is ${item.languageName} and extension is ${item.languageFileName}`);
})
// Immediately Invoked Function Expression (IIFE)
// Whenever you want to execute a function immediately after its definition, you can use an IIFE.

(function chai(){
    // named IIFE
    console.log("DB connected");
})(); // function call

( () => {
    // anonymous IIFE
    console.log("Server started");
})();

( (name) => {
    //named IIFE with parameter
    console.log(`Welcome ${name}`);
}) ("arin");
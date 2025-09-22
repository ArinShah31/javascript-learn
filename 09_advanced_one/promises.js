// const promiseOne = new Promise(function(resolve,reject){
//     setTimeout(function(){
//         console.log('Async task is complete');
//         resolve()
//     } ,1000)
// })

// promiseOne.then(function(){
//     console.log("promise completed");
    
// })


// const promiseTwo = new Promise(function(resolve,reject){
//     console.log("async test");
//     resolve({username: "arin" ,college:"bakwaas", email: "arinshah31@gmail.com" })
    
// })

// promiseTwo.then(function(user){
//     console.log(user);
    
// })



// const promiseFour = new Promise(function(resolve, reject){
//     setTimeout(function(){
//         let error = true
//         if (!error) {
//             resolve({username: "arin" ,college:"bakwaas", email: "arinshah31@gmail.com" })
//         } else {
//             reject("ERROR: Something went wrong")
//         }
//     },1000)
// })
// promiseFour.then(function(user){
//     console.log(user);
//     return user.username
// }).then((username)=>{
//     console.log(username);
// }).catch((error)=>{
//     console.log(error);
// })

const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = true
        if (!error) {
            resolve({username: "Javascript" ,password:"123" })
        } else {
            reject('ERROR: JS went wrong')
        }
    },1000)
})


async function consumePromiseFive() {
    try {
        const response = await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumePromiseFive()
























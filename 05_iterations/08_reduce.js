const nums = [1,2,3]

const myTotal = nums.reduce(function(acc, curvval){
    console.log(`acc: ${acc} and curvval: ${curvval}`);
    return acc + curvval
},0)

console.log(myTotal);


const myShoppingCart = [
    {
        itemName : "js",
        price : 2999
    },
   {
        itemName : "py",
        price : 1999
    }, 
    {
        itemName : "game dev",
        price : 8999
    },
      {
        itemName : "datascience",
        price : 14500
    },

]

const priceToPay = myShoppingCart.reduce((acc,item)=> (acc + item.price),0)
console.log(priceToPay);

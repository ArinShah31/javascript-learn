const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNumbers = myNumbers.map((num)=>(num*10))        //applying multiple operations at the same time
                            .map((num)=>(num+1))
                            .filter((num)=> (num>40))

console.log(newNumbers);

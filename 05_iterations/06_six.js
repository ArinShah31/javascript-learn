// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter((num) => num > 4) //filter is used to filter out values based on a condition
// console.log(newNums);

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const newNums = myNums.filter( (num) => {
//     return num > 4 //return is NECESSARY here because we are using curly braces {}
// } )

// console.log(newNums);

//with the help of if else statements and empty new array

/*const newNums = []

myNums.forEach((num) => {
    if(num>4){
        newNums.push(num)
    }
})

console.log(newNums)*/

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const userBooks = books.filter( (bk) => (bk.genre === "History"))
console.log("History Books :");
console.log(userBooks);

const userBooks2 = books.filter( (buk)=> (buk.publish>= 2000) )
console.log("Books published after 2000 :");
console.log(userBooks2)
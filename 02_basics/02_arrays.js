const marvel_heroes = ["thor", "ironman", "spiderman"];
const dc_heroes = ["superman", "batman", "wonderwoman"];

// marvel_heroes.push(dc_heroes);

// console.log(marvel_heroes);// this way second array is added as a single element to the first array

// const all_heroes = marvel_heroes.concat(dc_heroes);
// console.log(all_heroes); // this way both arrays are merged

// const all_new_heroes = [..marvel_heroes, ...dc_heroes]; // spread operator makes it easier to merge multiple arrays

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const flat_array = another_array.flat(Infinity); // flattens the array to the specified depth
console.log(flat_array);


console.log(Array.isArray(marvel_heroes)); // true
console.log(Array.from("arin")); // ['a', 'r', 'i', 'n']
console.log(Array.from({name: "arin"})); // []
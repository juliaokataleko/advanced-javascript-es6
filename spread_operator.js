// Arrays
const first = [1,2,3]
const second = [4,5,6]

const combined = first.concat(second)
const combined_spread = [...first, 8, ...second]

console.log(combined, combined_spread);

// objects
const firstObj = {name: "Julian"}
const secondObj = {job: "Developer"}

const combinedObj = {...firstObj, ...secondObj, location: "Benguela"}
console.log(combinedObj);

const clone = {...firstObj}
console.log(clone);

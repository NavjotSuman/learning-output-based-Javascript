const obj = { 1: "a", 2: "b", 3: "c", 4: "d" }
const set = new Set([1, 2, 3, 4, 5])

console.log(obj.hasOwnProperty("1")); // object's key is always a string
console.log(obj.hasOwnProperty(1)); // because object property is check by using "==" loose equility

console.log(set.has(1)); // true
console.log(set.has("1")); // false
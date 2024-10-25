(() => {
    var a = b = 10
})()

console.log(b); // is true because b is in the windows scope
console.log(typeof a); // var is a function scope variable, cannot accessed outside the function // undefined
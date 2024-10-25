const b = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < 10; i++) {
    console.log("value of i :", i);
    setInterval(() => console.log(b[i]), 5000); // will run after loop // settimeout have its own value
}

console.log("After the let Loop");

for (var i = 0; i < 10; i++) {
    console.log("value of i from var : ", i);
    setTimeout(() => console.log(b[i]), 1000); // will run after loop // undefined 
}

console.log("after the var loop", i);
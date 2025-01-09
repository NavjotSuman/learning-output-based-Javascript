var a = {}
let b = { key: "b" }
c = { key: "c" }

a[b] = 123
a[c] = 456
b[a] = 666
console.log(a);   // { '[object Object]': 456 }
console.log(b[a]); // 666

// Explanation: When setting an object as a key in another object, it will be converted to a string. In this case, both b and c are converted to "[object Object]". Therefore, a[b] and a[c] are the same, and a[c] = 456 overrides the previous a[b] = 123 assignment.
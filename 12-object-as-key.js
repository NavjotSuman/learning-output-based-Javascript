var a = {}
let b = { key: "b" }
c = { key: "c" }

a[b] = 123
a[c] = 456
b[a] = 666
console.log(a);   // { '[object Object]': 456 }
console.log(b[a]); // 666
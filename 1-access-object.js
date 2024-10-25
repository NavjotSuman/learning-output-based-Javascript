const code = {
    type: "web"
}
const reactJs = {
    name: "js",
    web: "from code"
}

console.log(reactJs[code.type]);  // valid
console.log(reactJs[code["type"]]);  // valid
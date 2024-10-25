let user= {name:"Navjot Suman"}
const userList = user
user = null // user is null, but the object is still in memory

console.log(userList) // it will still be in our memory os it will be a object with the property name
console.log(user);



// "use strict"

function Human(fName,lName){
this.firstName = fName
this.lastName = lName
// return this.firstName
}

const obj = new Human("Navjot","Suman")
console.log(obj);
// const obj2 = Human("a","b")
const obj2 = Human()
console.log(obj2);



/**Answer */
// In JavaScript, when you call a function without the new keyword, it doesn't create an instance and instead returns undefined (unless the function itself returns something). Since Human is designed as a constructor function, it should be called with new to create an instance.

// Here’s a breakdown of what happens in your code:

// new Human("Navjot", "Suman"): This correctly creates an instance of Human with firstName set to "Navjot" and lastName set to "Suman". The new keyword is necessary to create a new object from the constructor function.

// Human(): Calling Human() without new treats it as a regular function call. Since this inside Human refers to the global context in non-strict mode or is undefined in strict mode, firstName and lastName aren’t assigned to an object, and the function returns undefined.
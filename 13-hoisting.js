const showData = ()=>{
    console.log("Variable name is : ",name);
    console.log("Variable age is : ",age);
    var name = "Navjot"
    let age = 20
}

showData()


/**Answer of this question */
// // Explanation:
// // When using var, variables are hoisted to the top of the function scope. This means that even if you declare a variable later in the function, it will still be accessible before its declaration.
// // However, when using let and const, variables are hoisted to the top of the block scope (the enclosing curly braces) but are not initialized. This is known as the "temporal dead zone". You can access the variable only after its declaration.
// // In the showData function, the first console.log("Variable name is : ", name); will output undefined because the variable name is hoisted to the top of the function. The second console.log("Variable age is : ", age); will throw a ReferenceError because age is declared with let and is not accessible before its declaration.
// // To fix this error, you should move the console.log statements after the variable declarations:
// 
// const showData = () => {
//     let age = 20
//     var name = "Navjot"
//     console.log("Variable name is : ", name);
//     console.log("Variable age is : ", age);
// }
// 
// showData()
// 
// // Output:
// // Variable name is :  Navjot
// // Variable age is :  20
// // Conclusion:
// // Always declare let and const variables before accessing them in your code to avoid the "temporal dead zone" and ReferenceError. This is a common source of bugs in JavaScript, especially for developers transitioning from var to let and const.
//
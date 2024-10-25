const showData = ()=>{
    console.log("Variable name is : ",name);
    console.log("Variable age is : ",age);
    var name = "Navjot"
    let age = 20
}

showData()


/**Answer of this question */
// const showData = ()=>{
//     var name;
//     console.log("Variable name is : ",name);  // Variable name is :  undefined
//     console.log("Variable age is : ",age);
//     name = "Navjot"  // assignment remains at the place
//     let age = 20   // The second console.log("Variable age is : ", age); will throw a ReferenceError because age is declared with let, and it’s not accessible before its declaration due to the "temporal dead zone".
// }
const checkAge = (data)=>{
    if (data === {age:18}) {
        console.log("you are a Adult");
    }
    else if (data == {age:18}) {
        console.log("you are still adult.");
    }
    else{
        console.log("No age Given...");
    }
}

checkAge({age:18})

/**Answer */
// Your code is comparing objects in JavaScript using === and ==, but in JavaScript, objects are compared by reference, not by their content. This means {age: 18} === {age: 18} is always false because they are different objects in memory, even though they have the same properties.
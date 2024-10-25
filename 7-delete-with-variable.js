const name = "john doe"; // 'name' is a constant variable
age = 21; // 'age' is an undeclared variable (implicitly global in non-strict mode)

/**delete opearator return true if operation is success and false if operation is unsuccess */

console.log(delete name); // Attempt to delete 'name'
console.log(delete age); // Attempt to delete 'age'
console.log(name); // Logs the value of 'name'
console.log(age); // Logs the error




/** Answer */
// Constant Variables:
// The variable name is declared with const, making it a constant. This means you cannot delete or reassign it. The delete name statement returns false because const variables cannot be deleted.


// Undeclared Variables:
// The variable age is assigned without let, const, or var, making it an implicit global variable in non-strict mode. The delete age statement will return true because it can delete global variables, but the variable will still exist in the global context depending on the environment (like a browser console).


// Output:
// console.log(delete name); will output false.
// console.log(delete age); will output true.
// console.log(name); will output "john doe".
// console.log(age); will output 21 if it wasn't deleted or if you're in a non-strict environment.


// Conclusion:
// You cannot delete variables declared with const, let, or var using the delete operator. If you want to effectively remove a variable, you need to ensure it's declared in a way that allows for deletion (like a property of an object).
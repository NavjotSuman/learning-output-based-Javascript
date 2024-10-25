const income = {
    skills:108,
    monthly(){
        return this.skills * 2 // 'this' refers to the 'income' object
    },
    Monthly_again:function() {
        return this.skills * 2 // 'this' refers to the 'income' object
    },
    yearly:()=>{
        return this.skills * 2 // 'this' does not refers to the 'income' object  // NaN
    }

}


console.log("Monthly : ",income.monthly());
console.log("Monthly_again : ",income.Monthly_again());
console.log("Yearly : ",income.yearly());





/**Answer */
// If you need to access object properties with this, it's best to use regular functions instead of arrow functions. If you still want to use an arrow function, you would need to access the properties directly from the object, like income.skills, as demonstrated earlier.

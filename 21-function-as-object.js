function showModal() {
    console.log(showModal.value); // it is fine because in js Funciton is trated as object
}

showModal() // undefined, because there is no value key in funciton
showModal.value = 100

showModal.value = 200 // set 200 value of function
showModal()
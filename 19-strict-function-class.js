class Lizard {
   
    constructor({ newColor = "orange" }) {
        this.newColor = newColor
    }
    static colorChange(newColor) {
        this.newColor = newColor
        return this.newColor
    }
}

const tommy = new Lizard({ newColor: "blue" })
console.log(tommy.newColor)
// tommy.colorChange() // can only be accessed with the class name
console.log(Lizard.colorChange()); // undefined
"use strict"

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class Rect extends Rectangle {
    constructor(height, width, text, color) {
        super(height, width);
        this.text = text;
        this.color = color;
    }
    showDoesThisWork() {
        console.log(`Tekst : ${this.text}, color: ${this.color}`);
    }
}

let div = new Rect(25, 10, "textALign", "green");

div.showDoesThisWork();



// let square = new Rectangle(10, 10),
//     long = new Rectangle(12, 10);

// console.log(long.calcArea());
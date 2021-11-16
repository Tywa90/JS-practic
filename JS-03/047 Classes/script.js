"use strict";

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColorRectangleWithText extends Rectangle { //наследует родительский класс
    constructor(height, width, text, bgColor) {
        super(height, width);                    //наследует свойства описанные в Rectangle(width, height)
        this.text = text;
        this.bgColor = bgColor;                                
    }

    showMyProps () {
        console.log(`Text: ${this.text}, color: ${this.bgColor}`);
    }
}

const colorRectangle = new ColorRectangleWithText(20, 10, 'Hello', 'red');
colorRectangle.showMyProps();
console.log(colorRectangle);
console.log(colorRectangle.calcArea()); 

// const square = new Rectangle(10, 10);
// const long = new Rectangle (20, 200);
// console.log(square.calcArea());
// console.log(long.calcArea());
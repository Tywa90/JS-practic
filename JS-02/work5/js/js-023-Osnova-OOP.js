"use strict";

// let str = "some";
// let strObj = new String(str);
// console.log(typeof(str));
// console.log(typeof(strObj));


console.dir([1, 2, 3]);

const soldier = {
    health: 400,
    armor: 150,
    sayFunction: function () {
        console.log("hello");
    }
};

// const john = {
//     health: 100
// };

// john.__proto__ = soldier;
// console.log(john);
// console.log(john.armor);

// Object.setPrototypeOf(john, soldier);

const john = Object.create(soldier);

john.sayFunction();
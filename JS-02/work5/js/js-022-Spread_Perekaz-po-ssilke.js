"use strict";

// let a =5,
//     b = a;
//     b = b + 5;
// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };
// const copy = obj; //Ссылка на обьект. Все изменения происходят в начальном объекте
// copy.a = 10;
// console.log(copy);
// console.log(obj);

function cloneObj(mainObj) {
    let objCopy = {};

    let key;
    for (key in mainObj) {
        objCopy[key] = mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
};
// const newNumbers = cloneObj(numbers); //Создает поверхностную копию, в которой можно изменить верхний
// //уровень вложенности без именения начального обьекта
// newNumbers.a = 10; //Изменит только склонировааный обьект
// newNumbers.c.x = 14; //Изменит скопированный и старый объект
// // console.log(newNumbers);
// // console.log(numbers);

const add = {
    d:17,
    e: 20
};
// console.log(Object.assign(numbers, add));
const clone = Object.assign({}, add);
clone.d = 34;
clone.e = 40;
console.log(add);
console.log(clone);

//Клонирование массивов
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();
newArray[1] = 'fafafa';
console.log(newArray);
console.log(oldArray);

const video = ['youtube', 'vimeo', 'hdrezka'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'facebook', 'instagram'];
console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}
const num = [2, 5, 7];
log(...num);

// const array = ["a", "b"];
// const newArrray = [...array];
// const q = {
//     one: 1,
//     two: 2
// };
// const newObj = {...q};
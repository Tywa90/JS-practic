"use strict";

const arr = [1, 2, 3 , 6, 8];
// arr.pop();//удаляет последний элемент массива
// console.log(arr);

// arr.push(10);//добавляет элемент в конец массива
// console.log(arr);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);  //перебор массива
// }

// for (let value of arr) {
//     console.log(value);  //аналогичный перебор массива
// }

// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);

// arr.forEach(function (item, i, arr) {
//     console.log(`индекс массива ${i}: имеет значение ${item}, внутри масива ${arr}`);
// });

// const str = prompt("");
// const products =str.split(", ");
// products.sort();
// console.log(products.join('; '));

arr.sort(compareNum);
console.log(arr);
function  compareNum (a, b) {
    return a - b;
}

"use strict";
const stroka = "Dlina";
const arr = [1, 2, 5];

// console.log(stroka.length);
// console.log(arr.length);
// console.log(stroka[2]);
// console.log(stroka[4]);

//console.log(stroka.toUpperCase());
console.log(stroka.toLowerCase());
console.log(stroka);

const fruit = "Some fruit";
console.log(fruit.indexOf('fruit')); //метод, помогает найти с какого индекса начинается искомый ('элемент')

const logg = "Hello world";
console.log(logg.slice(6,11)); //вернет world. метод вырезает определенный кусок из строки
//указывая начальную и конечную точки вырезания.
console.log(logg.substring(6,11));

console.log(logg.substr(6, 5)); //вернет world. метод вырезает определенный кусок из строки
//указывая начальную точку вырезания и длину слова.

const num = 12.2;
console.log(Math.round(num)); //округление до целого числа

const test = "12.2px";
console.log(parseInt(test)); //12  перевод и округление в число
console.log(parseFloat(test)); //12.2  возвращает десятичное число с запятой

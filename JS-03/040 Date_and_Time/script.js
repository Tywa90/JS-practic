'use strict';

// const now = new Date(); //2021-11-08T18:40:56.998Z
// console.log(now);

// const now = new Date(2020, 5, 1, 20); //2020-06-01T17:00:00.000Z
// console.log(now);

// const now = new Date(0); //отсчет в JS ведется с даты: 1970-01-01T00:00:00.000Z
// console.log(now);

// const now = new Date(999999999999); //999999999999мс от 1970г это: 2001-09-09T01:46:39.999Z
// console.log(now);

// const now = new Date(); 
// // console.log(now.getFullYear()); //2021
// // console.log(now.getMonth()); //10 ноябрь на момент курса
// // console.log(now.getDate()); //8 чило
// // console.log(now.getDay()); //день недели начиная с воскресенья(сегодня понедельник)

// // console.log(now.getTimezoneOffset()); //отличие моего часового пояса от UTC
// // console.log(now.getTime()); //сколько милисекунд прошло 01/01/1970г. Чтобы перевести это число в дату
// // //необходимо подставить его в Date();

// // console.log(Date(1636397404336));


// //методы установки времени
// console.log(now.setHours(10));
// console.log(now);

let start = new Date();
for (let i = 0; i < 999000; i++) {
    let some = i**3;
}
let end = new Date();
console.log(`Цикл отработал за ${end-start} ms`);
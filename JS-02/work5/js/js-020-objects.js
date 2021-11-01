"use strict";

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log("vyvod texta"); // создали собственный метод(функцию) внутри объекта
    }
};
options.makeTest();
// console.log(options.name);

// delete options.name;
// console.log(options);

// for (let key in options) {
//     console.log(`Свойство ${key} имеет значение ${options[key]}`);
// }

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//         counter++;
//     }
// }
// console.log(counter);// сколько всегл свойств в объекте

// console.log(Object.keys(options)); // возвращает массив с ключами обьекта
// console.log(Object.keys(options).length); // количество ключей в обьекте 

//деструктуризация обьекта
const {border, bg} = options.colors;
console.log(border);


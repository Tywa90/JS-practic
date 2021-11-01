'use strict';

const box =document.getElementById('box');
console.log(box);

// const butns = document.getElementsByTagName('button'); //получение псевдо массива со всеми тегами button из html;
// console.log(butns);

// const butns2 = document.getElementsByTagName('button')[1]; //обращение ко второму тегу button на страничке
// console.log(butns2);

// const butns = document.getElementsByTagName('button');
// console.log(butns[1]);

const circles = document.getElementsByClassName('circle');
//обращение к элемнтам страницы с классом 'circles'
console.log(circles);

const hearts = document.querySelectorAll('.heart');
/*Обращение ко всем элементам веб странички с указанным тегом или 
обращение к любому свойству css*/
// console.log(hearts);
hearts.forEach(item => {
    console.log(item);
});

const oneHeart = document.querySelector('div');
console.log(oneHeart);//обращение к первому встретившимуся элементу

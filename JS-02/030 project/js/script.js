/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

const adv = document.querySelectorAll('.promo__adv img'),
    poster = document.querySelector('.promo__bg'), //переменная для 3 задачи
    genre = poster.querySelector('.promo__genre'), //для 2 задачи
    moviesList = document.querySelector('.promo__interactive-list'); //для 4 задачи

adv.forEach(element => {
    element.remove();
});

genre.textContent = 'драма';
console.log(poster);
poster.style.backgroundImage = 'url("img/bg.jpg")';
moviesList.innerHTML = ""; // на место списка фильмов передает пустое место. Проще говоря удаляет текст

// console.log(moviesList.innerHTML);
movieDB.movies.sort();
movieDB.movies.forEach((film, i) => {
    moviesList.innerHTML += `
        <li class="promo__interactive-item">${i +1}. ${film}
            <div class="delete"></div>
        </li>
    `;
});


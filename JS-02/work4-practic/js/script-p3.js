"use strict";
let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов уже просмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов уже просмотрели?', '');
    }
}
start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

// const a = prompt('Один из последних просмотренных фильмов?', ''),
//       b = prompt('На сколько оцените его?', ''),
//       c = prompt('Один из последних просмотренных фильмов?', ''),
//       d = prompt('На сколько оцените его?', '');

// personalMovieDB.movies[a] = b;
// personalMovieDB.movies[c] = d;


function rememberMyFilms () {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
              b = prompt('На сколько оцените его?', '');
    
            if (a != null && b != null && a!= '' && b != '' && a.length <50) {
                personalMovieDB.movies[a] = b;
                console.log('Done');
            } else {
                console.log('Error!');
                i--;
            }
    }
}
rememberMyFilms();


function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log("Malo filmov ti smotrel");
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log("ti norm zritel");
    } else if (personalMovieDB.count >= 30) {
        console.log("Ti kinoman");
    } else {
        console.log("Error s kolichestvom filmov");
    }
}
detectPersonalLevel();

function showMyDB (hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);


function writeYourGenres () {
    for (let i=1; i <= 3; i++) {
        // const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        // personalMovieDB.genres[i - 1] = genre;
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}
writeYourGenres();
//console.log(personalMovieDB);
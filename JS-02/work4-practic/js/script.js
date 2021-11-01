'use strict';
const numberOfFilms = +prompt('Сколько фильмов уже просмотрели?', '');
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


//      practic p.2 video 015
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

if (personalMovieDB.count < 10) {
    console.log("Malo filmov posmotrel");
} else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
    console.log("Ti normal zritel");
} else if (personalMovieDB >= 30) {
    console.log ("Ti Kinoman");
} else {
    console.log("Error v zadache s kolichestvom filmov");
}
console.log(personalMovieDB);
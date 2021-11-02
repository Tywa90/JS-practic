

'use strict';

document.addEventListener('DOMContentLoaded', () => {
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
        poster = document.querySelector('.promo__bg'), 
        genre = poster.querySelector('.promo__genre'), 
        moviesList = document.querySelector('.promo__interactive-list'),
        addForm = document.querySelector('form.add'),
        addInput = addForm.querySelector('.adding__input'),
        checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => {
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked;

        if (newFilm) {
            if (newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }
            
            if (favorite) {
                console.log("Добавляем любимый фильм");
            }
            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, moviesList);
            
        }

        addForm.reset();
    });
    
    const deleteAdv = (arr) => {
        arr.forEach(element => {
            element.remove();
        });
    };
    deleteAdv(adv);
    
    const makeChanges = () => {
        genre.textContent = 'драма';
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    makeChanges();

    const sortArr = (arr) => {
        arr.sort();
    };
    // sortArr(movieDB.movies);

    function createMovieList(films, parent) {
        parent.innerHTML = ""; // на место списка фильмов передает пустое место. Проще говоря удаляет текст
        sortArr(films);

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item">${i +1}. ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => {
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1);
                createMovieList(films, parent); 
            });
        });
    }
    createMovieList(movieDB.movies, moviesList); 
});


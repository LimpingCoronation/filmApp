"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let movies = {}

let getFilm = '',
    getResume = '';

console.log(getFilm.length);

for (let i = 0; i <= 1; i++) {
    while (getFilm.length >= 50 || getFilm.length == 0) {
        getFilm = prompt("Один из последних просмотренных филмов?");
    }
    getResume = +prompt("На сколько оцените его?");
    personalMovieDB.movies[`${getFilm}`] = `${getResume}`;
    getFilm = '';
    getResume = '';
}

console.log(personalMovieDB);

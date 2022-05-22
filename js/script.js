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

let getFilm = '';
let getResume = '';

for (let i = 0; i <= 1; i++) {
    getFilm = prompt("Один из последних просмотренных филмов?");
    getResume = prompt("На сколько оцените его?");
    personalMovieDB.movies[`${getFilm}`] = `${getResume}`;
}

console.log(personalMovieDB);

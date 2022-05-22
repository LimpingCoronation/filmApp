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

let getFilm = prompt("Один из последних просмотренных филмов?");
let getResume = prompt("На сколько оцените его?");

movies[`${getFilm}`] = `${getResume}`;

getFilm = prompt("Один из последних просмотренных филмов?");
getResume = prompt("На сколько оцените его?");

movies[`${getFilm}`] = `${getResume}`;

console.log(personalMovieDB);
console.log(movies);

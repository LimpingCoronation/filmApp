"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

let personalMovieDB = {
    count: numberOfFilms,
    movies: null,
    actors: null,
    genres: [],
    privat: false,
}



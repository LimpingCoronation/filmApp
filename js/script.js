"use strict";

let numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");

if (numberOfFilms < 10) {
    alert("Просмотрено довольно мало филмов");
} 
else if (numberOfFilms >= 10 && numberOfFilms <= 30) {
    alert("Вы классический зритель");
}
else if (numberOfFilms > 30) {
    alert("Вы киноман!");
}
else {
    alert("Произошла ошибка");
}

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let movies = {}

for (let i = 0; i <= 1; i++) {
    let getFilm = prompt("Один из последних просмотренных филмов?"),
        getResume = +prompt("На сколько оцените его?");
    
    while (getFilm.length >= 50 || getFilm.length == 0) {
        getFilm = prompt("Один из последних просмотренных филмов?");
    }
    personalMovieDB.movies[`${getFilm}`] = `${getResume}`;
}

console.log(personalMovieDB);

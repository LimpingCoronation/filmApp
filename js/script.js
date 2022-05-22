"use strict";

let numberOfFilms;

function getCountOfFilms() {
    while ( numberOfFilms == null || numberOfFilms == '' || isNaN(numberOfFilms) ) {
        numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?");
    }
}

getCountOfFilms() ;

function detectPersonalLevel() {
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
}

detectPersonalLevel();

let personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
}

let movies = {}

function rememberFilms() {
    for (let i = 0; i <= 1; i++) {
        let getFilm = prompt("Один из последних просмотренных филмов?"),
            getResume = +prompt("На сколько оцените его?");
        
        while (((getFilm.length >= 50 || getFilm.length == 0) || getFilm == null || getResume == null ||
         getResume > 10 || getResume <= 0 ||
         getResume == '' || getFilm == '') == true) {
            getFilm = prompt("Один из последних просмотренных филмов?");
            getResume = +prompt("На сколько оцените его?");
        }
        personalMovieDB.movies[`${getFilm}`] = `${getResume}`;
    }
}

rememberFilms();

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        let genre;
        while ( genre == null || genre == '' ) {
            genre = prompt(`Ваш любимый жанр под номером ${i}:`);
        }
        personalMovieDB.genres.push(genre);
    }
}

writeYourGenres();

function showMyDB() {
    if ( !personalMovieDB.privat ) {
        console.log(personalMovieDB);
    }
}

showMyDB()

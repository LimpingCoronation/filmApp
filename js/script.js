"use strict";

let personalMovieDB = {
    count: null,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    numberOfFilms: null,
    getCountOfFilms: function() {
        while ( this.count == null || this.count == '' || isNaN(this.count) ) {
            this.count = +prompt("Сколько фильмов вы уже посмотрели?");
        }
    },
    detectPersonalLevel: function() {
        if (this.count < 10) {
            alert("Просмотрено довольно мало филмов");
        } 
        else if (this.count >= 10 && this.count <= 30) {
            alert("Вы классический зритель");
        }
        else if (this.count > 30) {
            alert("Вы киноман!");
        }
        else {
            alert("Произошла ошибка");
        }
    },
    rememberFilms: function() {
        for (let i = 0; i <= 1; i++) {
            let getFilm = prompt("Один из последних просмотренных филмов?"),
                getResume = +prompt("На сколько оцените его?");
            
            while (((getFilm.length >= 50 || getFilm.length == 0) || getFilm == null || getResume == null ||
             getResume > 10 || getResume <= 0 ||
             getResume == '' || getFilm == '') == true) {
                getFilm = prompt("Один из последних просмотренных филмов?");
                getResume = +prompt("На сколько оцените его?");
            }
            this.movies[`${getFilm}`] = `${getResume}`;
        }
    },
    writeYourGenres: function() {
        for (let i = 1; i < 4; i++) {
            let genre;
            while ( genre == null || genre == '' ) {
                genre = prompt(`Ваш любимый жанр под номером ${i}:`);
            }
            this.genres.push(genre);
        }
        this.genres.forEach(function(item, i) {
            console.log(`Любимый жанр #${i} - это ${item}`);
        });
    },
    showMyDB: function() {
        if ( !this.privat ) {
            console.log(this);
        }
    },
    toggleVisibleMyDB: function() {
        ( this.privat == false ) ? this.privat = true : this.privat = false
    },
}

// personalMovieDB.getCountOfFilms();
// personalMovieDB.detectPersonalLevel();
// personalMovieDB.rememberFilms();
// personalMovieDB.writeYourGenres();
// personalMovieDB.toggleVisibleMyDB();
// personalMovieDB.showMyDB();

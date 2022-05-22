"use strict";

let personalMovieDB = {
    movies: [
        'Логан',
        'Лига справедливости',
        'Ла-ла лэнд',
        'Одержимость',
        'Скотт пилигрим против...'
    ],
}

const advs = document.querySelectorAll(".promo__adv img"),
    title = document.querySelector(".promo__genre"),
    promoBG = document.querySelector (".promo__bg"),
    promoInteractive = document.querySelector(".promo__interactive-list"),
    promoInteractiveItems = document.querySelectorAll(".promo__interactive-item");

advs.forEach(item => {
    item.remove();
});

title.innerText = "драма";

promoBG.style.backgroundImage = 'url("../img/bg.jpg")';

for ( let item of promoInteractiveItems ) {
    item.remove();
}

personalMovieDB.movies.sort().forEach(function(item, i) {
    let elem = document.createElement("li");
    let delElem = document.createElement("div");
    delElem.classList.add("delete");
    elem.classList.add("promo__interactive-item");
    promoInteractive.append(elem);
    elem.innerText = `${ i + 1 }.${item}`;
    elem.append(delElem);
});

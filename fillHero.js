const heroImg = document.getElementById('hero-img');
const h1 = document.getElementById('h1');
const main1P = document.getElementById('main1-p');
const main1Button = document.getElementById('main1-button');

function fillHero() {
    heroImg.src = hero.img;
    h1.textContent = hero.h1;
    main1P.textContent = hero.p;
    main1Button.textContent = hero.button;
}
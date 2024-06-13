const main4H2 = document.getElementById('main4-h2');
const main4H4 = document.getElementById('main4-h4');
const quoteIcon = document.querySelectorAll('.absolute-quote-icon');
const main4H5 = document.querySelectorAll('.main4-h5');
const estrelas = document.querySelectorAll('.stars-cont');
const main4Ps = document.querySelectorAll('.main4-p');


function fillMain4() {
    main4H2.textContent = testemunhos.h2;
    main4H4.textContent = testemunhos.h4;
    for (let i= 0; i < main4H5.length; i++) {
        quoteIcon[i].src = testemunhos.img;
        main4H5[i].textContent = testemunhos.h5[i];
        estrelas[i].style.backgroundImage = testemunhos.estrelas;
        main4Ps[i].textContent = testemunhos.p[i];
    }
    



}
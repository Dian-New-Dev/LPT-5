const foto = document.getElementById('foto');
const main2H2 = document.getElementById('main2-h2');
const main2P1 = document.getElementById('main2-p1');
const main2P2 = document.getElementById('main2-p2');
const main2Icon = document.getElementById('main2-icon');

const main2H4 = document.querySelectorAll('.main2-h4');
const setas = document.querySelectorAll('.seta');
const respostasArray = document.querySelectorAll('.respostas');


function fillMain2() {
    foto.src = sobre.img;
    main2H2.textContent = sobre.h2;
    main2P1.textContent = sobre.p1;
    main2P2.textContent = sobre.p2;
    main2Icon.src = sobre.icon;
    for (let i = 0; i < main2H4.length; i++) {
        main2H4[i].textContent = sobre.h4[i];
        setas[i].src = sobre.seta;
    }

    for (let ii = 0; ii < respostasArray.length; ii++) {
        respostasArray[ii].textContent = sobre.respostas[ii];
    }
    



}
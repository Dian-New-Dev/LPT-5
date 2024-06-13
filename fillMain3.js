const main3H2 = document.getElementById('main3-h2');
const main3Imgs = document.querySelectorAll('.grid-img');
const main3H5s = document.querySelectorAll('.main3-h5');

function fillMain3() {
    main3H2.textContent = especialidades.h2;
    for (let i = 0; i < main3Imgs.length; i++) {
        main3Imgs[i].src = especialidades.img[i];
        main3H5s[i].textContent = especialidades.h5[i];
    }
}
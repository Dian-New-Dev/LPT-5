const citacao = document.getElementById('quote');
const autor = document.getElementById('autor');
const main6 = document.querySelector('.main6-inspiracao');

function fillMain6(){
    citacao.textContent = inspiracao.citacao;
    autor.textContent = inspiracao.autor;
    main6.style.backgroundImage = inspiracao.img;
}
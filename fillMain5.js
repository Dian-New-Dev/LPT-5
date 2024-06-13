const main5H2 = document.getElementById('main5-h2');
const main5H3 = document.querySelectorAll('.main5-perguntas');
const perguntasContainer = document.querySelectorAll('.perguntas');

function fillMain5() {
    main5H2.textContent = FAQ.h2;
    for (let i = 0; i < main5H3.length; i++ ) {
        main5H3[i].textContent = FAQ.h3[i];
        perguntasContainer[i].addEventListener('click', function() {
            mostrarResposta(perguntasContainer[i], FAQ.respostas[i])
        })
    }
}

const main5RespostaPanel = document.getElementById('main5-resposta');

function mostrarResposta(perguntaSelecionada, respostaAMostrar) {
    console.log(perguntaSelecionada);
    main5RespostaPanel.textContent = respostaAMostrar;
}
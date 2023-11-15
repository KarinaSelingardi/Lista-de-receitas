// script.js

document.addEventListener('DOMContentLoaded', function () {
    console.log('Documento carregado');

    var botaoIngredientes = document.getElementById('botao-ingredientes');
    var listaIngredientes = document.getElementById('lista-ingredientes');

    botaoIngredientes.addEventListener('click', function () {
        // Alterna a visibilidade da lista de ingredientes
        if (listaIngredientes.style.display === 'none' || listaIngredientes.style.display === '') {
            listaIngredientes.style.display = 'block';
        } else {
            listaIngredientes.style.display = 'none';
        }
    });
});

document.body.onload = function () {
    console.log('Corpo da página carregado');
};

window.onunload = function () {
    console.log('Janela fechada ou página recarregada');
};

document.body.addEventListener('click', function (event) {
    console.log('Clique em qualquer parte do corpo da página', event);
});

document.body.addEventListener('mousemove', function (event) {
    console.log('Movimento do mouse em qualquer parte do corpo da página', event);
});

document.body.addEventListener('keydown', function (event) {
    console.log('Tecla pressionada em qualquer parte do corpo da página', event);
});


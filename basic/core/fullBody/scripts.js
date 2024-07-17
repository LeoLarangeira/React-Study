// Principais Conceitos da DOM 

/*
1 - Document: Representa o documetno HTML carregado no navegador. É a raiz da árvore da DOM.
2 - Elementos: Cada tag HTML é representada como um nó na árvore da DOM. Esses nós são chamados de elementos.
3 - Nodos (nodes): Incluem eleemntos, mas também podem ser textos, atributos e outros tipos de nós. 
4 - Seletores: Métodos para selecionar elementos da DOM, como getElementById, getElementByClassName, getElementByTagName, querySelector, e querySelectorAll.
5 - Manipulação: Modificação de conteúdo, atributos e estilos de elementos da DOM.
6 - Eventos: Respostas a ações do usuário, como cliques, digitação e carregamento de página.
*/

//Selecionando Elementos 

var elementIds = document.getElementById('btnControl')

var elementsClass = document.getElementsByClassName('myClass')

var elementsTag =  document.getElementsByTagName('div');

var paragraph = document.getElementById('paragraph');
var contentDiv = document.getElementById('content');
// aqui é para o seletor css
var elementsQuerySelector = document.querySelector('.myClass')

var elementsQuerySelectorAll = document.querySelectorAll('.myClass')


//manipulando os elementos 

elementIds.style.backgroundColor = 'red';

elementIds.addEventListener('click', function(){
        paragraph.textContent = 'Trocando o texto mané'

        var newParagraph = document.createElement('p')
        newParagraph.textContent = 'Esse aqui eu acabei de criar filho'
        contentDiv.appendChild(newParagraph)
})
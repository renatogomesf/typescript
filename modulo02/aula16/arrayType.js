"use strict";
// Exemplo 01 - Uso de colchetes
let frutas = ['abacaxi', 'laranja', 'maçã', 'melancia', 'manga'];
console.log(frutas[2]);
// Exemplo 02 - Array object (objeto Array)
let frutas1 = [
    'abacaxi',
    'laranja',
    'maçã',
    'melancia',
    'manga',
];
console.log(frutas1[3]);
// Exemplo 03 - Adicionando mais strings com 'push'
let idiomas = ['portugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas);
idiomas.push('mandarim');
console.log(idiomas);
idiomas.push('italiano');
console.log(idiomas);
// Exemplo 04 - Indentificar tamanho do array com 'length'
let idiomas1 = ['portugues', 'ingles', 'espanhol', 'frances'];
console.log(idiomas1.length);
// Exemplo 05 - Exemplo de array com Spread Operator
let numeros = [0, 1, 2, 3, 4, 5];
numeros = [...numeros, 6, 7, 8, 9, 10];
console.log(numeros);
// Exemplo 06 - Exemplo de array com laço de iteração
// outra forma de declarar array
let linguagemArray = new Array('javascript', 'python', 'php', 'c#');
function funcaoLinguagens(linguagens) {
    for (let i = 0; i < linguagens.length; i++) {
        const element = linguagemArray[i];
        console.log(element);
    }
}
funcaoLinguagens(linguagemArray);

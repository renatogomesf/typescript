"use strict";
// Tupla: array de dados primitivos fixos. deve ser preenchido na sequencia foi declarado.
// Exemplo 01 - Uso simples de tuplas em typescript
let pessoa;
pessoa = ['glaucia lemos', 'cloud advocate', 34];
// pessoa = [34, 'glaucia lemos', 'cloud advocate']; (da erro)
console.log(pessoa);
// Exemplo 02 - Acessando valor da tupla
let pessoa1;
pessoa1 = ['glaucia lemos', 'cloud advocate', 34];
console.log(pessoa1[1]);
// Exemplo 03 - Outra forma de usar tuplas em typescript (com labels)
let pessoa2 = [
    'glaucia lemos',
    'cloud advocate',
    34,
];
console.log(pessoa2);
// Exemplo 04 - Usando tuplas com spread operator
// "...string[]": com uso do spread, é declarado que os demais itens do array serão strings. desta forma, não precisa escrever string varias vezes paracada item do array. declara o primeiro e, se for um array enorme só de string, usa o "...string[]"
let listaFrutas = [
    'abacaxi',
    'laranja',
    'maçã',
    'melancia',
    'manga',
];
console.log(...listaFrutas);
// Exemplo 05 - Lista heterogênea de tupla
let listaFrutas2 = [5, true, ...listaFrutas];
console.log(listaFrutas2);
// Exemplo 06 - Uso de função com tupla
// "nomes: string": indica que o parâmetro é do tipo string
// "nomes: string[]"(com uso de colchetes "[]"): indica que é uma tupla de strings com label "nome"
// o mesmo vale para "idades"
// function listarPessoas(nomes: string, idades: number)
function listarPessoas(nomes, idades) {
    return [...nomes, ...idades];
}
let resultado = listarPessoas(['glaucia', 'jurema'], [34, 68]);
console.log(resultado);
function criarPessoa(...nome) {
    return [...nome];
}
console.log(criarPessoa('glaucia', 'lemos'));
console.log(criarPessoa('glaucia', 'de souza', 'lemos'));

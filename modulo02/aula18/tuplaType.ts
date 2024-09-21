// Tupla: array de dados primitivos fixos. deve ser preenchido na sequencia foi declarado.

// Exemplo 01 - Uso simples de tuplas em typescript
let pessoa: [string, string, number];
pessoa = ['glaucia lemos', 'cloud advocate', 34];
// pessoa = [34, 'glaucia lemos', 'cloud advocate']; (da erro)
console.log(pessoa);

// Exemplo 02 - Acessando valor da tupla
let pessoa1: [string, string, number];
pessoa1 = ['glaucia lemos', 'cloud advocate', 34];

console.log(pessoa1[1]);

// Exemplo 03 - Outra forma de usar tuplas em typescript (com labels)
let pessoa2: [nome: string, posicao: string, idade: number] = [
  'glaucia lemos',
  'cloud advocate',
  34,
];

console.log(pessoa2);

// Exemplo 04 - Usando tuplas com spread operator
// "...string[]": com uso do spread, é declarado que os demais itens do array serão strings. desta forma, não precisa escrever string varias vezes paracada item do array. declara o primeiro e, se for um array enorme só de string, usa o "...string[]"
let listaFrutas: [string, ...string[]] = [
  'abacaxi',
  'laranja',
  'maçã',
  'melancia',
  'manga',
];
console.log(...listaFrutas);

// Exemplo 05 - Lista heterogênea de tupla

// Exemplo 06 - Uso de função com tupla

// Exemplo 07 - Labeled tuples com spread operator numa função

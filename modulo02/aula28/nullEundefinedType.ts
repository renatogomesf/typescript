// Null e Undefined são usado em retorno de funções que não retornam nenhum valor.

// NULL: ausência intencional de valor. não é possível atribuir outro valor que nnão seja nulo. representa uma variável cujo valor é indefinido, vazio, inexistente.

// UNDEFINED: representa variáveis que não são inicializadas. tem apenas um valor que é Undefined. uma função que não retorna um valor, também tem o valor de undefined.

// Exemplo 01 - Null
let variavelNull = null;

console.log(variavelNull);
console.log(typeof variavelNull);

// Exemplo 02 - Undefined
let variavelUndefined;

console.log(variavelUndefined);
console.log(typeof variavelUndefined);

// Diferenças e Similaridades: null vs undefined

console.log('Exemplo 01: ', null == undefined);
console.log('Exemplo 02: ', null === undefined);

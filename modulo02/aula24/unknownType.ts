// Quando não souber o tipo da variável, constante ou parâmetro, usar o unknown em vez do any.

// com o UNKNOWN, é obrigado a verificar o valor.

// quando se atribui uma variável unknown a outras variáveis já tipadas com boolean, number, string... irá da erro.

// exemplo:
//let valor: unknown
//let valor1: boolean = valor

// Exemplo 01 - Tipo unknown
let valorVariavel: unknown;
valorVariavel = true;
valorVariavel = 123;
valorVariavel = [];
valorVariavel = 'salve';

// Exemplo 02 - Erro ao tentar atribuir um valor 'unknown' a outros tipos
let valor: unknown;

// let valor1: boolean = valor;
// let valor2: number = valor;
// let valor3: string = valor;
// let valor4: any[] = valor;

// Exemplo 03 - Diferença entre any e unknown
let algumaCoisaAny: any
let algumaCoisaUnknown: unknown

// "toFixed()": pertence a um number.prototype. ou seja, ele espera um número.
console.log(algumaCoisaAny.toFixed(2));//não verifica o valor
// console.log(algumaCoisaUnknown.toFixed(2));//precisa verifica o tipo antes de atribuir.

//verificação do tipo
if(typeof algumaCoisaUnknown == 'number'){
    console.log(algumaCoisaUnknown.toFixed(2))
}
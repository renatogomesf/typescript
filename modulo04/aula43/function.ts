// Functions

// function nome (parâmetro01: tipo, parâmetro02: tipo): retornoDoTipo/DaFuncao {
//     lógica da função
// };

// Exemplo 01 - Functions (named function)
function somarNumeros(num1: number, num2: number): number {
  return num1 + num2;
}

const resultadoo = somarNumeros(2, 2);

console.log(resultadoo);

// Exemplo 02 - Função anônima (function expression)
const saudar = function (mensagem: string): string {
  return mensagem;
};

console.log(saudar('salve'));

// Exemplo 03 - Arrow function expression
const saudar02 = (mensagem: string): string => {
  return mensagem;
};

console.log(saudar02('salverson'));

// Exemplo 04 - Function constructor
const saudar03 = new Function('mensagem', 'return "fala " + mensagem')

console.log(saudar03('galera'));

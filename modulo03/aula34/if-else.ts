// if else: igual ao js normal.

// Exemplo 01 - Uso de if
const numeroMax: number = 100;
let contador: number = 90;

if (contador < numeroMax) {
  contador++;
}

console.log(contador);

// Exemplo 02 - Uso de if
const permissaoIdadeDirigir: number = 16;

if (permissaoIdadeDirigir >= 18) {
  console.log('pode dirigir');
}

console.log(permissaoIdadeDirigir);

// Exemplo 03 - Uso de if-else
const permissaoIdadeDirigir01: number = 18;

if (permissaoIdadeDirigir01 <= 17) {
  console.log('pode dirigir');
} else {
  console.log('NÃO pode dirigir');
}

// Exemplo 04 - if... else if (cálculo IMC)
let desconto: number;
let valorCompra: number = 14;

if (valorCompra > 0 && valorCompra <= 5) {
  desconto = 5;
} else if (valorCompra > 5 && valorCompra <= 10) {
  desconto = 10;
} else {
  desconto = 15;
}

console.log(`obteve desconto de ${desconto}%`);

// Exemplo 05 - Ternário (teste ? seTrue : seFalse ) - if ... else

const idadeVotacao = 17;

// if (idadeVotacao >= 18) {
//   console.log('pode votar');
// } else {
//   console.log(' não pode votar');
// }

const podeVotar = (idadeVotacao >= 18 ? 'pode votar' : 'não pode votar');

console.log(podeVotar);

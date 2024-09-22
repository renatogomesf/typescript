// Any pode ser qualquer tipo primitivo, qualquer coisa. desta forma, aconselha-se evitar o uso de any. é sempre bom definir o tipo dentro de TypeScript.

// Exemplo 01 - Tipo Any
const a: any = 34;
const b: any = ['glaucia'];

const result = a + b;
console.log(result);

// Exemplo 02 - Quando o tipo 'any' é inferido implicitamente
let frase;
frase = 'oi, pessoal! tudo bem?';
console.log(frase);

// Exemplo 03 - Quando devemos usar o tipo any?
const formulario: { [campoFormulario: string]: any } = {
  nome: 'glaucia',
  sobrenome: 'lemos',
  idade: 34,
};

console.log(formulario);

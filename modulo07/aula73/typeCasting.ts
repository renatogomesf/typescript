// permite que você converta variável de um tipo para outro. (casting)

// utilza-se "<>" ou "as".

export {};

// Exemplo 01 - 'as'

const nome: unknown = 'glaucia lemos';

console.log((nome as string).toLowerCase());

// Exemplo 02 - '<>'

const carro = 'corolla';

const tamanhoString: number = (<string>carro).length;

console.log(tamanhoString);

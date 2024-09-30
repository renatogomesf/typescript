// tem como definir valores padrões para parâmetros de funções, basta atribuir um valor ao parâmetro com o uso do "=".
// se não for dado nem um valor para o parâmetro, ele assumirar um valor pre-definido. esses parâmetros devem sempre vir no final.

// Exemplo 01 - Default parameters
function descontoCompra(preco: number, desconto = 0.08): number {
  return preco * (1 - desconto);
}

console.log(descontoCompra(100));

// Exemplo 02 -
function exibirMensagem(mensagem: string, saudar = 'fala, pessoal!'): string {
  return `${saudar} ${mensagem}!`;
}

console.log(exibirMensagem('TypeScript developers'));

// Exemplo 03 -
function exibirNome(nome: string, sobrenome = 'Gomes'): string {
  return `${nome} ${sobrenome}`;
}

const resultado01 = exibirNome('Renato');

const resultado02 = exibirNome('Glaucia', undefined);

// const resultado03 = exibirNome('Glaucia', 'de Souza', 'senhorita');

const resultado04 = exibirNome('Glaucia', 'de Souza');

console.log(resultado01);
console.log(resultado02);
// console.log(resultado03);
console.log(resultado04);

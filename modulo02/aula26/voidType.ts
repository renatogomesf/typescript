// Voide: Representa que o tipo de retorno de uma função ou método não vai retornar nem um dado.

// Void é usado em funções que não possuem retorno

// é o oposto do any. tem ausência de qualquer tipo

// É UMA BOA PRÁTICA ADICIONAR O TIPO VOID COMO TIPO DE RETORNO DE UMA DETERMINADA FUNÇÃO OU MÉTODO QUE NÃO RETORNAM NENHUM VALOR. com isso, melhora a clareza do código, garante segurança de tipo

// Exemplo 01 - Funções

function logError(erroMessage: string): void {
  console.log(erroMessage);
  //   return erroMessage
}

logError('opa');

// Exemplo 02 - Arroy function

const logErro2 = (erroMessage: string): void => {
  console.log(erroMessage);
};

logErro2('teste');

// Exemplo 03 - variáveis

let variavelExVoid: void
// veriavelExVoid = 1
variavelExVoid = null
variavelExVoid = undefined
// veriavelExVoid = 'salve'

console.log(variavelExVoid);

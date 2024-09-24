// Never: não contém valores. não podemos atribuir valor ao tipo never. deve ser usado quando queremos representar um determinado tipo de retorno de função que sempre gera um erro... os Throw Exeptions, ou seja, representa um valor que nunca ocorrera.

// Exemplo 01 - Never - Throw Exeption
const error = (message: string): never => {
  throw new Error(message);
};

console.log(error('erro de mensagem - 01'));

// Exemplo 02 - Never inferido automaticamente
const rejectMessage = () => {
  return error('erro de mensagem - 02');
};

console.log(rejectMessage());

// Exemplo 03 - Funções que contém loop infinito retorna o tipo 'never'
const loopInfinito = () => {
  while (true) {
    console.log('salve');
  }
};

// console.log(loopInfinito);

// Exemplo 04 - Diferença entre os tipos never e void

const algumaCoisaVoid: void = null

// const algumaCoisaNever: never = null
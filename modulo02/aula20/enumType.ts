// Enum está sendo ensinado... MAS É BOM EVITAR SEM PRE QUE POSSÍVEL.

// Enum não ocupa espaço de memória.
// o nome dado aos enuns possuem letra inicial maiúscula e no singular, bem como suas propriedades/informações armazenadas.

// Numeric Enum: são baseados em números e armazenam valores quais quer como números. para cada valor armazenado, automaticamente é atribuido um número.

// String Enum: é preciso inicializar uma "constante" e atribuir um valor. ex: Portugues(constante) = 'pt-br'(valor)

// Exemplo 01 - Numeric Enum
enum Idioma {
  Portugues,
  Espanhol,
  Ingles,
  Frances,
}

console.log(Idioma);

// Exemplo 02 - String Enum (não é muito recomendado)
enum Dia {
  Segunda = 'SEG',
  Terca = 'TER',
  Quarta = 'QUA',
  Quinta = 'QUI',
  Sexta = 'SEX',
  Sabado = 'SAB',
  Domingo = 'DOM',
}

console.log(Dia.Segunda);

// Exemplo 03 - Como podemos acessar um valor de um Enum com uma chave (usando o const)
const enum Comida {
  Hamburger,
  Massa,
  Pizza,
  Torta,
  Churrasco,
}

function comida(c: Comida) {
  return 'Comidas muito apetitosas';
}

console.log(comida(Comida.Pizza));
console.log(comida(Comida.Churrasco));
// console.log(comida(5));

// Exemplo 04 - Quando usar enum?
enum Tarefa {
  Todo,
  Progress,
  Done,
}

const concluidaTarefa = {
  id: 1,
  status: Tarefa.Done,
  descricao: 'Parabéns! Tarefa concluida com sucesso!',
};

if (concluidaTarefa.status == Tarefa.Done) {
  console.log('Enviar e-mail: Tarefa concluida!');
}

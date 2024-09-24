// object: Representa todos os valores que não são tipos primitivos. melhor forma de representar dados. podem ser anonimos ou nomeados

// Object (maiúsculo): descreve a funcionalidade disponível em todos os objetos.

// {}: refere-se ao objeto que não possui propriedade propria

// Exemplo 01 - Exemplo básico de uso de Type Object
const pessoa00 = {
  nome: 'Glaucia',
  sobrenome: 'Lemos',
  idade: 35,
  funcao: 'Cloud Advocate',
};

console.log(pessoa00);

// Exemplo 02 - object como parâmetro de função (elas podem ser anônimos)
function onboarding01(funcionario: { nome: string }) {
  return 'Seja bem-vindo ' + funcionario.nome;
}

console.log(onboarding01({ nome: 'Renato' }));

// Exemplo 03 - object nomeados (interface)
interface Pessoa02 {
  nome: string;
  funcao: string;
}

function onboarding02(pessoa: Pessoa02) {
  return `Seja bem-vindo ${pessoa.nome}! Sua função aqui na empresa será ${pessoa.funcao}.`;
}

console.log(onboarding02({ nome: 'Renato', funcao: 'Eng.Software' }));

// Exemplo 04 - object como type alias
type Pessoa03 = {
  nome: string;
  funcao: string;
  linguagem: string;
};

function onboarding03(pessoa: Pessoa03) {
  return `Seja bem-vindo ${pessoa.nome}! Sua função aqui na empresa será ${pessoa.funcao}. Você trabalhara com a linguagem ${pessoa.linguagem}`;
}

console.log(
  onboarding03({
    nome: 'Renato',
    funcao: 'Eng.Software',
    linguagem: 'JavaScript/TypeScript',
  }),
);

// Exemplo 05 - usando optional no object
interface Pessoa04 {
  nome: string;
  funcao: string;
  linguagem: string;
  email?: string; // "?": indica que é opcional
}

function onboarding04(pessoa: Pessoa04) {
  return `Seja bem-vindo ${pessoa.nome}! Sua função aqui na empresa será ${pessoa.funcao}. Você trabalhara com a linguagem ${pessoa.linguagem}`;
}

console.log(
  onboarding04({
    nome: 'Renato',
    funcao: 'Eng.Software',
    linguagem: 'JavaScript/TypeScript',
  }),
);

// Exemplo 06 - Propriedade 'readonly' (se deseja proibir que os devs não modifiquem um determinado objeto use o 'readonly')
interface Pessoa05 {
  nome: string;
  funcao: string;
  linguagem: string;
  readonly email: string; // não pode ser gravada durante a verificação de tipo.
}

function onboarding05(pessoa: Pessoa05) {
  return `Seja bem-vindo ${pessoa.nome}! Sua função aqui na empresa será ${pessoa.funcao}. Você trabalhara com a linguagem ${pessoa.linguagem}. Seu e-mail será ${pessoa.email}`;
}

console.log(
  onboarding05({
    nome: 'Renato',
    funcao: 'Eng.Software',
    linguagem: 'JavaScript/TypeScript',
    email: 'renatogomes@microsof.com',
  }),
);

// Exemplo 07 - Tipos de exensões (heranças)
interface Mae {
  nome: string;
}

interface Pai {
  sobrenome: string;
}

interface Filha extends Mae, Pai {
  idade: number;
}

const filha: Filha = {
  nome: 'glaucia',
  sobrenome: 'lemos',
  idade: 34,
};

console.log(filha);

// Exemplo 08 - Tipos de Interseções
interface Cachorro {
  tipo: string;
}

interface Gato {
  tipo: string;
}

type Animal = Cachorro & Gato; //Interseção

// Exemplo 09 - Generic Object
type Usuario = {
  nome: string;
  email: string;
};

type Admim = {
  nome: string;
  email: string;
  admim: true;
};

const usuario: Usuario = {
  nome: 'glaucia lemos',
  email: 'algumacoisa@gmail.com',
};

const admim: Admim = {
  nome: 'glaucia lemos',
  email: 'algumacoisa@gmail.com',
  admim: true,
};

//"<T>": pode ser outra letra... mas usando o "T", indica que é uma função do tipo genérico. aceita informações de usuário e de admim
function acessarSistema<T>(usuario: T): T {
  return usuario;
}

console.log(acessarSistema<Usuario>(usuario));
console.log(acessarSistema<Admim>(admim));

// function acessarSistema(usuario: Usuario): Usuario {
//   return usuario;
// }

// console.log(acessarSistema(usuario));

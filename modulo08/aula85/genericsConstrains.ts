// permite trabalhar com todos os tipos de dados

// podemos restringir certos tipos usando constrains

// usa-se "extends"

export {};

// Exemplo 01 - Generics Constrains

interface Pessoa {
    nome: string;
    idade: number;
}

function obterPessoaIdadeMaiorQue<T extends Pessoa>(
    pessoa: T[],
    idade: number,
): T[] {
    return pessoa.filter((pessoa) => pessoa.idade > idade);
}

const pessoas: Pessoa[] = [
    { nome: 'glaucia', idade: 36 },
    { nome: 'joão', idade: 20 },
    { nome: 'angelica', idade: 30 },
    { nome: 'maria', idade: 25 },
    { nome: 'josé', idade: 18 },
];

const pessoasComIdadeMaiorQue25 = obterPessoaIdadeMaiorQue(pessoas, 25);

console.log(pessoasComIdadeMaiorQue25);

// Exemplo 02 - Generics Constrains

function juntarObjetos<U, V>(objeto1: U, objeto2: V) {
    return {
        ...objeto1,
        ...objeto2,
    };
}

const pessoa = juntarObjetos({ nome: 'glaucia' }, { idade: 36 });

console.log(pessoa);

const pessoa2 = juntarObjetos({ nome: 'glaucia' }, 36); // não mostra erro e executa omitindo o valor "36"

console.log(pessoa2);

function juntarObjetos2<U extends object, V extends object>( // definindo/restringindo como objeto
    objeto1: U,
    objeto2: V,
) {
    return {
        ...objeto1,
        ...objeto2,
    };
}

const pessoa3 = juntarObjetos2({ nome: 'glaucia' }, 36); // mostra erro

console.log(pessoa3);

// Exemplo 03 - Type parameter in generic constrains

function prop<T, K>(objeto: T, chave: K) {
    return objeto[chave];
}

function prop2<T, K extends keyof T>(objeto: T, chave: K) {
    return objeto[chave];
}

const pessoa4 = prop2({ nome: 'glaucia' }, 'nome');
console.log(pessoa4);

const pessoa5 = prop2({ nome: 'glaucia' }, 'idade');
console.log(pessoa5);

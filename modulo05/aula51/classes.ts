// você organiza e pensa sobre o código
// unidade primária de encapsulamento

// class <nome_classe> {
//     campo;
//     constructor {}
//     metodo;
// }

// Exemplo 01 - Classes
export {};

class Pessoa {
    nome: string;
    sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `Seu nome é ${this.nome} ${this.sobrenome}.`;
    }
}

const pessoa01 = new Pessoa('Renato', 'Gomes');

console.log(pessoa01);
console.log(pessoa01.nomeCompleto());

// Exemplo 02 - Classes (sem constructor)
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

// criar um objeto ou a instancia
const estudante = new Estudante();

// inicializar o objeto
estudante.codigoEstudante = 3928;
estudante.nomeEstudante = 'Prince Lemos';

// acessar os campos
console.log(`codigo do estudande: ${estudante.codigoEstudante}.`);
console.log(`nome do estudande: ${estudante.nomeEstudante}.`);

// Exemplo 03 - Classes (com constructor)
class Estudante01 {
    codigoEstudante: number;
    nomeEstudante: string;

    // definir o construtor
    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }

    // criar o método
    listarEstudante(): void {
        console.log(`código do estudante: ${this.codigoEstudante}.`);
        console.log(`nome do estudante: ${this.nomeEstudante}.`);
    }
}

// acessar os campos
const estudante01 = new Estudante01(9283, 'Renato Gomes');

console.log(`atributo do estudante: ${estudante01.codigoEstudante}`);
console.log(`atributo do estudante: ${estudante01.nomeEstudante}`);

// alteram a visibilidade das propriedades e métodos de uma classe.

// existem 3 modificadores: private, protected e public

// por padrão, todos as propriedades e métodos são public. então não há necessidade de prefixar os membros.

// private: o método/propriedade pode ser acessado dentro da classe, mas não fora dela.

// Protected: o método/propriedade pode ser acessado dentro da classe ou de uma subclasse(classe que extende a classe pai). mas não fora delas.

export {};

// Exemplo 01 - Modificador: public
class Estudante {
    codigoEstudante: number;
    nomeEstudante: string;
}

const estudante = new Estudante();

estudante.codigoEstudante = 912387;
estudante.nomeEstudante = 'Glaucia';

console.log(estudante.codigoEstudante);
console.log(estudante.nomeEstudante);

// Exemplo 02 - Modificador: private
class Estudante_02 {
    codigoEstudante: number;
    nomeEstudante: string;
    private idade: number;

    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }

    retornarDadosEstudante() {
        return `codigo do aluno: ${this.codigoEstudante}, nome do estudante: ${this.nomeEstudante}, idade do estudante: ${this.idade}`;
    }
}

const estudante_02 = new Estudante_02(92378, 'Glucia', 35);

console.log(estudante_02.retornarDadosEstudante());

// Exemplo 03 - Modificador: protected
class Estudante_03 {
    codigoEstudante: number;
    protected nomeEstudante: string;

    constructor(codigoEstudante: number, nomeEstudante: string) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
    }
}

class Pessoa extends Estudante_03 {
    private curso: string;

    constructor(codigoEstudante: number, nomeEstudante: string, curso: string) {
        super(codigoEstudante, nomeEstudante);
        this.curso = curso;
    }

    retornarDadosAluno() {
        return `codigo do aluno: ${this.codigoEstudante}, nome do estudante: ${this.nomeEstudante}, matéria do estudante: ${this.curso}`;
    }
}

const estudante_03 = new Pessoa(1236, 'Renato', 'TypeScript');

console.log(estudante_03.retornarDadosAluno());

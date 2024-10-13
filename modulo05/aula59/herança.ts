// criar novas classes a partir de uma classe existente.

// a classe extendida é chamada de pai/superclasse
// as classes criadas a partir da classe pai são chamadas de filha/subclasse

// quando se deseja utilizar herança, se utiliza a palavra "extends"

// as classe filhas recebem todas as propriedades e métodos do pai. exceto as privadas e construtores.

export {};

// Exemplo 01 -
class Animal {
    mover(distancia = 0) {
        console.log(`Animal se moveu: ${distancia} metros`);
    }
}

class Cachorro extends Animal {
    latir() {
        console.log('au, au!');
    }
}

const cachorro = new Cachorro();

cachorro.mover(20);
cachorro.latir();

// Exemplo 02 -
class Pessoa {
    private nome: string;
    private sobrenome: string;

    constructor(nome: string, sobrenome: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
    }

    nomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    apresentarPessoa(): string {
        return `Meu nome é ${this.nome} ${this.sobrenome}.`;
    }
}

class Funcionario extends Pessoa {
    private funcao: string;

    constructor(nome: string, sobrenome: string, funcao: string) {
        super(nome, sobrenome);
        this.funcao = funcao;
    }

    retornarNome(): string {
        return `${super.apresentarPessoa()} e sou ${this.funcao}`;
    }
}

const funcionario = new Funcionario('Renato', 'Gomes', 'Eng. Software');

console.log(funcionario.apresentarPessoa());
console.log(funcionario.nomeCompleto());
console.log(funcionario.retornarNome());

// é compartilhada entre todas as instâncias de uma classe

// para declarar uma propriedade estática deve-se usar "static"

// com o uso do "static" não precisa instanciar a classe (new Classe()) para acessar um método ou propriedade. mas chamar a propria classe seguido de "ponto" (.) e a propriedade ou método que deseja-se acessar. (classeName.propriedade/método).

export {};

// Exemplo 01 - Propriedades estáticas
class Funcionario {
    static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        Funcionario.contratacoes++;
    }
}

const funcionario_01 = new Funcionario('Glaucia', 'Lemos', 'Developer');
const funcionario_02 = new Funcionario('Renato', 'Gomes', 'Eng. de Software');

console.log(Funcionario.contratacoes);
console.log(funcionario_02);

// Exemplo 02 - Métodos estáticos
class Funcionario_01 {
    private static contratacoes = 0;

    constructor(
        private nome: string,
        private sobrenome: string,
        private titulo: string,
    ) {
        Funcionario_01.contratacoes++;
    }

    public static retornarContratacoes() {
        return Funcionario_01.contratacoes;
    }
}

const funcionario_03 = new Funcionario_01('Glaucia', 'Lemos', 'Developer');
const funcionario_04 = new Funcionario_01(
    'Renato',
    'Gomes',
    'Eng. de Software',
);

console.log(Funcionario_01.retornarContratacoes());

// Exemplo 03 - Propriedades estáticas

type Raca = 'Spitz Alemão' | 'Buldogue' | 'Pug' | 'Yorkshire' | 'Poodle';

class Cachorro {
    public nome: string;
    public idade: number;
    public racas: Raca[];
    public static qtd_cachorro_vendido = 0;

    constructor(nome: string, idade: number, racas: Raca[]) {
        this.nome = nome;
        this.idade = idade;
        this.racas = racas;

        Cachorro.qtd_cachorro_vendido++;
        console.log(Cachorro.qtd_cachorro_vendido);
    }

    public exibirInformacao(): void {
        console.log(`O cachorro ${this.nome} tem ${this.idade}.`);
    }
}

const cachorro_01 = new Cachorro('Faísca', 1, ['Pug'])
const cachorro_02 = new Cachorro('Pipoca', 4, ['Spitz Alemão'])
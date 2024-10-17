// é um contrato sintático (sintax) que uma entidade deve obedecer.

// uma interface define a sintax que qualquer entidade deve seguir/obedecer.

// definem propriedades, métodos e eventos que são o mebros da interface.

// as interfaces contem apenas a declaração dos mebros. não se atribui valores.

export {};

// Exemplo 01 - Interface simples
interface Pessoa {
    nome: string;
    sobrenome: string;
    idade: number;
}

const exibirNome = (pessoa: Pessoa): string => {
    return `Nome...: ${pessoa.nome}, Sobrenome...: ${pessoa.sobrenome}, Idade...: ${pessoa.idade}.`;
};

const glaucia = {
    nome: 'Glaucia',
    sobrenome: 'Lemos',
    idade: 34,
};

console.log(exibirNome(glaucia));

// Exemplo 02 - Interface com propriedades opcionais
interface Livro {
    titulo: string;
    autor: string;
    pagina?: number;
}

const livro: Livro = {
    titulo: 'Clean Code',
    autor: 'Robert C. Martin',
};

console.log(livro);

// Exemplo 03 - Interface com propriedades de somente leitura e opcionais
interface Carro {
    readonly modelo: string;
    ano: number;
    valo?: number;
}

const carro: Carro = {
    modelo: 'Fusca',
    ano: 1969,
};

///// carro.modelo = 'onix' // Não pode atribuir valores

console.log(carro);

// Exemplo 04 - Interface com implements Class
// tudo que está contido na interface será implementado (implements) na classe gato.

interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;

    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string): void {
        console.log(`o gato ${this.nome} está comendo ${tipoComida}`);
    }
}

const gato = new Gato('toto', 10, true);

console.log(gato);

gato.comer('ração');

// Exemplo 05 - Interface vs Alias Type
// são basicamente a mesma coisa. muda a sintax.

interface Pessoa02 {
    nome: string;
    sobrenome: string;
    idade: number;
}

type Pessoa03 = {
    nome: string;
    sobrenome: string;
    idade: number;
}
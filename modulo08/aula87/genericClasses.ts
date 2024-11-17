// pode trabalhar com vários tipos de dados

// permite definir uma classe com espaços reservados para os tipos de suas propriedades, métodos e parâmetros. torna possível reutilizar o código.

// usa-se "NomeClasse<>"

export {};

// Exemplo 01 - Generic Classes

class Box<T> {
    private item: T;

    constructor(item: T) {
        this.item = item;
    }

    getItem() {
        return this.item;
    }

    setItem(item: T) {
        this.item = item;
    }
}

const boxString = new Box<string>('glaucia');
const boxNumber = new Box<number>(36);

console.log(boxString.getItem());
console.log(boxNumber.getItem());

// Exemplo 02 -

class Estudante<T, U> {
    private id: T;
    private nome: U;

    setValor(id: T, nome: U): void {
        this.id = id;
        this.nome = nome;
    }

    retornarValor(): void {
        console.log(
            `Identificação do estudante: ${this.id}, Nome do Estudante: ${this.nome}`,
        );
    }
}


const estudante = new Estudante<number, string>()
const estudanteSecundario = new Estudante<string, string>()

estudante.setValor(101, 'glaucia')
estudante.retornarValor()

estudanteSecundario.setValor('202','jurema')
estudanteSecundario.retornarValor()
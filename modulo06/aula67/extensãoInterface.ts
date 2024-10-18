// para extender uma interface, usa-se a palavra reservada "extends". e, para extender multiplas interfaces, basta adicionar e separar por vígula.

export {};

// Exemplo 01 - Interfaces com extends
interface Animal {
    nome: string;
    idade: number;
    porte: string;
}

interface Cachorro extends Animal {
    raça: string;
}

const cachorro: Cachorro = {
    nome: 'Prince',
    idade: 2,
    porte: 'Médio',
    raça: 'Spitz Alemao',
};

console.log(cachorro);

// Exemplo 02 - Extensão de multiplas interfaces
interface Cachorro02 {
    nome: string;
}

interface Gato {
    nome: string;
}

interface Animal02 extends Cachorro02, Gato {
    idade: number;
}

const animal: Animal02 = {
    nome: 'Farofa',
    idade: 5,
};

console.log(animal);

// Exemplo 03 - Uso do Omit
// substituir uma propriedade/tipo de uma interface extendida

interface Funcionario {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario, 'id' | 'salario'> {
    id: string;
    salario: string;
    linguagemProgramacao: string;
}

const desenvolvedor: Desenvolvedor = {
    id: 'js-123',
    nome: 'glaucia',
    salario: '10000',
    linguagemProgramacao: 'javascript',
};

console.log(desenvolvedor);

// NA FORMA DE CIMA ELE MUDA O TIPO DA PROPRIEDADE. NESSA FORMA ABAIXO, ELE PERMITE DOIS TIPOS.
interface Funcionario02 {
    id: number | string;
    nome: string;
    salario: number | string;
}

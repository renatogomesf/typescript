// permite restringir o tipo de uma variável

// typeof: usado para determinar o tipo de uma variável. é limitado e só reconhece string, number, boolean, bigint, simbol, undefined. qualquer um que esteja fora desta lista, ele retorna como object. funciona apenas para os tipos typescript pre definidos.

// instanceof: "uma versão mais avançada do typeof"... decide se o objeto fornecido possui de fato as propriedades semelhantes à classe específica ou função do construtor (verifica qual classe o objeto foi instanciado). o instanceof retorna true ou false.

// in: usado para diferencia os tipos um dos outros. verifica se o objeto selecionado contem as propriedades especificadas (retornando true ou false).

export {};

// Exemplo 01 - typeof
type alfanumerico = string | number;

function exibirTipo(a: alfanumerico, b: alfanumerico) {
    if (typeof a === 'number' && typeof b === 'number') {
        return a + b;
    }

    if (typeof a === 'string' && typeof b === 'string') {
        return a.concat(b);
    }

    throw new Error(
        'Argumentos inválidos: Ambos os argumentos devem ser númericos ou string.',
    );
}

console.log(exibirTipo('glaucia', '20'));
console.log(exibirTipo(5, 5));
console.log(exibirTipo('lemos', 5));

// Exemplo 02 - instanceof
class Carro {
    nome: string;
    marca: string;

    constructor(nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }
}

const detalheVeiculo = (veiculo: Carro | Moto) => {
    if (veiculo instanceof Carro) {
        return `O nome do carro é: ${veiculo.nome} e a marca é: ${veiculo.marca}`;
    } else if (veiculo instanceof Moto) {
        return `O nome da moto é: ${veiculo.nome} e o ano é: ${veiculo.ano}`;
    }
};

const carro = new Carro('Gol', 'volkswagen');
console.log(detalheVeiculo(carro));

const moto = new Moto('CBR', 2020);
console.log(detalheVeiculo(moto));

// Exemplo 03 - in
interface Animal {
    grupo: string;
}

class Peixe implements Animal {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.grupo = grupo;
        this.corPeixe = corPeixe;
    }
}

class Passaro implements Animal {
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string) {
        this.grupo = grupo;
        this.corPena = corPena;
    }
}

function nadar(grupo: string) {
    console.log(`O ${grupo} está nadando...`);
}

function voar(grupo: string) {
    console.log(`O ${grupo} está voando...`);
}

function mover(animal: Animal) {
    if ('corPeixe' in animal) {
        nadar((animal as Peixe).grupo)
    } else if ('corPena' in animal) {
        voar((animal as Passaro).grupo)
    }
}

mover(new Peixe('peixe', 'azul'));
mover(new Passaro('pássaro', 'branco'));

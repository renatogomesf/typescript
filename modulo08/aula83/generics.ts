// permite escrever de forma reutilizável e generalizada as funções, classes e interfaces

// cria um componente que trabalha com uma variedade de tipos de dados

// permite que os usuários consumam esses componentes e usem seus próprios tipos

// garante que o programa seja flexível e escalável a longo prazo

// usa-se colchetes angulares "<>"

export {};

// Exemplo 01 - Generics

function retornarElementosRandomicos<T>(itens: T[]): T {
    let itemRandomico = Math.floor(Math.random() * itens.length);

    return itens[itemRandomico];
}

let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numerosRandomicos = retornarElementosRandomicos<number>(numeros);
console.log(numerosRandomicos);

let estados = [
    'são paulo',
    'rio de janeiro',
    'minas gerais',
    'paraná',
    'santa catarina',
    'rio grande do sul',
];
let estadosRandomicos = retornarElementosRandomicos<string>(estados);
console.log(estadosRandomicos);

// Exemplo 02 - Generics

function exibirElementos<T>(array: T[]): void {
    array.forEach((elemento) => {
        console.log(elemento);
    });
}

let number: number[] = [1, 2, 3, 4, 5];
let states: string[] = [
    'são paulo',
    'rio de janeiro',
    'minas gerais',
    'paraná',
    'santa catarina',
    'rio grande do sul',
];

exibirElementos<number>(number);
exibirElementos<string>(states);

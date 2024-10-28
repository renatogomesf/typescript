
// informa ao compilador sobre o tipo de uma variável. intrui como deve tratar.

// semelhante ao Type Casting, mas não reconstroe o código.

// usa-se 'as' ou '<>'

// EVITAR O USO DE TYPE ASSERTION

export {}

// Exemplo 01 - Type Assertion ('as' / '<>')

function exibirPrecoFinal(preco:number, desconto: number, formato: boolean): number | string {
    const precoComDesconto = preco * (1 - desconto)

    return formato ? `R$ ${precoComDesconto}` : precoComDesconto
}

// const descontoFinal = exibirPrecoFinal(100, 0.05, true) as string

const descontoFinal = <number>exibirPrecoFinal(100, 0.05, false)

console.log(descontoFinal);

// Exemplo 02 - Type Assertion ('as' / '<>')

// type Humano = {
//     nome: string
//     idade: number
//     idioma: string
// }

// const humano = {
//     idade: 36,
//     idioma: 'português'
// }

// const humano_02 = humano as Humano

// console.log(humano_02.nome.toUpperCase());

type Humano = {
    nome: string
    idade: number
    idioma: string
}

const humano = {
    idade: 36,
    idioma: 'português'
}

const humano_02: Humano = humano // type anotation

console.log(humano_02.nome.toUpperCase());

// INTERSECTION: cria um novo tipo combinando varios tipos existentes. e o novo tipo possio todas as características entre tipos existentes que foram usados. (obrigatório usar tudo dos tipos usados para criar a intersection)

// para combinar os tipos usa-se o operado "&" (and)... usar de um E do outro.

// UNION: cria um novo tipo combinando varios tipos existentes. e o novo tipo possio todas as características dos tipos existentes que foram usados. (Não é obrigado a usar tudo dos tipos usados)

// para unir os tipos usa-se o operador "|" (ou)

export {};

// Exemplo - Intersection Types
interface DadosBancarios {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente {
    nome: string;
    email: string;
}

interface DadosPessoaFisica {
    cpf: number;
}

type DadosCliente = DadosBancarios & Cliente & DadosPessoaFisica;

const dadosCliente: DadosCliente = {
    conta: 123456,
    agencia: 123,
    banco: 'banco do brasil',
    nome: 'glaucia',
    email: 'glaucia@gmail.com',
    cpf: 1234567890
}

console.log(dadosCliente);



// Exemplo - Union Types
interface DadosBancarios2 {
    conta: number;
    agencia: number;
    banco: string;
}

interface Cliente2 {
    nome: string;
    email: string;
}

interface DadosPessoaFisica2 {
    cpf: number;
}

type DadosCliente2 = DadosBancarios2 | Cliente2 | DadosPessoaFisica2;

const dadosCliente2: DadosCliente2 = {
    conta: 123456,
    agencia: 123,
    banco: 'banco do brasil',
    // nome: 'glaucia',
    // email: 'glaucia@gmail.com',
    // cpf: 1234567890
}

console.log(dadosCliente2);
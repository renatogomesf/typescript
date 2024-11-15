// pega um modelo/type existente e transforma cada uma de suas propriedades num novo tipo.

// util quando um tipo precisa ser derivado e permanecer sincronizado com algum outro tipo.

// type MappedTypeName = { [K in UnionType]: ExistingType }; (faz um loop "for in" num tipo desejado mudando suas propriedades)

export {};

// Exemplo 01 - Mapped Types

type Usuario = {
    nome: string;
    endereco: string;
    telefone: string;
    idade: number;
};

type UsuarioOpcional = {
    nome?: string;
    endereco?: string;
    telefone?: string;
    idade?: number;
};

type UsuarioSomenteLeitura = {
    readonly nome: string;
    readonly endereco: string;
    readonly telefone: string;
    readonly idade: number;
};

// { [P in K]: T }

type UsuarioMappedType = {
    [P in keyof Usuario]?: Usuario[P];
};

const usuarioMapped: UsuarioMappedType = {
    nome: 'glaucia',
    endereco: 'rua 01, 123',
};

console.log(usuarioMapped);

// Exemplo 02 - Outros Tipos Avançados

interface Livro {
    titulo: string;
    autor: string | null;
    preco: number;
    numeroPaginas: number;
}

type Artigo = Omit<Livro, 'numeroPaginas'>; // esta omitindo a propriedade "numeroPaginas" da interface "livro".


type LivroModelo = Readonly<Livro> // muda todas as propriedaes da interface "livro" para readonly

const livro: LivroModelo = {
    autor: 'Boris Cherny',
    numeroPaginas: 324,
    preco: 19.99,
    titulo: 'Progamming Typescript: Making Your JavaScript Applications Scale'
}

// livro.autor = (erro)
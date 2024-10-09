// torna uma propriedade somente de leitura, só podem ser acessados fora da classe, seu valor não pode ser auterado fora da classe.

// precisam ser inicializados dentro da classe através do construtor para ter acesso. com isso, se torna possível mudar o valor da propriedade quando instancia a classe.

export {};

// Exemplo 01 -
class Funcionario {
    readonly dataNascimento: Date;

    constructor(dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const funcionario = new Funcionario(new Date(1986, 10, 24));
console.log(funcionario);

// funcionario.dataNascimento = new Date(1986,10,24)

// Exemplo 02 -
class Funcionario_01 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

// Exemplo 03 -
class Funcionario_02 {
    nome: string;
    readonly codigoFuncionario: number;

    constructor(nome: string, codigo: number) {
        this.codigoFuncionario = codigo;
        this.nome = nome;
    }
}

const func = new Funcionario_02('glaucia', 1234);

func.nome = 'renato';
// func.codigoFuncionario = 4141

console.log(func);

// Exemplo 04 - Interface

interface IFuncionario {
    codigoFuncionario: number;
    nomeFuncionario: string;
}

const funcionario_01: Readonly<IFuncionario> = {
    codigoFuncionario: 1947,
    nomeFuncionario: 'jurema',
};

// funcionario_01.codigoFuncionario = 29478 (ERRO)
// funcionario_01.nomeFuncionario = 'renato' (ERRO)

const funcionario_02: IFuncionario = {
    codigoFuncionario: 1947,
    nomeFuncionario: 'jurema',
};

funcionario_02.codigoFuncionario = 29478;
funcionario_02.nomeFuncionario = 'renato';

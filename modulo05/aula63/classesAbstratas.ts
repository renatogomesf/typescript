// não pode ser instanciada... para acessar a classe é necessário extender ela.

// projetada para ser derivada / fornecer um conjunto de funcionalidades ou propriedades

// permite a reutilização de código entre grupos de objetos semelhantes

export {};

abstract class Funcionario {
    constructor(private nome: string, private sobrenome: string) {}

    abstract retornarSalário(): number;

    get retornarNomeCompleto(): string {
        return `${this.nome} ${this.sobrenome}`;
    }

    emitirContraCheque(): string {
        return `${this.retornarNomeCompleto} - Salário: ${this.retornarSalário()}`;
    }
}

class FuncionarioCLT extends Funcionario {
    constructor(nome: string, sobrenome: string, private salario: number) {
        super(nome, sobrenome);
    }

    retornarSalário(): number {
        return this.salario;
    }
}

class FuncionarioPJ extends Funcionario {
    constructor(
        nome: string,
        sobrenome: string,
        private valorHora: number,
        private horasTrabalhadas: number,
    ) {
        super(nome, sobrenome);
    }

    retornarSalário(): number {
        return this.valorHora * this.horasTrabalhadas;
    }
}

const glaucia = new FuncionarioCLT('Glaucia', 'Lemos', 18000);

const renato = new FuncionarioPJ('Renato', 'Gomes', 150, 160);

console.log(glaucia.emitirContraCheque());
console.log(renato.emitirContraCheque());

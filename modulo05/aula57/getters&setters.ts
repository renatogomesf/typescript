// uma maneira de fornecer acesso as propriedades de um objeto.

export {};

// Exemplo 01 - Get
class Quadrado {
    private largura = 6;
    private altura = 12;

    get calcularQuadrado() {
        return this.altura * this.largura;
    }
}

console.log(new Quadrado().calcularQuadrado);

// Exemplo 02 - Set
class Pessoa {
    nome: string;

    retornarNomePessoa(setNomePessoa: string) {
        this.nome = setNomePessoa;
    }
}

const pessoa = new Pessoa();
pessoa.retornarNomePessoa('glaucia');
console.log(`Nome: ${pessoa.nome}`);

// Exemplo 03 - Get [explicação mais densa]
class Estudante {
    private nome = 'Glaucia Lemos';
    private semestre: number;
    private curso: string;

    public get nomeEstudante() {
        return this.nome;
    }
}

const estudante = new Estudante();

const resultado = estudante.nomeEstudante;
console.log(resultado);

// Exemplo 04 - Set/Get [explicação mais densa]
class Estudante_01 {
    nome: string;
    semestre: number;
    private curso: string;

    constructor(
        nomeEstudante: string,
        semestreEstudante: number,
        cursoEstudante: string,
    ) {
        this.nome = nomeEstudante;
        this.semestre = semestreEstudante;
        this.curso = cursoEstudante;
    }

    public get getCursos() {
        return this.curso;
    }

    public set setCursos(setCurso: string) {
        this.curso = setCurso;
    }
}

const estudante_01 = new Estudante_01('Glaucia', 5, 'Sistemas da Informação')

console.log(estudante_01);

// Setter
estudante_01.setCursos = 'Analise e Desenvolvimento de Sistemas'

// Getter
console.log(`Curso atualizado: ${estudante_01.getCursos}`);

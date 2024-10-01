// permite representar um número indefido de argumentos como um array.

// não restringe o número de valores recebidos.
// todos os valores devem ser do mesmo tipo.
// parâmetros rest deve possuir 3 pontos (...rest: tipo)

// Exemplo 01 -
function somarNumeros(...numeros: number[]): number {
    let total = 0;
    numeros.map((numero) => {
        total += numero;
    });

    return total;
}

console.log(somarNumeros(30, 50));
console.log(somarNumeros(30, 50, 70, 30, 20));

// Exemplo 02 -
const listarFrutas = (frase: string, ...frutas: string[]) => {
    return `${frase} ${frutas.join(', ')}`;
    // ".join('o que deseja acrescentar')": acrescenta algo que estiver definido dentro de parênteses... neste caso, adiciona vírgura e espaço em branco.
};

console.log(listarFrutas('Eu preciso comprar', 'maçã', 'banana', 'mamão'));

// Exemplo 03 -
class Produtos {
    public exibirProdutos(...produtos: string[]): void {
        for (const produto of produtos) {
            console.log(produto);
        }
    }
}

const departamentoInformatica: Produtos = new Produtos();

console.log('Produtos de informática disponíveis: ');

departamentoInformatica.exibirProdutos(
    'mouse',
    'notebook',
    'usb',
    'teclado',
    'webcam',
);

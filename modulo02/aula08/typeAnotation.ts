// Variáveis
let nome: string = "renato";
console.log(nome);

// Arrays
let animais: string[] = ["elefante", "cachorro", "gato"];
console.log(animais);

// Objetos
let carro: {
  nome: string;
  ano: number;
  preco: number;
};

carro = { nome: "toyota", ano: 2019, preco: 80000 };
console.log(carro);

// Functions
function multiplicarNumeros(num1: number, num2: number) {
  return num1 * num2;
}

console.log(multiplicarNumeros(2, 5));

// igual ao js

// Exemplo - 01: loop for
for (let i = 0; i < 10; i++) {
  //   console.log(i);
}

// Exemplo - 02: for ...of (retorna um coleção de matriz, lista ou tupla)
const arrayNumeros: number[] = [10, 20, 30, 40, 50];

for (const i of arrayNumeros) {
  //   console.log(i);
}

// Exemplo - 03: for ...in (retorna um coleção de matriz, lista ou tupla)
const arrayNumeros01: number[] = [5, 4, 3, 2, 1, 0];

for (const i in arrayNumeros01) {
  console.log(i);
}

// sort()

const ordemNumerica: number[] = arrayNumeros01.sort();
console.log(ordemNumerica);

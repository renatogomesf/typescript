// igual ao js

// Exemplo 01 - while
let contadorr: number = 0;

while (contadorr < 5) {
  console.log(contadorr);
  contadorr++;
}

// Exemplo 02 -
let numero: number = 1;

while (numero <= 20) {
  if (numero % 5 == 0) {
    console.log(`o primeiro número múltiplo de 5 entre 1 a 20 é...: ${numero}`);
    break;
  }
  numero++;
}

// Exemplo 03 - exemplo mais prático
let contadorUsuario: number = 0;

const usuarioo: string[] = ['glaucia', 'jurema', 'prince'];

while (usuarioo[contadorUsuario]) {
  console.log(`usuários...: ${usuarioo[contadorUsuario]}`);
  contadorUsuario++;
}

// Exemplo 04 - do ...while
let contadorr01: number = 0;

do {
  console.log(contadorr01);
  contadorr01++;
} while (contadorr01 < 5);

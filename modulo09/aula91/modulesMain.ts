// pode conter declarações e códigos

// executa dentro do seu próprio escopo/arquivo

// eles não são visíveis fora do módulo. é preciso exportar (usando "export") e importar (usando "import") dentro do arquivo desejado.

import { somar, subtrair, multiplicar, dividir } from '../mathExemplo.ts/math';
import { ZipCodeValidator } from '../validator';
import { EmailValidator } from '../validator/validator';

// Exemplo 01

console.log(somar(10, 20));
console.log(subtrair(10, 20));
console.log(multiplicar(10, 20));
console.log(dividir(10, 20));

// Exemplo 02

let email = 'glaucia.lemos@email.com';
// let email = 'bbadvsdnpÑFJBSJDB';
let validator = new EmailValidator();
let result = validator.isValid(email);

console.log(`o e-mail ${email} é valido? ${result}`);

// Exemplo 03

let validator2 = new ZipCodeValidator
let result2 = validator2.isValid('12345')

console.log(`o cep 12345 é válido? ${result2}`);

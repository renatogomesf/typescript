//Boolean (com "B" maiúsculo refere-se ao tipo object) é diferente de boolean (com "b" minúsculo refere-se ao tipo primitivo (true e false)).

// Exemplo 01
let terefaConcluida: boolean = true;
let terefaPendente: boolean = false;

console.log(terefaConcluida);
console.log(terefaPendente);

// Exemplo 02
let concluido: boolean = false

if(!concluido){
    console.log('tarefa concluida com sucesso')
}else{
    console.log('tarefa pendente')
}
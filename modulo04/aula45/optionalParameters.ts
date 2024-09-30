// para tornar um parâmetro opcional, precisa adicionar o sinal de interrogração (?)
// parâmetros obrigatórios devem vir no início... já os opcionais, devem vir no final.

// Exemplo 01 - Optional parameter
function informarDadosPessoas(
  idPessoa: number,
  nome: string,
  email?: string,
): void {
  console.log(
    `Id Funcionário: ${idPessoa}, Nome: ${nome}${
      email ? `, E-mail: ${email}` : ''
    }`,
  );
}

informarDadosPessoas(1, 'renato', 'renato@gmail.com');
informarDadosPessoas(2, 'karen');

// Exemplo 02 -
function mensagemLog(mensagem: string, usuarioId?: number) {
  const horaLog = new Date().toLocaleTimeString();

  console.log(horaLog, mensagem, usuarioId || 'Usuário(a) não conectado(a)');
}

mensagemLog('Atualizar página');
mensagemLog('Usuário logado com sucesso', 9856);

// Exemplo 03 -
type Pessoa = {
  idFuncionario: number;
  nome: string;
  idade?: number;
  email?: string;
};

let pessoaa: Pessoa; //a variável 'pessoa' adiquire todas as propriedades dentro do type 'Pessoa'.

pessoaa = {
  idFuncionario: 1232,
  nome: 'Renato Gomes',
};

console.log(pessoaa);

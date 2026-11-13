var database = require("../database/config");

function buscarPorUser(user_name) {
  var instrucaoSql = `SELECT user_name FROM cadastro_usuario WHERE user_name = '${user_name}'`;

  return database.executar(instrucaoSql);
}

function listar() {
  var instrucaoSql = `SELECT id, user_name FROM cadastro_usuario`;

  return database.executar(instrucaoSql);
}


function cadastrar(pontuacao, certas, erradas, dificuldade, id_usuario) {
  var instrucaoSql = `INSERT INTO quiz (pontuacao_final, acertos, erros, dificuldade, fk_usuario_quiz) 
  VALUES ('${pontuacao}', '${certas}', '${erradas}', '${dificuldade}', '${id_usuario}')`;

  return database.executar(instrucaoSql);
}

module.exports = {buscarPorUser, listar, cadastrar};

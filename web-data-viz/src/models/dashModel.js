var database = require("../database/config");

function buscarConhecimento() {
  var instrucaoSql = `SELECT 
                        tatica AS nivel_conhecimento, 
                        COUNT(id) AS qtd_usuarios 
                        FROM cadastro_usuario 
                        GROUP BY tatica 
                        ORDER BY tatica ASC;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarInfoQuiz() {
  var instrucaoSql = `select c.nome, q.acertos from quiz as q
                        join cadastro_usuario as c on c.id = q.fk_usuario_quiz
                        order by q.acertos desc
                        limit 5;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarSugestoes() {
  var instrucaoSql = `SELECT  tipo_sugestao, 
                        COUNT(id) AS total 
                        FROM sugestoes 
                        GROUP BY tipo_sugestao;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarMedias() {
  var instrucaoSql = `select round(avg(cadastro_usuario.conhecimento), 1) as media_conhecimento, round(avg(cadastro_usuario.tatica), 1) as media_tatica, 
                      round(avg(quiz.acertos), 1) as media_acerto_quiz from cadastro_usuario
                      join quiz on quiz.fk_usuario_quiz = cadastro_usuario.id;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTimes() {
  var instrucaoSql = `select time, qtd_times_escolhidos from vw_times_escolhidos`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  buscarSugestoes,
  buscarConhecimento,
  buscarInfoQuiz,
  buscarMedias,
  buscarTimes
};

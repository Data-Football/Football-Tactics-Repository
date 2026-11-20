var database = require("../database/config");

function buscarConhecimento() {
  var instrucaoSql = `select 
                      tatica AS nivel_conhecimento, 
                      COUNT(id) AS qtd_usuarios 
                      from cadastro_usuario 
                      where cadastro_usuario.id > 1
                      group by tatica 
                      order by tatica asc;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarInfoQuiz() {
  var instrucaoSql = `select c.id, c.user_name, max(q.acertos) as acertos from quiz as q
                      right join cadastro_usuario as c on c.id = q.fk_usuario_quiz
                      where c.id > 1
                      group by c.id, c.user_name
                      order by acertos desc 
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
  var instrucaoSql = `select media_conhecimento, media_tatica, media_acerto_quiz from vw_media_usuarios;`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

function buscarTimes() {
  var instrucaoSql = `select time, qtd_times_escolhidos from vw_times_escolhidos
                      order by qtd_times_escolhidos desc limit 5;`;

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

var database = require("../database/config");

function cadastrar(descricao, idUsuario, assunto, tipo) {
  
  var instrucaoSql = `INSERT INTO sugestoes (descricao, tipo_sugestao, fk_usuario_sugestao, assunto) 
  VALUES (?, ?, ?, ?)`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql, valores = [descricao, tipo, idUsuario, assunto]);
}

module.exports = {
  cadastrar
}

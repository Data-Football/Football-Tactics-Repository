var database = require("../database/config");

function cadastrar(descricao, idUsuario, assunto, tipo) {
  
  var instrucaoSql = `INSERT INTO sugestoes (descricao, tipo_sugestao, fk_usuario_sugestao, assunto) 
  VALUES ('${descricao}', '${tipo}', '${idUsuario}', '${assunto}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}

module.exports = {
  cadastrar
}

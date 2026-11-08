var database = require("../database/config");

// function buscarAquariosPorEmpresa(empresaId) {

//   var instrucaoSql = `SELECT * FROM aquario a WHERE fk_empresa = ${empresaId}`;

//   console.log("Executando a instrução SQL: \n" + instrucaoSql);
//   return database.executar(instrucaoSql);
// }

function cadastrar(descricao, idUsuario, assunto, tipo) {
  
  var instrucaoSql = `INSERT INTO sugestoes (descricao, tipo_sugestao, fk_usuario_sugestao, assunto) 
  VALUES ('${descricao}', '${tipo}', '${idUsuario}', '${assunto}')`;

  console.log("Executando a instrução SQL: \n" + instrucaoSql);
  return database.executar(instrucaoSql);
}


module.exports = {
  cadastrar
}

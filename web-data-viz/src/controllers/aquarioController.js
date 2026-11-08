var aquarioModel = require("../models/aquarioModel");

// function buscarAquariosPorEmpresa(req, res) {
//   var idUsuario = req.params.idUsuario;

//   aquarioModel.buscarAquariosPorEmpresa(idUsuario).then((resultado) => {
//     if (resultado.length > 0) {
//       res.status(200).json(resultado);
//     } else {
//       res.status(204).json([]);
//     }
//   }).catch(function (erro) {
//     console.log(erro);
//     console.log("Houve um erro ao buscar os aquarios: ", erro.sqlMessage);
//     res.status(500).json(erro.sqlMessage);
//   });
// }


function cadastrar(req, res) {
  var descricao = req.body.Descricao;
  var idUsuario = req.body.Id;
  var assunto = req.body.Assunto;
  var tipo = req.body.Tipo;

  if (descricao == undefined) {
    res.status(400).send("descricao está undefined!");
  } else if (idUsuario == undefined) {
    res.status(400).send("idUsuario está undefined!");
  } else if (assunto == undefined) {
    res.status(400).send("assunto está undefined!");
  } else if (tipo == undefined) {
    res.status(400).send("tipo está undefined!");
  } else {


    aquarioModel.cadastrar(descricao, idUsuario, assunto, tipo)
      .then((resultado) => {
        res.status(201).json(resultado);
      }
      ).catch((erro) => {
        console.log(erro);
        console.log(
          "\nHouve um erro ao realizar o cadastro! Erro: ",
          erro.sqlMessage
        );
        res.status(500).json(erro.sqlMessage);
      });
  }
}

module.exports = {
  cadastrar
}
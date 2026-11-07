var empresaModel = require("../models/empresaModel");

// function listarQuiz(req, res) {
//   empresaModel.listarQuiz().then((resultado) => {
//     res.status(200).json(resultado);
//   });
// }

function listar(req, res) {
  empresaModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorUser(req, res) {
  var user_name = req.params.user_name;

  empresaModel.buscarPorUser(user_name).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var pontuacao = req.body.pontuacao;
  var certas = req.body.certas;
  var erradas = req.body.erradas;
  var dificuldade = req.body.dificuldade_quiz
  var id_usuario = req.body.id

      empresaModel.cadastrar(pontuacao, certas, erradas, dificuldade, id_usuario).then((resultado) => {
        res.status(201).json(resultado);
      });
}

module.exports = {
  buscarPorUser,
  listar,
  cadastrar
};

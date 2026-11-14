var quizModel = require("../models/quizModel");

function listar(req, res) {
  quizModel.listar().then((resultado) => {
    res.status(200).json(resultado);
  });
}

function buscarPorUser(req, res) {
  var user_name = req.params.user_name;

  quizModel.buscarPorUser(user_name).then((resultado) => {
    res.status(200).json(resultado);
  });
}

function cadastrar(req, res) {
  var pontuacao = req.body.Pontuacao;
  var certas = req.body.Certas;
  var erradas = req.body.Erradas;
  var dificuldade = req.body.Dificuldade;
  var id_usuario = req.body.Id

      quizModel.cadastrar(pontuacao, certas, erradas, dificuldade, id_usuario).then((resultado) => {
        res.status(201).json(resultado);
      });
}

module.exports = {
  buscarPorUser,
  listar,
  cadastrar
};

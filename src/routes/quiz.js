var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

// Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
})

router.get("/buscar/:user_name", function (req, res) {
  quizController.buscarPorUser(req, res);
});

router.get("/listar", function (req, res) {
  quizController.listar(req, res);
});

module.exports = router;
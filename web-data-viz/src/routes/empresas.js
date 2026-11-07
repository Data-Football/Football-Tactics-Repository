var express = require("express");
var router = express.Router();

var empresaController = require("../controllers/empresaController");

// Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    empresaController.cadastrar(req, res);
})

// router.get("/listarQuiz", function (req, res) {
//   empresaController.listarQuiz(req, res);
// });

router.get("/buscar/:user_name", function (req, res) {
  empresaController.buscarPorUser(req, res);
});

router.get("/listar", function (req, res) {
  empresaController.listar(req, res);
});

module.exports = router;
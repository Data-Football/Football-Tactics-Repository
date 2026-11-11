var express = require("express");
var router = express.Router();

var medidaController = require("../controllers/medidaController");

router.get("/ultimas/dados", function (req, res) {
    medidaController.buscarInfoQuiz(req, res);
});

router.get("/ultimas/conhecimento", function (req, res) {
    medidaController.buscarConhecimento(req, res);
});

router.get("/ultimas/sugestoes", function (req, res) {
    medidaController.buscarSugestoes(req, res);
})

module.exports = router;
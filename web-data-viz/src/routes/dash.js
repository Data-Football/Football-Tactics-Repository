var express = require("express");
var router = express.Router();

var dashController = require("../controllers/dashController");

router.get("/ultimas/dados", function (req, res) {
    dashController.buscarInfoQuiz(req, res);
});

router.get("/ultimas/conhecimento", function (req, res) {
    dashController.buscarConhecimento(req, res);
});

router.get("/ultimas/sugestoes", function (req, res) {
    dashController.buscarSugestoes(req, res);
})

router.get("/ultimas/medias", function (req, res) {
    dashController.buscarMedias(req, res);
})

router.get("/ultimas/times", function (req, res) {
    dashController.buscarTimes(req, res);
})

module.exports = router;
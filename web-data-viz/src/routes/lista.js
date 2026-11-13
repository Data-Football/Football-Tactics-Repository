var express = require("express");
var router = express.Router();

var listaController = require("../controllers/listaController");

router.get("/listar", function (req, res) {
    listaController.listar(req, res);
});


module.exports = router;
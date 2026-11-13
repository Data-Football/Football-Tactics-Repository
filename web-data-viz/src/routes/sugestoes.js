var express = require("express");
var router = express.Router();

var sugestaoController = require("../controllers/sugestaoController");


router.post("/cadastrar", function (req, res) {
  sugestaoController.cadastrar(req, res);
})

module.exports = router;
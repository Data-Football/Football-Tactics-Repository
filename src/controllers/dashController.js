var dashModel = require("../models/dashModel");

function buscarInfoQuiz(req, res) {

    // const limite_linhas = 5;

    var nome = req.params.nome;
    var qtd_acertos = req.params.qtd_acertos;
    var erros = req.params.erros;
    var acertos = req.params.acertos;

    // console.log(`Recuperando as ultimas ${limite_linhas} informações`);

    dashModel.buscarInfoQuiz(nome, qtd_acertos, erros, acertos).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarConhecimento(req, res) {

    // const limite_linhas = 5;

    var nivel_conhecimento = req.params.nivel_conhecimento;
    var qtd_usuarios = req.params.qtd_usuarios

    // console.log(`Recuperando as ultimas ${limite_linhas} informações`);

    dashModel.buscarConhecimento(qtd_usuarios, nivel_conhecimento).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarSugestoes(req, res) {

    var tipo_sugestao = req.params.tipo_sugestao;
    var total = req.params.total;

    console.log(`Recuperando medidas em tempo real`);

    dashModel.buscarSugestoes(tipo_sugestao, total).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarMedias(req, res) {

    var media_conhecimento = req.params.media_conhecimento;
    var media_tatica = req.params.media_tatica;
    var media_acerto_quiz = req.params.media_acerto_quiz

    console.log(`Recuperando medidas em tempo real`);

    dashModel.buscarMedias(media_acerto_quiz, media_conhecimento, media_tatica).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function buscarTimes(req, res) {

    var time = req.params.time;
    var qtd_times_escolhidos = req.params.qtd_times_escolhidos;

    console.log(`Recuperando medidas em tempo real`);

    dashModel.buscarTimes(time, qtd_times_escolhidos).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!")
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    buscarSugestoes,
    buscarConhecimento,
    buscarInfoQuiz,
    buscarMedias,
    buscarTimes
}
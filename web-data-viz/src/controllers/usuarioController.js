var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var user_name = req.body.User;
    var senha = req.body.Senha;

    if (user_name == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(user_name, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);
                    usuarioModel.autenticar(
                        resultadoAutenticar[0].user_name,
                        resultadoAutenticar[0].senha 
                    )
                    .then((resultadoCadastro) => {
                                if (resultadoCadastro.length > 0) {
                                    res.json({
                                        Autenticacao: resultadoCadastro,
                                        Senha: resultadoAutenticar[0].senha,
                                        User: resultadoAutenticar[0].user_name,
                                        Id: resultadoAutenticar[0].id
                                    });
                                } else {
                                    res.status(204).json({ Autenticacao: [] });
                                }
                            })      
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Usuário e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

}

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var nome = req.body.Nome;
    var email = req.body.Email;
    var senha = req.body.Senha;
    var telefone = req.body.Telefone;
    var user_name = req.body.User;
    var conhecimento = req.body.Conhecimento;
    var time = req.body.Time;

    // Faça as validações dos valores
    if (nome == undefined) {
        res.status(400).send("Seu nome está undefined!");
    } else if (email == undefined) {
        res.status(400).send("Seu email está undefined!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está undefined!");
    } else if (telefone == undefined) {
        res.status(400).send("Seu telefone está undefined!");
    } else if (user_name == undefined) {
        res.status(400).send("Seu nome de usuário está undefined!");
    } else if (time == undefined) {
        res.status(400).send("Seu time está undefined!");
    } else if (conhecimento == undefined) {
        res.status(400).send("Seu time está undefined!");
    } else {

        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        usuarioModel.cadastrar(nome, email, senha, telefone, user_name, time, conhecimento)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
}

module.exports = {
    autenticar,
    cadastrar
}
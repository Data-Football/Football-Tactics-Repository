var database = require("../database/config")

var chave_senha = 'passwd_ft'

function autenticar(user_name, senha, id) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", user_name, senha)
    var instrucaoSql = `
        SELECT id, user_name, cast(aes_decrypt(senha, '${chave_senha}') as char) as senha 
        FROM cadastro_usuario WHERE user_name = '${user_name}' AND senha = aes_encrypt('${senha}', '${chave_senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, user_name, email, senha, tatica, conhecimento, fk_times) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha, user_name, conhecimento, tatica, fk_times);
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO cadastro_usuario (nome, user_name, email, senha, tatica, conhecimento, fk_times) 
        VALUES (?, ?, ?, AES_ENCRYPT(?, ?), ?, ?, ?);
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql, [nome, user_name, email, senha, chave_senha, tatica, conhecimento, fk_times]);
}

module.exports = {
    autenticar,
    cadastrar
};
// sessão
function validarSessao() {
    var senha = sessionStorage.SENHA;
    var user_name = sessionStorage.USER;
    var id = sessionStorage.IDUSUARIO;

    var User_name = document.getElementById("ipt_user_name");
    var Senha = document.getElementById("ipt_senha");

    if (User_name != null && Senha != null) {
        console.log('Usuário logado')
    } else {
        window.location = "./login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}

// carregamento (loading)
// function aguardar() {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "flex";
// }

// function finalizarAguardar(texto) {
//     var divAguardar = document.getElementById("div_aguardar");
//     divAguardar.style.display = "none";

//     var divErrosLogin = document.getElementById("div_erros_login");
//     if (texto) {
//         divErrosLogin.style.display = "flex";
//         divErrosLogin.innerHTML = texto;
//     }
// }


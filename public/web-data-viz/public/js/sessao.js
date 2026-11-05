// sessão
function validarSessao() {
    var senha = sessionStorage.Senha;
    var user_name = sessionStorage.User;

    var ipt_user_name = document.getElementById("ipt_user_name");
    var ipt_senha = document.getElementById("ipt_senha");

    if (ipt_user_name != null && ipt_senha != null) {
        div_user.innerHTML = user_name;
    } else {
        window.location = "../login.html";
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


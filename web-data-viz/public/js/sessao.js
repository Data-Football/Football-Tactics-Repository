// sessão
function validarSessao() {
    var senha = sessionStorage.SENHA_USUARIO;
    var user_name = sessionStorage.USER_USUARIO;
    var id = sessionStorage.ID_USUARIO;
    var txt_botao = document.getElementById('msg_button')
    var botao = document.getElementById('button-paginas')

    if (user_name != null && senha != null) {
        console.log('Usuário logado')
        txt_botao.innerHTML = 'Sair da sessão'
        botao.onclick = limparSessao;
    } else {
        window.location = "./login.html";
        txt_botao.innerText = 'Login'
        botao.onclick = login()
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


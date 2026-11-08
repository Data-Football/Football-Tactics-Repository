// sessão
    function validarSessao() {
        var senha = sessionStorage.SENHA_USUARIO;
        var user_name = sessionStorage.USER_USUARIO;
        var id = sessionStorage.ID_USUARIO;
        var botao = document.getElementById('button_paginas')
        var pagina = window.location.pathname
        if (user_name != null && senha != null) {
            console.log('Usuário logado')
            botao.textContent = 'Sair da sessão'
            botao.onclick = limparSessao;
        } else {
            if (pagina.includes('quiz') || pagina.includes('sugestoes')) {
                window.location = "./login.html";
            } else {
                botao.textContent = 'Login'
                botao.onclick = login
            }
        }
    }

    function limparSessao() {
        location.reload()
        var botao = document.getElementById('button_paginas')
        var pagina = window.location.pathname
        sessionStorage.clear();
        if (pagina.includes('quiz') || pagina.includes('sugestoes')) {
                window.location = "./login.html";
                botao.textContent = 'Login'
                botao.onclick = login
        }
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


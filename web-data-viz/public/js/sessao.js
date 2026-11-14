// sessão
    function validarSessao() {
        var senha = sessionStorage.SENHA_USUARIO;
        var user_name = sessionStorage.USER_USUARIO;
        var id = sessionStorage.ID_USUARIO;
        var botao = document.getElementById('button_paginas')
        var pagina = window.location.pathname
        if (id != 1) {
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
        } else {
            console.log('Usuário Administrador Logado!')
            botao.textContent = 'Sair'
            botao.onclick = limparSessao;
        }
        
    }

    function limparSessao() {
        location.reload()
        var botao = document.getElementById('button_paginas')
        var pagina = window.location.pathname
        sessionStorage.clear();
        if (pagina.includes('quiz') || pagina.includes('sugestoes') || pagina.includes('dashboard')) {
                window.location = "./login.html";
                botao.textContent = 'Login'
                botao.onclick = login
        }
    }

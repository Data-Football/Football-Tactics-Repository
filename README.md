# ⚽ Football Tactics

![Status](https://img.shields.io/badge/Status-Em%20Desenvolvimento-00ff85?style=for-the-badge)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MySQL](https://img.shields.io/badge/MySQL-4479A1?style=for-the-badge&logo=mysql&logoColor=white)
![Chart.js](https://img.shields.io/badge/Chart.js-FF6384?style=for-the-badge&logo=chartdotjs&logoColor=white)

> **Projeto Individual de Pesquisa e Inovação (PI)** desenvolvido no 1º semestre do curso de Ciência da Computação na **São Paulo Tech School (SPTech)**.

---

## 📖 Sobre o Projeto

O **Football Tactics** é um portal web interativo dedicado à análise tática, evolução histórica e filosofia de jogo no futebol. O sistema foi concebido para unir conteúdo educacional aprofundado a uma plataforma dinâmica de engajamento e análise de dados.

A aplicação permite que entusiastas e estudiosos do esporte explorem diferentes sistemas táticos e treinadores lendários, testem seus conhecimentos em um quiz interativo, enviem sugestões para a evolução da plataforma e acompanhem métricas em tempo real por meio de uma dashboard analítica.

---

## ✨ Funcionalidades Principais

* **📚 Portal Educacional Tático:**
  * **Estilos de Jogo & Formações:** Análise detalhada de conceitos como *Jogo Posicional*, *Gegenpressing*, *Catenaccio*, *Jogo de Transição* e esquemas clássicos (`4-3-3`, `3-5-2`, `4-4-2`, `4-5-1`, `5-4-1`).
  * **Treinadores Históricos:** Estudo sobre o legado e as inovações de técnicos icônicos como Rinus Michels, Arrigo Sacchi, Sir Alex Ferguson e Pep Guardiola.
* **🔐 Sistema de Autenticação e Perfil:**
  * Cadastro completo com validação de campos, seleção do time do coração e autoavaliação de nível de conhecimento sobre futebol e tática (escala de 0 a 10).
  * Controle de sessão via `sessionStorage` protegendo as rotas interativas.
* **🧠 Quiz Tático Interativo:**
  * Questionário dinâmico sobre conceitos, formações e história tática do futebol, com registro de pontuação vinculado ao perfil do usuário no banco de dados.
* **💡 Central de Sugestões:**
  * Área para usuários autenticados enviarem feedbacks categorizados (*Novos Conteúdos/Táticas*, *Perguntas do Quiz*, *Melhorias no Site*, *Bugs e Erros* e *Elogios*).
* **📊 Dashboard Analítica (Chart.js):**
  * **KPIs em Tempo Real:** Média de conhecimento sobre futebol, média de conhecimento tático e taxa de acerto geral no quiz.
  * **Visualização de Dados:** Gráficos de barras (distribuição de nível tático e ranking Top Usuários), gráfico de rosca (categorias de sugestões mais recebidas) e tabelas de ranking.

---

## 🛠️ Tecnologias Utilizadas

* **Front-end:** HTML5, CSS3, JavaScript (ES6+), Chart.js
* **Back-end:** Node.js, Express.js
* **Banco de Dados:** MySQL
* **Governança e Versionamento:** Git & GitHub (Monorepo)

---

## 📂 Estrutura do Repositório

O projeto utiliza uma arquitetura **Monorepo**, onde o servidor Node.js hospeda diretamente os arquivos estáticos do front-end e expõe as rotas da API REST, evitando bloqueios de CORS:

```text
Football-Tactics-Repository/
│
├── web-data-viz/               # Aplicação principal (Servidor Express + Front-end)
│   ├── public/                 # Camada de Front-end (Arquivos Estáticos)
│   │   ├── assets/             # Imagens, logotipos e diagramas táticos
│   │   ├── css/                # Folhas de estilo (Identidade visual: #3d195d, #00ff85, #ffffff)
│   │   ├── js/                 # Scripts de controle de sessão e manipulação do DOM
│   │   ├── index.html          # Página inicial (Home)
│   │   ├── taticas.html        # Estilos de jogo e formações táticas
│   │   ├── tecnicos.html       # Treinadores históricos
│   │   ├── cadastro.html       # Formulário de cadastro de usuários
│   │   ├── login.html          # Tela de autenticação
│   │   ├── quiz.html           # Quiz interativo sobre táticas
│   │   ├── sugestoes.html      # Envio de feedbacks categorizados
│   │   └── dashboard.html      # Painel analítico com gráficos e KPIs
│   │
│   ├── src/                    # Camada de Back-end (Padrão MVC)
│   │   ├── controllers/        # Regras de negócio e tratamento de requisições/respostas
│   │   ├── database/           # Configuração de conexão e scripts SQL
│   │   ├── models/             # Execução das queries SQL no MySQL
│   │   └── routes/             # Definição dos endpoints da API
│   │
│   ├── app.js                  # Ponto de entrada do servidor Node.js
│   └── package.json            # Dependências e scripts do projeto
│
├── docs/                       # Documentação acadêmica (DER e Diário de Prompts)
├── .gitignore                  # Arquivos e pastas ignorados no versionamento
└── README.md                   # Documentação central do repositório
```

---

## 🚀 Como Executar o Projeto Localmente

### Pré-requisitos
* [Node.js](https://nodejs.org/) instalado na máquina.
* [MySQL Server](https://www.mysql.com/) (local ou em Máquina Virtual Linux) configurado.

### Passo a Passo

1. **Clone o repositório:**
   ```bash
   git clone https://github.com/Data-Football/Football-Tactics-Repository.git
   ```

2. **Configure o Banco de Dados:**
   * Execute o script SQL (localizado na pasta `database/` ou `docs/`) no seu MySQL para criar as tabelas (`cadastro_usuario`, `times`, `quiz`, `sugestoes`, etc.) e popular os dados iniciais.
   * Ajuste as credenciais de acesso ao banco no arquivo de configuração de ambiente (`src/database/config.js` ou `.env`).

3. **Acesse o diretório da aplicação e instale as dependências:**
   ```bash
   cd Football-Tactics-Repository/web-data-viz
   npm install
   ```

4. **Inicie o servidor:**
   ```bash
   npm start
   ```

5. **Acesse no navegador:**
   * Abra o navegador e acesse `http://localhost:3333/index.html` (ou a porta configurada no seu terminal).

---

## 🎨 Identidade Visual

A interface foi projetada com foco em contraste e legibilidade para análises esportivas:
* **Cor Primária (Fundo/Header):** `#3d195d` (Roxo Profundo)
* **Cor de Destaque (Ações/Gráficos):** `#00ff85` (Verde Neon)
* **Cor Base (Cards/Textos):** `#ffffff` (Branco)

---

## 👨‍💻 Autor

Desenvolvido por **João F. Cunha** — Estudante de Ciência da Computação na **São Paulo Tech School (SPTech)**.
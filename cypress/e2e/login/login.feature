# language: pt
Funcionalidade: Login no sistema
    Como um usuário registrado
    Eu quero fazer login no sistema
    Para acessar minhas funcionalidades personalizadas

    Cenário: Login com credenciais válidas
        Dado que o usuário está na página de login
        Quando insere um nome de usuário válido
        E insere uma senha válida
        E clica no botão de login
        Então deve ser redirecionado para a página inicial
        E deve ver uma mensagem de boas-vindas
    
    Cenario: Login com credenciais inválidas
        Dado que o usuário está na página de login
        Quando insere um nome de usuário inválido
        E insere uma senha inválida
        E clica no botão de login
        Então deve ver uma mensagem de erro
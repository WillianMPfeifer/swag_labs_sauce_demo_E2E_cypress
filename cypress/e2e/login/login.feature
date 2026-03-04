# language: pt
Funcionalidade: Login no sistema
    Como um usuário registrado
    Irá fazer login no sistema
    Para acessar minhas funcionalidades personalizadas

    Cenário: Login com credenciais de login válidas
        Dado que o usuário está na página de login
        Quando insere as credenciais de login:
            | Nome          | Senha             |
            | standard_user | secret_sauce      |
        E clica no botão de login
        Então deve ser redirecionado para a página inicial
    
    Cenario: Login com senha inválida
        Dado que o usuário está na página de login
        Quando insere as credenciais de login:
            | Nome          | Senha          |
            | standard_user | _teste01_      |
        E clica no botão de login
        Então deve ver uma mensagem de erro

    Cenario: Login com usuário inválido
        Dado que o usuário está na página de login       
        Quando insere as credenciais de login:
            | Nome          | Senha             |
            | Teste         | secret_sauce      |
        E clica no botão de login
        Então deve ver uma mensagem de erro

    Cenario: Login com usuário e senha inválidos
        Dado que o usuário está na página de login
        Quando insere as credenciais de login:
            | Nome          | Senha          |
            | Teste         | _teste01_      |
        E clica no botão de login
        Então deve ver uma mensagem de erro

    Cenario: Login sem usuário mas com senha
        Dado que o usuário está na página de login
        Quando insere as credenciais de login:
            | Nome          | Senha          |
            | <vazio>       | secret_sauce   |
        E clica no botão de login
        Então deve ver uma mensagem de erro

    Cenario: Login com usuário mas sem senha
        Dado que o usuário está na página de login
        Quando insere as credenciais de login:
            | Nome          | Senha          |
            | standard_user | <vazio>        |
        E clica no botão de login
        Então deve ver uma mensagem de erro
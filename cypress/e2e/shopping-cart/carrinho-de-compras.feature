# language: pt

Funcionalidade: Adicionar e remover itens ao carrinho
    Como um usuário logado
    Irá adicionar e remover itens do carrinho
    Para finalizar ou não a compra

    Contexto:
        Dado que o usuário padrão logou no sistema

    Cenario: Adicionar itens no carrinho pela tela inicial
        Quando o usuário adicionar seguintes itens ao carrinho:
            | Item                               | Valor |
            | Sauce Labs Backpack                | 29.99 |
            | Sauce Labs Bike Light              | 9.99  |
            | Test.allTheThings() T-Shirt (Red)  | 15.99 |
            | Sauce Labs Fleece Jacket           | 49.99 |
        E acessar o carrinho
        Então irá ver os itens
        Quando ele voltar à página inicial
        E remover os itens do carrinho
        Então irá validar que os itens foram removidos

    Cenario: Adicionar itens no carrinho individualmente
        Quando clicar nos itens e adicionar ao carrinho:
            | Item                               | Valor |
            | Sauce Labs Backpack                | 29.99 |
            | Sauce Labs Bike Light              | 9.99  |
            | Test.allTheThings() T-Shirt (Red)  | 15.99 |
            | Sauce Labs Fleece Jacket           | 49.99 |
        E acessar o carrinho
        Então irá ver os itens
        Quando remover os itens do carrinho
        Então irá validar que os itens foram removidos
    







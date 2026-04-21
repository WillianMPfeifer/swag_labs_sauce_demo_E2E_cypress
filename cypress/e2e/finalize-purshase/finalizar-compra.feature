# language: pt

Funcionalidade: Finalizar compra
    Como um usuário logado
    Irá adicionar um item ao carrinho e finalizar a compra
    Para concluir o processo de checkout com sucesso

    Contexto:
        Dado que o usuário padrão logou no sistema

    Cenario: Finalizar compra com sucesso
        Quando o usuário adicionar o item "Sauce Labs Backpack" ao carrinho
        E acessar o carrinho
        E clicar em checkout
        E preencher as informações de entrega:
            | Nome  | Sobrenome | CEP   |
            | John  | Doe       | 12345 |
        E confirmar a compra
        Então deve ser redirecionado para a página inicial

    Cenario: Tentar finalizar compra sem preencher as informações de entrega
        Quando o usuário adicionar o item "Sauce Labs Backpack" ao carrinho
        E acessar o carrinho
        E clicar em checkout
        E tentar confirmar sem preencher as informações de entrega
        Então deve ver uma mensagem de erro no checkout

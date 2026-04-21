class FinalizePurchaseElements {

    /** Botão "Add to cart" do item Sauce Labs Backpack na página de inventário */
    addItemToCartButton() { return `button#add-to-cart-sauce-labs-backpack` }

    /** Ícone/link do carrinho de compras no header */
    shoppingCartLink() { return `#shopping_cart_container > a` }

    /** Botão "Checkout" na página do carrinho */
    checkoutButton() { return `#checkout` }

    /** Campo de primeiro nome no formulário de entrega (Checkout Step One) */
    firstNameInput() { return `#first-name` }

    /** Campo de sobrenome no formulário de entrega (Checkout Step One) */
    lastNameInput() { return `#last-name` }

    /** Campo de código postal/CEP no formulário de entrega (Checkout Step One) */
    postalCodeInput() { return `#postal-code` }

    /** Botão "Cancel" no formulário de entrega */
    cancelButton() { return `#cancel` }

    /** Botão "Continue" para avançar após preencher os dados */
    continueButton() { return `#continue` }

    /** Botão "Finish" na página de revisão do pedido (Checkout Step Two) */
    finishButton() { return `#finish` }

    /** Botão "Back Home" na página de confirmação do pedido */
    backToProductsButton() { return `#back-to-products` }

    /** Mensagem de erro exibida no formulário de checkout */
    errorMessage() { return `#checkout_info_container > div > form > div.checkout_info > div.error-message-container.error` }
}

export default FinalizePurchaseElements
class ShoppingCartElements {

    /**
     * Converte o nome do item para o formato slug usado nos data-test do SauceDemo.
     * Ex: "Sauce Labs Backpack" → "sauce-labs-backpack"
     * Ex: "Test.allTheThings() T-Shirt (Red)" → "test.allthethings()-t-shirt-(red)"
     * @param {string} itemName - Nome do item como exibido na tela
     * @returns {string} Slug formatado
     */
    _toSlug(itemName) {
        return itemName.toLowerCase().replace(/\s+/g, '-');
    }

    /**
     * Botão "Add to cart" na página de inventário (home), específico por item.
     * @param {string} itemName - Nome do item
     * @returns {string} Seletor CSS
     */
    addHomePageItemToCartButton(itemName) {
        return `button[data-test="add-to-cart-${this._toSlug(itemName)}"]`;
    }

    /**
     * Botão "Add to cart" na página de detalhes do item.
     * Na detail page o SauceDemo usa data-test="add-to-cart" sem slug de nome.
     * @returns {string} Seletor CSS
     */
    addUniqueItemToCartButton() {
        return `button[data-test="add-to-cart"]`;
    }

    /**
     * Botão "Remove" para remover item do carrinho ou da home, específico por item.
     * @param {string} itemName - Nome do item
     * @returns {string} Seletor CSS
     */
    removeItemButton(itemName) {
        return `button[data-test="remove-${this._toSlug(itemName)}"]`;
    }

    /**
     * Link/título do item no inventário, filtrando pelo nome exato.
     * @param {string} itemName - Nome do item
     * @returns {string} Seletor CSS com :contains (suportado pelo Cypress/jQuery)
     */
    itemTitleButton(itemName) {
        return `.inventory_item_name:contains("${itemName}")`;
    }

    /** Botão de voltar para a listagem de produtos na página de detalhes */
    backToProductsButton() {
        return `button[data-test="back-to-products"]`;
    }

    /** Ícone/link do carrinho de compras no header */
    shoppingCartButton() {
        return `.shopping_cart_link`;
    }

    /** Badge com contagem de itens no ícone do carrinho */
    shoppingCartBadge() {
        return `.shopping_cart_badge`;
    }

    /** Botão "Continue Shopping" dentro da página do carrinho */
    continueShoppingButton() {
        return `button[data-test="continue-shopping"]`;
    }

    /** Container de cada item dentro da página do carrinho */
    cartItem() {
        return `.cart_item`;
    }

    /** Nome do item dentro do carrinho */
    cartItemName() {
        return `.inventory_item_name`;
    }

    /** Preço do item */
    itemValue() {
        return `.inventory_item_price`;
    }

    /** Quantidade do item no carrinho */
    itemQuantity() {
        return `.cart_quantity`;
    }

    /** Botão de filtro/ordenação na página de inventário */
    filterButton() {
        return `select[data-test="product-sort-container"]`;
    }

    /** Imagem/link de imagem do item no inventário */
    imageButton() {
        return `.inventory_item_img`;
    }

    /** Botão de abrir o menu lateral (hamburger) */
    lateralMenu() {
        return `#react-burger-menu-btn`;
    }
}

export default ShoppingCartElements
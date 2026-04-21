import FinalizePurchaseElements from '../../elements/finalize-purshase/finalize-purshase-elements'

const finalizeElem = new FinalizePurchaseElements()

class FinalizePurchasePage {

    /**
     * Adiciona o item Sauce Labs Backpack ao carrinho pela página de inventário.
     * O seletor é fixo pois o feature sempre usa este item específico.
     */
    addItemToCart() {
        cy.get(finalizeElem.addItemToCartButton()).click()
    }

    /** Clica no botão Checkout na página do carrinho */
    clickCheckout() {
        cy.get(finalizeElem.checkoutButton()).click()
    }

    /**
     * Preenche os dados de entrega e clica em Continue (Checkout Step One).
     * @param {string} firstName - Primeiro nome
     * @param {string} lastName - Sobrenome
     * @param {string} postalCode - Código postal / CEP
     */
    fillDeliveryInfo(firstName, lastName, postalCode) {
        cy.get(finalizeElem.firstNameInput()).clear().type(firstName)
        cy.get(finalizeElem.lastNameInput()).clear().type(lastName)
        cy.get(finalizeElem.postalCodeInput()).clear().type(postalCode)
        cy.get(finalizeElem.continueButton()).click()
    }

    /**
     * Confirma a compra clicando em Finish (Checkout Step Two)
     * e retorna à home clicando em Back Home (Order Complete page).
     */
    confirmPurchase() {
        cy.get(finalizeElem.finishButton()).click()
        cy.get(finalizeElem.backToProductsButton()).click()
    }

    /**
     * Tenta avançar no checkout sem preencher nenhum campo.
     * Usado no cenário de fluxo negativo.
     */
    clickContinueWithoutFilling() {
        cy.get(finalizeElem.continueButton()).click()
    }

    /** Valida que a mensagem de erro do checkout está visível */
    validateCheckoutError() {
        cy.get(finalizeElem.errorMessage()).should('be.visible')
    }
}

export default FinalizePurchasePage

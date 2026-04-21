import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import FinalizePurchasePage from '../../page-objects/finalize-purshase/finalize-purshasePOM'
import ShoppingCartPage from '../../page-objects/shopping-cart/shopping-cartPOM'

const finalizePurchase = new FinalizePurchasePage()
const shoppingCart = new ShoppingCartPage()

// Step exclusivo para adicionar item único (sem DataTable),
// diferente do step de carrinho que usa DataTable com múltiplos itens.
// O itemName é mantido no Gherkin para legibilidade, mas o seletor no elements é fixo.
When('o usuário adicionar o item {string} ao carrinho', () => {
    finalizePurchase.addItemToCart()
})

// "acessar o carrinho" já está definido em shopping-cartSteps.js — não redefina.

When('clicar em checkout', () => {
    finalizePurchase.clickCheckout()
})

When('preencher as informações de entrega:', (dataTable) => {
    const data = dataTable.hashes()[0]
    finalizePurchase.fillDeliveryInfo(data.Nome, data.Sobrenome, data.CEP)
})

When('confirmar a compra', () => {
    // Encapsula Finish + Back Home para que o Then
    // "deve ser redirecionado para a página inicial" (loginSteps) valide o título.
    finalizePurchase.confirmPurchase()
})

When('tentar confirmar sem preencher as informações de entrega', () => {
    finalizePurchase.clickContinueWithoutFilling()
})

// Nome diferente de "deve ver uma mensagem de erro" (loginSteps) para evitar step duplicado.
Then('deve ver uma mensagem de erro no checkout', () => {
    finalizePurchase.validateCheckoutError()
})

// "deve ser redirecionado para a página inicial" já está definido em loginSteps.js — não redefina.

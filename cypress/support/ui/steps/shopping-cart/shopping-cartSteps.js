import { When, Then } from '@badeball/cypress-cucumber-preprocessor'

import ShoppingCartPage from '../../page-objects/shopping-cart/shopping-cartPOM'
const shoppingCart = new ShoppingCartPage()

let expectedItems = []

When('o usuário adicionar seguintes itens ao carrinho:', (dataTable) => {
  // Reseta o array para garantir isolamento entre cenários
  expectedItems = dataTable.hashes()
  expectedItems.forEach(({ Item }) => shoppingCart.addItemFromInventory(Item))
})

When('acessar o carrinho', () => {
  shoppingCart.accessCart()
})

When('ele voltar à página inicial', () => {
  shoppingCart.continueShopping()
})

When('remover os itens do carrinho', () => {
  expectedItems.forEach(({ Item }) => shoppingCart.removeItem(Item))
})

When('clicar nos itens e adicionar ao carrinho:', (dataTable) => {
  const items = dataTable.hashes()
  // Reseta antes de popular — evita acúmulo do cenário anterior
  expectedItems = [...items]

  items.forEach(({ Item }) => {
    shoppingCart.openItemDetails(Item)
    shoppingCart.addItemFromDetails(Item)
    shoppingCart.backToProducts()
  })
})

Then('irá ver os itens', () => {
  expectedItems.forEach(({ Item, Valor }) => shoppingCart.validateItemInCart(Item, Valor))
})

Then('irá validar que os itens foram removidos', () => {
  shoppingCart.validateItemsWereRemoved()
})


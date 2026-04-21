import ShoppingCartElements from "../../elements/shopping-cart/shopping-cart-elements"
const shoppingCartElem = new ShoppingCartElements();

class ShoppingCartPage {
  /**
   * Adiciona um item ao carrinho diretamente pela página de inventário (home).
   * @param {string} itemName - Nome do item a ser adicionado
   */
  addItemFromInventory(itemName) {
    cy.get(shoppingCartElem.addHomePageItemToCartButton(itemName)).click()
  }

  openItemDetails(itemName) {
    cy.get(shoppingCartElem.itemTitleButton(itemName)).click()
  }

  addItemFromDetails(itemName) {
    cy.get(shoppingCartElem.addUniqueItemToCartButton(itemName)).click()
  }

  backToProducts() {
    cy.get(shoppingCartElem.backToProductsButton()).click()
  }

  accessCart() {
    cy.get(shoppingCartElem.shoppingCartButton()).click()
  }

  continueShopping() {
    cy.get(shoppingCartElem.continueShoppingButton()).click()
  }

  removeItem(itemName) {
    cy.get(shoppingCartElem.removeItemButton(itemName)).click()
  }

  validateItemInCart(itemName, itemValue) {
    cy.get(shoppingCartElem.cartItemName()).contains(itemName).should('be.visible')

    if (itemValue === undefined || String(itemValue).trim() === '') return

    cy.get(shoppingCartElem.cartItem())
      .contains(shoppingCartElem.cartItemName(), itemName)
      .parents(shoppingCartElem.cartItem())
      .find(shoppingCartElem.itemValue())
      .should('contain', String(itemValue).trim())
  }

  validateItemsWereRemoved() {
    cy.get('body').find(shoppingCartElem.shoppingCartBadge()).should('not.exist')

    this.accessCart()
    cy.get(shoppingCartElem.cartItem()).should('not.exist')
  }
}

export default ShoppingCartPage
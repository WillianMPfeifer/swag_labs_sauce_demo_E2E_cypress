import loginElements from '../../elements/login/login-elements' 
const login = new loginElements();

class LoginPage {
  accessLoginPage() {
    cy.visit('/')
    
    }

  typeUsername(Nome) {
    cy.get(login.usernameInput()).typeIfNotEmpty(Nome)

  }

  typePassword(Senha) {
    cy.get(login.passwordInput()).typeIfNotEmpty(Senha)

  }

  clickLoginButton() {
    cy.get(login.loginButton()).click()

  }

  validateErrorMessage() {
    cy.get(login.errorMessage()).should('be.visible')
      
  }

  validateInitialPageTittle() {
    cy.get(login.initialPageTittle()).should('be.visible')

  }
}

export default LoginPage;
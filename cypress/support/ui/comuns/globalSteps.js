import { Given } from '@badeball/cypress-cucumber-preprocessor';

import LoginPage from '../page-objects/login/loginPOM'
const loginPage = new LoginPage();

Given('que o usuário padrão logou no sistema', () => {
    const usuarios = Cypress.env('users');

    if (!usuarios || !usuarios.valid) {
        throw new Error('As credenciais do usuário válido não foram encontradas no cypress.env.json!');
    }

    const nome = usuarios.valid.user;
    const senha = usuarios.valid.password;

    loginPage.accessLoginPage();
    loginPage.typeUsername(nome);
    loginPage.typePassword(senha);
    loginPage.clickLoginButton();

    loginPage.validateInitialPageTittle(); 
});
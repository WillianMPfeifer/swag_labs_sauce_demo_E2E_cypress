import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../page-objects/login/loginPOM'
const login = new LoginPage();

Given('que o usuário está na página de login', () => {
    login.accessLoginPage();

});

When('insere as credenciais de login:', (dataTable) => {
        const data = dataTable.hashes();

            data.forEach(element => {
                login.typeUsername(element.Nome);
                login.typePassword(element.Senha);
            });
            
});


When('clica no botão de login', () => {
    login.clickLoginButton();


});

Then('deve ser redirecionado para a página inicial', () => {
    login.validateInitialPageTittle();


});

Then('deve ver uma mensagem de erro', () => {
    login.validateErrorMessage();


});
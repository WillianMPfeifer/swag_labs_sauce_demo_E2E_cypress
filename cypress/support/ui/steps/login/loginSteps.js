import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";

import LoginPage from '../../page-objects/login/loginPOM'
const login = new LoginPage();

Given('que o usuário está na página de login', () => {


});

When('insere um nome de usuário válido', (username) => {


});

When('insere um nome de usuário inválido', (username) => {

});

When('insere uma senha válida', (password) => {


});

When('insere uma senha inválida', (password) => {


});

When('clica no botão de login', () => {


});

Then('deve ser redirecionado para a página inicial', () => {


});

Then('deve ver uma mensagem de boas-vindas', (message) => {


});

Then('deve ver uma mensagem de erro', (message) => {


});
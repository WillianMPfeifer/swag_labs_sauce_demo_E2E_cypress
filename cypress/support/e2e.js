require('cypress-terminal-report/src/installLogsCollector')();

import 'cypress-plugin-api';
import './commands/commands'; 

/**
 * Tratamento de exceções não capturadas.
 * Mantemos como 'false' para evitar que erros de scripts de terceiros quebrem os testes,
 * mas o ideal é monitorar o que está sendo ignorado.
 */
Cypress.on("uncaught:exception", (err, runnable) => {
  // cy.log('⚠️ **Erro da aplicação detectado (ignorado):** ' + err.message);
  return false;
});

before(() => {
  cy.log("🚀 **Iniciando Suíte de Testes E2E**");
});

beforeEach(() => {
  cy.clearCookies();
  cy.clearLocalStorage();
  cy.log(`--- Iniciando cenário: **${Cypress.currentTest.title}** ---`);
});

afterEach(function () {
  const state = this.currentTest.state;
  const icon = state === 'passed' ? '✅' : '❌';
  const test = Cypress.currentTest;
  
  cy.log(`${icon} Finalizado cenário: **${this.currentTest.title}** com status: **${state.toUpperCase()}**`);

  if (state === 'failed') {
    cy.log("⚠️ Verifique o print e o vídeo na pasta de artefatos para mais detalhes.");

    const isLastAttempt = test.currentRetry === test.retries;

    if (isLastAttempt) {
      const screenshotName = `FALHA_FINAL-${Cypress.spec.name}-${test.title}`.replace(/[/\\?%*:|"<>]/g, '-');
      cy.screenshot(screenshotName, { capture: 'viewport' });
    }
  }
});

after(() => {
  cy.log("🏁 **Execução finalizada com sucesso!**");
});
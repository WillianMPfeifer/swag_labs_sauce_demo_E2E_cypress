Cypress.on('uncaught:exception', (err, runnable) => {

    return false
    })

Cypress.Commands.add('typeIfNotEmpty', { prevSubject: 'element' }, (subject, text) => {
    if (text !== undefined && text !== null && text !== '<vazio>') {
        cy.wrap(subject).clear().type(String(text)); 
    } else {
        cy.log('⏭️ Input ignorado propositalmente (vazio)');
    }
});

// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('clickLoginButton', () => {
    cy.get('button').contains('Login').click();
})

Cypress.Commands.add('enterUserCredentials', (username, password) => {
    cy.get('#UserName').type(username);
    cy.get('#Password').type(password);
})

Cypress.Commands.add('clickLogInButton', () => {
    cy.get('button').contains('Log in').click();
})

Cypress.Commands.add('selectPrincipalAmount', (principalAmount) => {
    cy.get('#customRange1').invoke('val', principalAmount).trigger('input').trigger('change');

})

Cypress.Commands.add('selectInterestAmount', (interestRate) => {
    cy.get('#dropdownMenuButton').click();
    cy.get(`input[id="rate-${interestRate}%"]`).click();
    cy.get(`label[for="rate-${interestRate}%"]`).click();
})

Cypress.Commands.add('selectDurationByName', (duration) => {
    cy.get('#durationList').contains(duration).click();
})

Cypress.Commands.add('checkConsentBox', () => {
    cy.get('#gridCheck1').check();
})

Cypress.Commands.add('uncheckConsentBox', () => {
    cy.get('#gridCheck1').uncheck();
})

Cypress.Commands.add('clickCalculateButton', () => {
    cy.get('button').contains('Calculate').click();
})

Cypress.Commands.add('verifyInterestAmountMessage', (interestMsg) => {
    cy.get('#interestAmount').invoke('text').should('equal', interestMsg);

})

Cypress.Commands.add('verifyTotalAmountMessage', (totalMsg) => {
    cy.get('#totalAmount').invoke('text').should('equal', totalMsg);
})

Cypress.Commands.add('ignoreUncaughtException', () => {
    cy.on('uncaught:exception', (err, runnable) => {
        return false;
    });
});

Cypress.Commands.add('verifyAlert', (expectedAlertMsg) => {
    let alertShown = false;
    let actualAlertMsg;

    cy.on('window:alert', (alertText) => {
        alertShown = true;
        actualAlertMsg = alertText;
    });
    cy.ignoreUncaughtException();
    cy.clickCalculateButton();

    cy.then(() => {
        expect(alertShown, "AlertExpectedError - Expected Alert popup to appear").to.be.true;
        expect(actualAlertMsg, `AlertMessageError - Expected message: ${expectedAlertMsg} | Actual message: ${actualAlertMsg}`).to.eq(expectedAlertMsg);
    });
});

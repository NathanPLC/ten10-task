/// <reference types="cypress" />


describe('Interest Calculator Application Testcases', () => {
    beforeEach(() => {
        cy.fixture('profile.json').then(({ url, username, password }) => {
            cy.visit(url);
            cy.clickLoginButton();
            cy.enterUserCredentials(username, password)
        });
        cy.clickLogInButton();
    })


    it('01 - Positive - Valid calculation - Daily', () => {
        cy.fixture('interest-data-01.json').then((data) => {
            cy.log(JSON.stringify(data, null, 4));

            cy.selectPrincipalAmount(data.principalAmount);
            cy.selectInterestAmount(data.interestRate);
            cy.selectDurationByName(data.duration);
            cy.checkConsentBox();
            cy.clickCalculateButton();
            cy.verifyInterestAmountMessage(data.interestMsg);
            cy.verifyTotalAmountMessage(data.totalMsg);
        });
    });

    /* Test Fails as I believe the calculation for Monthly is incorrect 
    ** Below is the actual results the app produces:
    ** - interestMsg = 'Interest Amount: 12.00';
    ** - totalMsg = 'Total Amount with Interest: 2012.00'
    ** However I would expect:
    ** Interest: (2000.00 x 0.06)/12 = 10.00
    ** Total: 2000.00 + 10.00 = 2010.00
    ** If this was a real world test I would confirm with Developer
    */
    it('02 - Positive - Valid calculation - Monthly', () => {
        cy.fixture('interest-data-02.json').then((data) => {
            cy.log(JSON.stringify(data, null, 4));

            cy.selectPrincipalAmount(data.principalAmount);
            cy.selectInterestAmount(data.interestRate);
            cy.selectDurationByName(data.duration);
            cy.checkConsentBox();
            cy.clickCalculateButton();
            cy.verifyInterestAmountMessage(data.interestMsg);
            cy.verifyTotalAmountMessage(data.totalMsg);
        });
    });

    it('03 - Positive - Valid calculation - Yearly', () => {
        cy.fixture('interest-data-03.json').then((data) => {
            cy.log(JSON.stringify(data, null, 4));

            cy.selectPrincipalAmount(data.principalAmount);
            cy.selectInterestAmount(data.interestRate);
            cy.selectDurationByName(data.duration);
            cy.checkConsentBox();
            cy.clickCalculateButton();
            cy.verifyInterestAmountMessage(data.interestMsg);
            cy.verifyTotalAmountMessage(data.totalMsg);
        });
    });

    it('04 - Negative - Missing Interest Amount should throws error', () => {
        cy.fixture('negative-data-01.json').then((data) => {
            cy.log(JSON.stringify(data, null, 4));

            cy.selectPrincipalAmount(data.principalAmount);
            cy.selectDurationByName(data.duration);
            cy.checkConsentBox();
            cy.verifyAlert(data.alertMsg);
        });
    });

    it('05 - Negative - Principal Amount Set to Zero should throw error', () => {
        cy.fixture('negative-data-02.json').then((data) => {
            cy.log(JSON.stringify(data, null, 4));

            cy.selectPrincipalAmount(data.principalAmount);
            cy.selectInterestAmount(data.interestRate);
            cy.selectDurationByName(data.duration);
            cy.checkConsentBox();
            cy.verifyAlert(data.alertMsg);
        });
    });

    /* Test Fails as consent checkbox is not mandatory despite requirement */
    it('06 - Negative - Unchecked Consent should throw error', () => {
        cy.fixture('negative-data-03.json').then((data) => {
            cy.log(JSON.stringify(data, null, 4));

            cy.selectPrincipalAmount(data.principalAmount);
            cy.selectInterestAmount(data.interestRate);
            cy.selectDurationByName(data.duration);
            cy.uncheckConsentBox();
            cy.verifyAlert(data.alertMsg);
        });
    });

});

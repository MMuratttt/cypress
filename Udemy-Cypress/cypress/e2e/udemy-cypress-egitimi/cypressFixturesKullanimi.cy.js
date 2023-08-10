describe('Cypress Fixtures Kullanimi', () => {
 
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login');
    });
    it('Cypress Fixtures Kullanim Ornek', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data) => {
            cy.login(data.invalidUsername, data.validPassword)
        })
    });

    it('Cypress Fixtures Kullanim Ornek2', () => {
        cy.fixture("loginData").as('credentials')
        cy.get('@credentials').then((data) => {
            cy.login(data.validUsername, data.invalidPassword)
        })
    });

});
describe('Cypress ile ilk test', () => {
    it('ilk test', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.title().should('eq',"Automation Exercise");
        cy.url().should('eq',"https://www.automationexercise.com/");
    });

    it('ikinci test', () => {
        cy.visit('https://www.automationexercise.com/');
        cy.title().should('contains',"Automation");
        cy.url().should('eq',"https://www.automationexercise.com");
    });
});
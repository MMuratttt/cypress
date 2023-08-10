describe('Back Forward kullanımı', () => {
    it('cypress.io git tarayıcı ileri geri komutları', () => {
        cy.visit('https://www.cypress.io/');

        cy.get('[href="/pricing"]').click();
        cy.title().should('contain',"Scale Open-Source Testing with Cypress Cloud");

        cy.go('back');   // cy.go(-1);
        cy.title().should('include',"Cypress");

        cy.go('forward'); // cy.go(1);
        cy.title().should('contain',"Scale Open-Source Testing with Cypress Cloud");


        cy.go(-1);   
        cy.title().should('include',"Cypress");

        cy.go(1); 
        cy.title().should('contain',"Scale Open-Source Testing with Cypress Cloud");

    });
});
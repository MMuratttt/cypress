describe('Cypress assertion kullanımı', () => {
    it('Asserion Kullanim Ornekleri', () => {
        cy.visit('https://shopist.io/');
        cy.title().should('include',"Shop");
        cy.url().should('contains',"shopist");

        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('contain','Shop');
        cy.get('#main section > a > div > div:nth-child(1)').should('be.visible').and('have.text','Shop the look');  // full text
        
        cy.get('#main section > a > div > div:nth-child(1)').should('have.length',1);
        cy.get('#main section > a > div > div:nth-child(1)').its('length').and('eq',1);

        cy.get('#main section > a').should('have.attr','href','/department/chairs');



    });
});
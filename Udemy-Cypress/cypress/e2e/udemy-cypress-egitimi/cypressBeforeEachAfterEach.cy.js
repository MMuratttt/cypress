describe('Before After kullanımı', () => {
    
    beforeEach(() => {
        cy.log('Before kullanımı');
        cy.visit("https://www.automationexercise.com/")
    });

    afterEach
    (() => {
        cy.log('Afer kullanımı');

    });

    it('test1', () => {
        cy.title().should('eq',"Automation Exercise");
    });

    it('test2', () => {
        cy.url().should('include',"automation");
    });
});
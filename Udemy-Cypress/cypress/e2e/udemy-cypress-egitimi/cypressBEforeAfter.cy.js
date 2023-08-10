describe('Before After kullanımı', () => {
    before(() => {
        cy.log('Before kullanımı');
        cy.visit("https://www.automationexercise.com/")
    });

    after(() => {
        cy.log('Afer kullanımı');

    });

    it('test1', () => {
        cy.title().should('eq',"Automation Exercise");
    });

    it('test2', () => {
        cy.title().should('eq',"Automation Exercise");
    });
});
describe('Custom Commands', () => {
 
    beforeEach(() => {
        cy.visit('https://www.automationexercise.com/login');
    });
    it('Custom Commands Kullanim Ornek', () => {
        cy.login('deneme@abc.com', "parola")
    });

    it('Custom Commands Kullanim Ornek2', () => {
        cy.login('deneme@abc.com', "parola123")
    });

});
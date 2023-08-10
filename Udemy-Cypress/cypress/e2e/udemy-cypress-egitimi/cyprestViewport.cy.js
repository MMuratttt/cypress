describe('Viewport kullanımı', () => {
    it('viewport with numbers', () => {
        cy.viewport(1200,1000);
        cy.visit('https://shopist.io/');
    });

    it('viewport with string', () => {
        cy.viewport('macbook-16');
        cy.visit('https://shopist.io/');
    });

    it('viewport with string', () => {
        cy.viewport('iphone-se2');
        cy.visit('https://shopist.io/');
    });

    it('viewport with string', () => {
        cy.viewport('samsung-note10');
        cy.visit('https://shopist.io/');
    });
    
    
});
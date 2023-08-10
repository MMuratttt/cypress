describe('Shadow ve Find kullanimi', () => {
    
    before(() => {
        cy.on('uncaught:exception', (err, runnable) => { return false })
    });
    it('Shadow ve Find', () => {
        cy.visit('https://www.mercedes-benz.co.uk/');

        //Agree to All butonuna tıkla
        cy.get('cmm-cookie-banner[settings-id="fph8XBqir"]').shadow()
        .find('cmm-buttons-wrapper[class="hydrated"]')
        .find('[data-test="handle-accept-all-button"]')
        .should('be.visible').contains('Agree to all').click()
    });
});
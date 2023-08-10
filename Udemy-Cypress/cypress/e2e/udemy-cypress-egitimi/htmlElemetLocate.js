describe('Cypress locator', () => {
    it('Html element locate etme', () => {
        cy.get("#user-name") // id
        cy.get(".login-box") // class
        cy.get("input") // tag
        cy.get('input[name="user-name"]') // attribute locate etme
        cy.get('input[placeholder]:contains("Username")') // text içeren element
        cy.get('input[placeholder]').contains("Username") // text içeren element
        cy.contains("Username") // text içeren element

    });
});



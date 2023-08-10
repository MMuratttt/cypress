export class Homepage {
    navigate() {
        cy.visit('https://cypress.io')
        return this;
    } 

    pricingBtn(){
        cy.get('[href="/pricing"]').click();
    }
}
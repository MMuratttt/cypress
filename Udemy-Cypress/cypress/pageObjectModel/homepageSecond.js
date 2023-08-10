class HomepageSecond {
    navigate() {
        cy.visit('https://cypress.io')
        return this;
    } 

    usernameFields(){
        return cy.get('[href="/pricing"]')
    }
}

export default new HomepageSecond();
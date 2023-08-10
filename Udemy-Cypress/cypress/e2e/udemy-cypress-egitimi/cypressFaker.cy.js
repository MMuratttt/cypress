const { faker } = require('@faker-js/faker')

let fakeEmail = faker.internet.email()
let fakePassword = faker.internet.password()
let fakeName = faker.person.firstName()

describe('Faker kullanimi', () => {
    
    it('faker ile ornek test', () => {
        cy.visit('https://www.automationexercise.com/login')

        cy.get('input[data-qa="login-email"]').type(fakeEmail)
        cy.get('input[data-qa="login-password"]').type(fakePassword)
        cy.get('[data-qa="login-button"]').click()
    });

});

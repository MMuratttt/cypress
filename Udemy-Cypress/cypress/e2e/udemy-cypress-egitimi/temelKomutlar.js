describe('Temel Komutlar', () => {
    it('Temel komutlar cy.visit kullanımı', () => {
        cy.visit("/") //base URL varsa
        cy.visit("https://google.com") //base URL yoksa
        cy.visit({
            url:"https://google.com",
            method: "GET"
        }) //base URL yoksa
    });

    it.skip('Temel Komutlar cy.title kullanımı', () => {  //skip ile it skip edilir. describe.skip olursa describe ı atlar
        cy.title().should("eq","Google")
        cy.title().should("include","Goog")
        cy.title().should("contain","Goog")
    });

    it('Temel Komutlar cy.url, cy. location', () => {
        cy.url().should("include","/commands") //url içinde commands geçiyorsa doğrular

        cy.location("pathname").should("eq","/commands") //gidilen pathi doğrulamış oluyoruz
        cy.location("protocol").should("eq","https") //gidilen protokolü doğrular
        cy.location("hostname").should("eq","https://example.cypress.io/") //tam eşitlikle doğrular
    });

    it('Temel Komutlar cy.get', () => {
        cy.get("#button") // doğru kullanım
        cy.get("#button").as("cancelDeneme") // cy.get("@cancelDeneme"")
    });

    it('Temel komutlar cy.log', () => {
        cy.log("string")
        cy.log("Mesaj 1")
    });


});
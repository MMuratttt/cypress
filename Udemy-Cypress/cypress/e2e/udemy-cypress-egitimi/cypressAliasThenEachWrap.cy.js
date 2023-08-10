describe('Alias, Then, Wrap, Each', () => {
    
    it('Kullanim Ornegi', () => {

        let itemlength

        cy.visit('https://shopist.io/');

        cy.get('.navbar-section a').as('NavbarMenus') //Alias Ornek
    
        cy.get('@NavbarMenus').then(($el) => {
            itemlength = $el.length
        }).each(($el, index) => {
           // cy.log($el.text())
            cy.log('Navbar Menu' + index + ": " + $el.text())

           if($el.text().includes('Cart')){
            cy.wrap($el).click();
           } 

        })
    });
});
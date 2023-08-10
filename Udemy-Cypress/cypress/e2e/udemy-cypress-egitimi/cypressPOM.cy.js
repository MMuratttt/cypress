import { Homepage } from "../../pageObjectModel/homepage";
const homepagePom = new Homepage();

import homepageSecond from "../../pageObjectModel/homepageSecond";


describe('POM 1. kullanım', () => {
    it('', () => {
    
    homepagePom.navigate()
    .pricingBtn();
});
});



describe('POM 2. kullanım', () => {
    it('', () => {
    homepageSecond.navigate()
    homepageSecond.pricingBtn.should('be.visible').click();
});
});
//const { describe } = require("mocha");
// const cypress = require("cypress")

describe ("CSS_Locators", () => {
    it("Verify Search-box", ()=>{
        cy.visit("https://demo.nopcommerce.com/")
        cy.get("input#small-searchterms").type("HTC One M8 Android L 5.0 Lollipop")
        cy.get("button[type='submit']").click() 
        cy.get('[class="price actual-price"]').contains("$245.00");
        
    })
})


describe ("XPATH_Locators", function(){
    it("Find number of products", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.xpath("//div[@class='product-grid home-page-product-grid']//div[@class='item-grid']/div").should("have.length", 4)
    })

    it("Chained xpath", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.xpath("//div[@class='product-grid home-page-product-grid']//div[@class='item-grid']").xpath("./div").should("have.length", 4)
    })
})
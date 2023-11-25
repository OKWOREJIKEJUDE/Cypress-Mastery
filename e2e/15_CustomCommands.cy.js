

describe("Custom commands", ()=>{
    //Clicking on link using label
    it.skip("Handling Links", ()=>{
        cy.visit("https://demo.nopcommerce.com/apple-macbook-pro-13-inch")
        //clicking on links without using custom command... simply find the selector and click
        cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()

        //clicking on links using custom command... create a command for them
        cy.myClickLink("Apple MacBook Pro 13-inch")//to click the link
        cy.get("div[class='product-name'] h1").should("have.text", "Apple MacBook Pro 13-inch")


    })
    //we will customize our commnands so we can be able to take both upper and lower case characters
    //The way to overide the existing command is that we will pass a command that will make the contains method to accept both upper and lower caser characters
    it("Overwriting existing commands", ()=>{
      
        //todo... code didn't work
         
   })
   //Just incase we have many test cases that we need to login to be able to perform. we will have to create a general custom command that all of them can use.
   //Also if there is any feature that is common there for every test cases we cam simply create a custom command for all of them to use.
    it("Login commands", ()=>{
        cy.visit("https://demo.nopcommerce.com/apple-macbook-pro-13-inch")
        cy.myClickLink("Log in")//Custom command--to click the link
        cy.myLoginApp("ejike.okwor.247590@unn.edu.ng", "Ejyke12345")//Custom command--to enter details
        cy.get(".ico-account").should("have.text", "My account")
    })

})
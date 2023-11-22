
describe("Dropdowns", function() {
    it.skip("dropDown with select(in the inspect)", function(){
        cy.visit("https://demo.nopcommerce.com/")
        cy.get(".ico-register").click()
        cy.get("select[name='DateOfBirthMonth']").select("April").should("have.value", "4")
    })
    it.skip("dropDown without select(in the inspect)", function(){
        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")
        cy.get("#select2-billing_country-container").click()
        cy.get("input[role='combobox']").type("Japan").type("{enter}")//this---.type("{enter}")--- is used to press enter
        cy.get("#select2-billing_country-container").should("have.text", "Japan")
    })
    //When dealing with auto suggested dropdown search[i.e wikipedia style]
    it.skip("Auto suggeted dropDown", function(){
        cy.visit("https://www.wikipedia.org/")
        cy.get("#searchInput").type("Flutter")
        cy.get(".suggestion-title").contains("Flutterwave").click()//NB...this selector(.suggestion-title) matches all the elements that displayed. Then we are now telling it to choose the one with the same texts as "Flutterwave"
    })

    //When dealing with dynamic dropdown search[i.e google search style]
    it("Dynamic DropDown", function() {
        cy.visit("https://www.google.com/")
        // Type the search query
        cy.get('#APjFqb').type("who formed nigeria")
        cy.wait(3000)
        // Wait for the search results to appear
        cy.get('.sbct').should('have.length.greaterThan', 0)
        // Iterate over the search results and click on the one with specific text
        cy.get('.sbct').each(($result) => {
          if ($result.text().includes("who invented nigeria flag")) {
            cy.wrap($result).click()
          }
          else{
             // Click on another result
        cy.get('.sbct').contains("who created nigeria council").click()//make sure you use your hand and write the cssSelector when you get to this point. ----- 
          }
        })
       
      })
      
      
})

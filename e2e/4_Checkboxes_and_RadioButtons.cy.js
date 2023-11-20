
describe("Checkboxes And RadioButtons", function(){
    it("RadioButtons", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
        //checked if radiobuttons are visible
        cy.get("#male").should("be.visible")
        cy.get("#female").should("be.visible")
        //If we check male button, then female should not be checked
        cy.get("#male").check().should("be.checked")
        cy.get("#female").should("not.be.checked")
        //If we check female button, then male should not be checked
        cy.get("#female").check().should("be.checked")
        cy.get("#male").should("not.be.checked")
    })

    it("Checkboxes", function(){
        cy.visit("https://testautomationpractice.blogspot.com/")
        cy.get("#sunday").should("be.visible")//check if checkboxes are visible
        cy.get("#sunday").check().should("be.checked")//selecting single checkboxes
        cy.wait(5000)
        cy.get("#sunday").uncheck().should("not.be.checked")//Checkbox should not be checked if i uncheck it
        //select all the checkboxes at once
        cy.get(".form-check-input[type='checkbox']").check().should("be.visible")
        cy.get('[id$="day"]').check().should("be.checked")//My pattern
        //select all the checkboxes at once
        cy.get(".form-check-input[type='checkbox']").uncheck().should("not.be.checked")
        cy.get('[id$="day"]').check().should("not.be.checked")//My pattern
        //select last
        cy.get(".form-check-input[type='checkbox']").last().check()
        //select first
        cy.get(".form-check-input[type='checkbox']").first().check()
        //select first three
       
        


    })

})
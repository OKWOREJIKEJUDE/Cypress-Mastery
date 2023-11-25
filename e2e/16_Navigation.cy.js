

describe("TestSuites", ()=>{
    it("Navigation", function(){
        cy.visit("https://demo.opencart.com/")
        cy.title().should("eq", "Your Store")//get the title from inspect
        cy.get("li:nth-child(7) a:nth-child(1)").click()

        //Approach 1
        cy.get("div[id='content'] h2").should("have.text", "Cameras")//cameras page
        cy.go("back")//to go back to homepage
        cy.wait(1000)
        cy.title().should("eq", "Your Store")
        cy.go("forward")//Go to cameras page again
        cy.wait(1000)
        cy.get("div[id='content'] h2").should("have.text", "Cameras")//cameras page
        cy.wait(1000)

        //Approach 2
        cy.go(-1)//to go back to homepage
        cy.title().should("eq", "Your Store")
        cy.go(1)//Go to cameras page again
        cy.get("div[id='content'] h2").should("have.text", "Cameras")//cameras page

        //Reload the page
        cy.reload();
    })
})
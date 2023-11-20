
//todo SEEE MORE ON CYPRESS ALERTS(EVENTS) HERE....[https://docs.cypress.io/api/cypress-api/catalog-of-events]
import "cypress-iframe"
describe("Handling iFrames", function(){
    ///Approach 1
    it("Using iFrames directly", function(){
        cy.visit("https://the-internet.herokuapp.com/iframe")
        //The below operation will access is used to access elements inside iframe in cypress
        const iframe = cy.get("#mce_0_ifr")//get the frame
        .its("0.contentDocument.body")//check the document that contains the element
        .should("be.visible")//check if the element is visible
        .then(cy.wrap)

        cy.wait(2000)
        iframe.clear()//clear text element that was initially inside iframe
        .type("Welcome Ejyke De Programmer {ctrl+A}")//Then type in new words after clearing

        cy.get("button[title='Bold']").click()//to click on the button B
    })
       ///Approach 2
       //to be used when you have multiple places you need to use iframe
       it("Using cypress custom command", function(){
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.myIframeHere("#mce_0_ifr").clear().type("Welcome, Ejyke De Programmer {ctrl+A}")
        cy.get("button[title='Bold']").click()//to click on the button B
    })
       ///Approach 3
       //todo NB.. we installed a plugin with this command----npm install -D cypress-iframe
       it("Using cypress iFrames plugin", function(){
        cy.visit("https://the-internet.herokuapp.com/iframe")
        cy.frameLoaded("#mce_0_ifr")//this will load the frame
        cy.iframe("#mce_0_ifr")//then we interact with the frame
        .clear().type("Welcome Ejikemuwa {ctrl+A}")

        cy.get("button[title='Bold']").click()//to click on the button B
  
    })
})
// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })




//<reference types="Cypress"/>  //todo This is for cypress
 //<reference types="cypress-xpath"/>  //todo This is for xpath 




  //Creating our own custom cammand that will help us to access iframes whenever we want to use iframe
   Cypress.Commands.add("myIframeHere", (iframe)=>{
   return cy.get(iframe)//get the frame
   .its("0.contentDocument.body")//check the document that contains the element
   .should("be.visible")//check if the element is visible
   .then(cy.wrap);
})

//Creating custom command that will help to click on links
Cypress.Commands.add("myClickLink",(label)=>{
  cy.get("a").contains(label).click();
})

//Custom comman for login
Cypress.Commands.add("myLoginApp", (email, password)=>{
    cy.get("#Email").type(email)
    cy.get("#Password").type(password)
    cy.get("button[class='button-1 login-button']").click()
})


 

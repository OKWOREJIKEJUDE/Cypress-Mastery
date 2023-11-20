
//todo SEEE MORE ON CYPRESS ALERTS(EVENTS) HERE....[https://docs.cypress.io/api/cypress-api/catalog-of-events]

describe("Alerts", function(){
    //Javascript alert; with texts and "OK" button
    it.skip("Simple Js alerts", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
        cy.wait(3000)
        cy.get("button[onclick='jsAlert()']").click()//NB cypress automatically closes the alert window, but we need to verify the texts that appear on the alert. Therefore, to do this, we have to trigger an event by:-
        cy.on("window:alert", (t) => {
            expect(t).to.contains("I am a JS Alert")//verify the texts in the alert window..
        })
        //NB...cypress will automatically close the alert window
        cy.get('#result').should("have.text","You successfully clicked an alert")//After closing the alert window by cypress, we then validate the text that appears.
    })

    //Javascript Confirm alert; with texts "OK" button and "CANCEL" button
    //NB.. By default, cypress will close the alert window with the "OK" button , but if you want to close the alert window with the "cCANCEL" button, you will have to write a logic for it 
    it.skip("Js confirm alerts", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")// open link
        cy.get("button[onclick='jsConfirm()']").click()//click on button
        cy.on("window:confirm", (t) => {//verify the texts in the alert window..
            expect(t).to.contains("I am a JS Confirm")
        })

        cy.get("#result").should("have.text", "You clicked: Ok")//After closing the alert window by cypress, we then validate the text that appears.

        //But if you want to close the alert window by clicking on "CANCEL", you need to write your own code as below
        cy.on("window:confirm",()=>false)//cypress closes the alert window by clicking cancel
        cy.get("#result").should("have.text", "You clicked: Cancel")//Then valiidate you clicked "CANCEL" button
    })

        //Javascript Prompt alert; with "TextBox", text "OK" button and "CANCEL" button
    //NB.. By default, cypress will close the alert window with the "OK" button , but if you want to close the alert window with the "CANCEL" button, you will have to write a logic for it 
    it.skip("Js prompt alerts", function(){
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")// open link
        cy.window().then((win)=>{// use the below logic to get control over alert window
            cy.stub(win, "prompt").returns("welcome Ejyke De Programmer") //then we pass "welcome" inside it
        })
        cy.get("button[onclick='jsPrompt()']").click()//after that, we now click the button

        //cypress closes window by itself by clicking "OK". Then we validate display message below
        cy.get("#result").should("have.text", "You entered: welcome Ejyke De Programmer")//Display message

        cy.on("window:prompt",()=>false)//cypress closes the alert window by clicking cancel
        cy.get("#result").should("have.text", "You entered: null")//Then valiidate you clicked "CANCEL" button
    })

    //Autenticated Alerts
    it.only("Js Autenticated alerts", function(){
        //Appproach 1
        cy.visit("https://the-internet.herokuapp.com/basic_auth", {auth: {username: "admin", password: "admin"}})// open link
        cy.get("div[class='example'] p").should("have.contain", "Congratulations!")//Then valiidate message when cypress clicks "OK" button by itself 
        
        //Approach 2 --- pass username and password inside the link as done below
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")// open link
        cy.get("div[class='example'] p").should("have.contain", "Congratulations!")//Then valiidate message when cypress clicks "OK" button by itself 
    })
})
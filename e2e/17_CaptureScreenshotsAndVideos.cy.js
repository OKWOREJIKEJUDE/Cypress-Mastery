

describe("LearnScreenshootAndVideos", function(){

    it("Screenshots And Videos", function(){
        cy.visit("https://demo.opencart.com/")
        cy.screenshot("HomePage...")//Screenshot of homepage

        cy.wait(3000)
        cy.get("img[title='Your Store']").screenshot("Logo...")//Captures the screenshot of the logo of opencart
    })

    //How to automatically capture screenshots and videos when they fail using CLI only
    it("Screenshots And Videos", function(){
        cy.visit("https://demo.opencart.com/")
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should("have.text", "Tablets")

        //todo...MAKE SURE YOU ADD [video:true,] IN cypress.config.js BEFORE YOU RUN THE ABOVE CODE SO THAT VIDEOS COULD BE CAPTURED
       
    })
})
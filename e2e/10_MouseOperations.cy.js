import 'cypress-iframe'
require('@4tw/cypress-drag-drop')
//todo To know more on cyprss Mouse Operations, go to...[https://docs.cypress.io/api/commands/trigger]

describe("Mouse Operations",()=>{
    it.skip("MouseHover", ()=>{
        cy.visit("https://demo.opencart.com/")
        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should("not.be.visible")
        cy.wait(1000)
        cy.get('.nav > :nth-child(1) > .dropdown-toggle').trigger('mouseover').click()
        cy.wait(1000)
        cy.get(".nav-link[href='https://demo.opencart.com/index.php?route=product/category&language=en-gb&path=20_27']").should("be.visible")
    })

    it.skip("Right click", ()=>{
        cy.visit("https://swisnl.github.io/jQuery-contextMenu/demo.html")
        //Approach1
        cy.get(".context-menu-one.btn.btn-neutral").trigger('contextmenu')
        cy.get(".context-menu-item.context-menu-icon.context-menu-icon-copy").should('be.visible')
        //Approach2
        cy.get(".context-menu-one.btn.btn-neutral").rightclick()
    })

    it.skip("Double click", ()=>{
        cy.visit("https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_ev_ondblclick3")
        cy.frameLoaded("#iframeResult")
        //Approach 1--trigger()
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").trigger('dblclick')
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")
        //Approach 2
        cy.iframe("#iframeResult").find("button[ondblclick='myFunction()']").dblclick()
        cy.iframe("#iframeResult").find("#field2").should("have.value", "Hello World!")
    })

    it("Drag and Drop using plugin", ()=>{
        cy.visit("")
    })


    // it.skip("Scrolling Page", ()=>{
    //     cy.visit("")
    // })
    
})
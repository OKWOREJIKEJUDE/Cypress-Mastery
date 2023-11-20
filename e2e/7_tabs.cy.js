

describe("Handle Tabs", function(){
    //Approach 1
    it.skip("Child Tabs(first method)", function(){
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").invoke("removeAttr", "target").click()//we removed the "target" before performing click action
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")//now in the child tab, we verify if our link is correct
        cy.wait(4000)
        cy.go("back")//them we navigate back to the parent tab
    })
    //Approach 2
    it("Child Tabs(second Method)", function(){
        cy.visit("https://the-internet.herokuapp.com/windows")
        cy.get("a[href='/windows/new']").then((e)=>{
            let myUrl = e.prop("href")
            cy.visit(myUrl)
        })
        cy.url().should("include", "https://the-internet.herokuapp.com/windows/new")//now in the child tab, we verify if our link is correct
        cy.wait(4000)
        cy.go("back")//them we navigate back to the parent tab
    })


    //todo NB....Approach 1 is the best because some domains might noot match. So if you open the first link and try to verify the second link with the first one, it might not match in some cases. 
})
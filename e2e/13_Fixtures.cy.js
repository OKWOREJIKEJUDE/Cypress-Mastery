

describe("MyTestSuites", ()=>{

    //Direct Access
    it.skip("FixturesDemoTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.fixture("orangeHRM").then((mydata)=>{
            cy.get("input[placeholder='Username']").type(mydata.Username)
            cy.get("input[placeholder='Password']").type(mydata.Password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", mydata.ExpectedResult)
        })
        })


      

    //Access through Hook-For multiple It blocks
    let userdata
    before(()=>{
        cy.fixture("orangeHRM").then((mydata)=>{
             userdata = mydata;
        })
    })
    
    it("FixturesDemoTest", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get("input[placeholder='Username']").type(userdata.Username)
            cy.get("input[placeholder='Password']").type(userdata.Password)
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", userdata.ExpectedResult)
    })
})
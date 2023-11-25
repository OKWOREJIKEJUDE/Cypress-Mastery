

describe("MytestSuites",()=>{

        //The below code takes the first sets of data inside the orangeHRM2.json and repeats it multiple times, the takes another sets of data and repeats it mutiple times and so on...
    it("Data Driven Test", ()=>{
        cy.fixture("orangeHRM2").then((datas)=>{
            cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            datas.forEach(ourDatas => {
                cy.get("input[placeholder='Username']").type(ourDatas.Username)
                cy.get("input[placeholder='Password']").type(ourDatas.Password)
                cy.get("button[type='submit']").click()

                if (ourDatas.Username=="Admin" && ourDatas.Password=="admin123") {
                    cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", ourDatas.ExpectedResult)
                    //Logout--we needed to logout so we can be able to use another data to login
                    cy.get(".oxd-icon.bi-caret-down-fill.oxd-userdropdown-icon").click()
                    cy.get("[class='oxd-dropdown-menu']>li:nth-child(4)").click()
                }
                else{
                    cy.get(".oxd-text.oxd-text--p.oxd-alert-content-text").should("have.text", ourDatas.ExpectedResult)
                }
            });
        })

    })
})
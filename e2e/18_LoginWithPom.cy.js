
import Login from "../PageObjectFolder/LoginPage"
//mport Login2 from "../PageObjectFolder/LoginPage2"

describe("POM", ()=>{
    //Noemal/general Approach 1
    it.skip("Login_using_POM(Normal Method)", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
            cy.get("input[placeholder='Username']").type("Admin")
            cy.get("input[placeholder='Password']").type("admin123")
            cy.get("button[type='submit']").click()
            cy.get(".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module").should("have.text", "Dashboard")
    })
    //Page Object Model(POM) Approach 2a
    //todo... Make sure you import before using
    it("Login_using_POM(POM Method 2a)", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
           const displayIt = new Login();
           displayIt.setUserName("Admin");
           displayIt.setUserPassword("admin123");
           displayIt.setUserSubmit();
           displayIt.verifyLogin();
    })

    //Page Object Model(POM) Approach 2b
    //todo... Make sure you import before using
    it.skip("Login_using_POM(POM Method 2b)", ()=>{
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
           const displayIt = new Login2();
           displayIt.setUserName("Admin");
           displayIt.setUserPassword("admin123");
           displayIt.setUserSubmit();
           displayIt.verifyLogin();
    })

    //todo... ANY OF THE POM YOU CHOOSE IS CORRECT
})
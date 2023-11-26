//todo.... CREATING PAGE OBJECT CLASS
class Login2
{
    txtUsername = "input[placeholder='Username']";
    txtPassword = "input[placeholder='Password']";
    btnSubmit = "button[type='submit']";
    veryLogin = ".oxd-text.oxd-text--h6.oxd-topbar-header-breadcrumb-module"




    setUserName(username){
        cy.get(this.txtUsername).type(username)
    }

    setUserPassword(password){
        cy.get(this.txtPassword).type(password)
    }

    setUserSubmit(){
        cy.get(this.btnSubmit).click()
    }

    verifyLogin(){
        cy.get(this.veryLogin).should("have.text", "Dashboard")
    }
}
export default Login2;
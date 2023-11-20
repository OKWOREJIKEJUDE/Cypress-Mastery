



//todo Documentation link on assertions... [https://docs.cypress.io/guides/references/assertions]
//todo Documentation link on assertions(BDD)... [https://www.chaijs.com/api/bdd/]
//todo Documentation link on assertions(TDD)... [https://www.chaijs.com/api/assert/]


describe("Assertions-Checks/Validations", function(){
    it("Implicit Assertions", function(){
        //todo POSITIVE IMPLICIT ASSERTIONS
        //Add assertions to the url; to check the URL
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        // SHOULD----FIRST PATTERN
        cy.url().should("include", "orangehrmlive.com") //if url contains "orangehrmlive.com"
        cy.url().should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//if URL equal
        cy.url().should("contain", "orangehrm")
        // SHOULD----SECOND PATTERN
        cy.url().should("include", "orangehrmlive.com") //if url contains "orangehrmlive.com"
        .should("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//if URL equal
        .should("contain", "orangehrm")
        // SHOULD----THIRD PATTERN
        cy.url().should("include", "orangehrmlive.com") //if url contains "orangehrmlive.com"
        .and("eq", "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")//if URL equal
        .and("contain", "orangehrm")

        //Assertions on title
        cy.title().should("eq", "OrangeHRM")
        .and("include", "Orange")
        .and("contain", "HRM")

        //Assertions on Logo_and_Link
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get('.orangehrm-login-branding > img').should("be.visible")//check logo visibility
        .and("exist")//check if logo exist
        cy.xpath("//a").should("have.length", "5")//check the number of links available

        //Assertions on Checking_if_Textfield_Values_are_Correct
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Username']").should("have.value", "Admin")

        //todo NEGATIVE IMPLICIT ASSERTIONS
         cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
         cy.url().should("not.include", "ohtfefdaf.com")
         cy.url().should("not.eq", "https://opensourc.com/web/index.php/auth/login")
         cy.url().should("not.contain", "greenhrm")
    })



    it("Explicit Assertions", function(){
        cy.visit("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
        cy.get("input[placeholder='Username']").type("Admin")
        cy.get("input[placeholder='Password']").type("admin123")
        cy.get("button[type='submit']").click()

        let expectedName = "Paul Collings"
        //We got the element and stored it in a variable x in the below statement. we will now use what we stored inside x to compare with what we initially have in expectedname to know if they're the same
        cy.get(".oxd-userdropdown-name").then(   (x)=>{
            let actualName = x.text()    //We now stored the texts inside x in actualName
            //todo BDD STYLE
            expect(actualName).to.equal(expectedName)
            expect(actualName).to.not.equal(expectedName)
            //todo TDD STYLE
            assert.equal(expectedName, actualName)
        })
        //ordinary comparison
        expect(42).to.equal(42)//BDD
        expect(32).to.not.equal(42)//BDD
        assert.equal(42, 42)//TDD
        assert.notEqual(25, 42)//TDD
    })

})
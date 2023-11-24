
describe("Test Suites", ()=>{
    //todo...Hook is what executes once befor any other codes starts to execute
    //todo...Tags is used to control it block, wether to execute or not

    //Tags
    //!.skip
    //!.only

    //Types of hook
    //!1. before--Executes only once before any it block
    //!2. after--Executes only once after all it block
    //!1. beforeEach--Executes all the time before each and every it block
    //!1. afterEach--Executes all the time after each and every it block

    before(()=>{
        cy.log("************Launch App**********")
    })
    after(()=>{
        cy.log("************Close App**********")
    })
    beforeEach(()=>{
        cy.log("************Login**********")
    })
    afterEach(()=>{
        cy.log("************LogOut**********")
    })



    it("Search", ()=>{
        cy.log("###.....Search....###")
    })
    it("Advanced Search", ()=>{
        cy.log("###.....Advanced Search....###")
    })
    it("Listening Products", ()=>{
        cy.log("###.....Listening Products....###")
    })
})
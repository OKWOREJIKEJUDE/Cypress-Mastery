
import "cypress-file-upload"
//todo You can check some drag and drop usage here....[https://github.com/abramenal/cypress-file-upload]

describe("Handling FileUpload", ()=>{

it.skip("Single file Upload", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile('Igbo Proverb.docx')
    cy.get("#file-submit").click()
    cy.wait(5000)
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")
})
//Renaming the file during upload
it.skip("File Upload Rename", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#file-upload").attachFile({filePath:"Igbo Proverb.docx", fileName:"Igbo Idioms.docx"})
    cy.get("#file-submit").click()
    cy.wait(5000)
    cy.get("div[class='example'] h3").should("have.text", "File Uploaded!")

})
//This will drag it and drop it inside the required box
it.skip("File Upload-Drag and Drop", ()=>{
    cy.visit("https://the-internet.herokuapp.com/upload")
    cy.get("#drag-drop-upload").attachFile("Igbo Proverb.docx", {subjectType:"drag-n-drop"})
    cy.wait(5000)
    cy.get("#drag-drop-upload>div>div>div>span:first-child").contains("Igbo Proverb.docx")

})
//Uploading multiple files at once
it.skip("Multiple files Upload", ()=>{
    cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")
    cy.get("#filesToUpload").attachFile(["Igbo Proverb.docx", "Summary Plan.pdf"])
    cy.wait(5000)
    cy.get("ul[id='fileList'] li").should('not.have.text', "No Files Selected")

})
it("File Upload-Shaddow Dom", ()=>{
    cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")
    cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("Summary Plan.pdf")
    cy.wait(2000)
    cy.get(".smart-item-name", {includeShadowDom:true}).should("be.visible")//checking wether what i uploaded id visible
    cy.get("smart-file-upload:nth-child(1) > div:nth-child(1) > div:nth-child(4) > smart-button:nth-child(1) > button:nth-child(1)",{includeShadowDom:true}).should("be.visible")//checking wether one of the buttons is visible
})
})

describe("Handle Tables", ()=>{
    //NB.. beforeEach code will execute multiple times before any it block
    beforeEach("Login", ()=>{
        cy.visit("https://demo.opencart.com/admin/index.php")
        cy.get("#input-username").type("demo")
        cy.get("#input-password").type("demo")
        cy.get("button[type='submit']").click()

        cy.wait(500)
        cy.get(".btn-close").click()
        
        cy.get(".parent[href='#collapse-5']").click()//click on customer
        cy.get("li[id='menu-customer'] li:nth-child(1)").click()//To open the tables //NB..you can simply be changing the number (1) in the selector to select the next one. E.g ("li[id='menu-customer'] li:nth-child(2)"), selects the second one in the dropdow. While ("li[id='menu-customer'] li:nth-child(3)"), selects the third one and so on...
     })

    it.skip("Check number of rows and column", ()=>{
        //todo..for rows
        cy.get("[class='table table-bordered table-hover']>tbody>tr").should("have.length", "10")//here, we wrote selector to capture all the rows and the verify if its actually 10 in nunber. We can use the same way to count the number of links, or images or anything in a page.
        //todo..for column
        cy.get("[class='table table-bordered table-hover']>thead>tr>td").should("have.length", "7")//Same thing we did in the previous applies here
    })

    it.skip("Check cell datas from specific rows and column", ()=>{
        cy.get("[class='table table-bordered table-hover']>tbody>tr:nth-child(6)>td:nth-child(3)").contains("ghh56@gmail.com")//write the locator until you are able to find the particular cell
    })

    it.skip("Read all the rows and column datas in the first page", ()=>{
        cy.get("[class='table table-bordered table-hover']>tbody>tr")//to get all the rows
        .each(($particularRow, index, $allTheRows)=>{//iterate over each row obtained from the previous get
            cy.wrap($particularRow).within(()=>{//wrap the any row it goes through to perform operations within it
                cy.get("td").each(($particularColumn, index, $allTheColumn)=>{//get or iterates over all the columns datas inside that row
                    cy.log($particularColumn.text());//display or print the texts of each column
                })
            })
        })
    })
    //to verify the actual/total number of pages in a table [multiple tables]
    let totalPages;
    it.skip("Pagination", ()=>{
        cy.get(".col-sm-6.text-end").then((e)=>{
            let myText = e.text();//Showing 1 to 10 of 16469 (1647 Pages)
            totalPages = myText.substring(  myText.indexOf("(")+1,    myText.indexOf("Pages")-1);
            cy.log("Total number of pages in the table == "+totalPages)
        })
    })

    //Reading all the datas from the table
    //todo Soo.. we will need to write a loop that will read all the datas 
    let totalPagesWeAreReading = 5
    it("Read all datas", ()=>{
        for (let p = 1; p <= totalPagesWeAreReading; p++) {
            if (totalPagesWeAreReading > 1) {
                cy.log("Active page is =="+p);
                cy.get("[class='pagination']>li:nth-child("+p+")").click()
                cy.wait(2000)
                cy.get("[class='table table-bordered table-hover']>tbody>tr")
                .each(($row, index, $rows)=>{
                    cy.wrap($row).within(()=>{
                        cy.get("td:nth-child(3)").then((e)=>{
                            cy.log(e.text());
                        })
                    })
                })
            }
        }
        })
    })


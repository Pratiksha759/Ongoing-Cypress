import { practicePage } from "../../../PageObjects/practicePage";
                                    
///<reference types= "Cypress" />
const demoObj=new practicePage;

describe("Practice Test Suite",function(){
    it("Handling fixtures in cypress",function(){
      demoObj.visitSite(demoObj.demoUrl);
      //demoObj.clickElement(demoObj.sec1)
      cy.fixture('example').as('data').then((data)=>{
        demoObj.Typing(demoObj.email,data.email);
        demoObj.clickElement(demoObj.go)
      })
    })


    it("fixture 2",function(){
        demoObj.visitSite(demoObj.demoUrl);

    })
})//
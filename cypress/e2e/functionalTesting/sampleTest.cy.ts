import { should } from "chai";
import { practicePage } from "../../../PageObjects/practicePage";
 import 'cypress-file-upload';
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

    it.only("user should be able to write welcome text inside available area",function(){
      demoObj.visitSite(demoObj.iframeUrl);
        cy.get('#Frame2').then(($iframElement:any)=>{
        let ibody=$iframElement.contents().find('body');
        cy.wrap(ibody).find("#frameinput").type("abnxnv");
        cy.wrap(ibody).find("#frameinputtext").should('contain',"Enter");

        cy.get("#Frame1").then(($iframe2:any)=>{
        let iframebody= $iframe2.contents().find('body');
        cy.wrap(iframebody).find("#frametext").should('be.visible')
        })
      
      })
    })

   

})
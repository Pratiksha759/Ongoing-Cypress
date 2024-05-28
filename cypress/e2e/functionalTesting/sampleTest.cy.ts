import { should } from "chai";
import { practicePage } from "../../../PageObjects/practicePage";
import "cypress-file-upload";
import "cypress-iframe";

import usersData from "../../fixtures/example.json";


///<reference types="cypress-iframe" />
///<reference types= "Cypress" />
const demoObj = new practicePage();


beforeEach(() => {
  cy.hideCommandLog();
});


describe("Practice Test Suite", function () {
  it("Handling fixtures in cypress", function () {
    demoObj.visitSite(demoObj.demoUrl);
    //demoObj.clickElement(demoObj.sec1)
    cy.fixture("example")
      .as("data")
      .then((data) => {
        demoObj.Typing(demoObj.email, data.email);
        demoObj.clickElement(demoObj.go);
      });
  });

  it("Iframe Handling :user should be able to interact with element in iframe", function () {
    demoObj.visitSite(demoObj.iframeUrl);
    cy.get(demoObj.frame2).then(($iframElement: any) => {
      let ibody = $iframElement.contents().find("body");
      cy.wrap(ibody).find(demoObj.frameInput).type("abnxnv");
      cy.wrap(ibody).find(demoObj.frameInputText).should("contain", "Enter");
      cy.get(demoObj.frameInput).then(($iframe2: any) => {
        let iframebody = $iframe2.contents().find("body");
        cy.wrap(iframebody).find(demoObj.frametext).should("be.visible");
      });
    });
  });

  it("Iframe using custom commands :user should be able to interact with element in iframe", function () {
    demoObj.visitSite(demoObj.iframeUrl);
    cy.interactWithIframe(demoObj.frame2, (ibody: any) => {
      cy.wrap(ibody).find(demoObj.frameInput).type("abnxnv");
      cy.wrap(ibody).find(demoObj.frameInputText).should("contain", "Enter");
    });
    cy.interactWithIframe(demoObj.frame1, (ibody: any) => {
      cy.wrap(ibody).find(demoObj.frametext).should("be.visible");
    });
  });

  it("Iframes plugin", function () {
    demoObj.visitSite(demoObj.iframeUrl);
    cy.frameLoaded(demoObj.frame1);
    cy.iframe(demoObj.frame1).find(demoObj.frametext).should("be.visible");
  });

  it("Handling Scrolling using cypress", () => {
    demoObj.visitSite(demoObj.youtube);
    cy.get(demoObj.searchbar).type("javascript by testers talk");
    cy.get(demoObj.search).click();
    cy.wait(4000);
    cy.get(demoObj.video).scrollIntoView().should("be.visible").click();
    // cy.scrollTo('bottom')
  });

  it("Data driven testing using JSON file", function () {
    cy.fixture("example.json").then((JsonData) => {
      const TestData = JsonData;
      demoObj.visitSite(demoObj.google);
      cy.get(demoObj.gsearchbar).type(TestData.quote + "{enter}");
    });
  });

  const TestData1 = usersData;
  usersData.forEach((TestData1) => {
    it("Data driven Testing using multiple set of data execute every possible condition", function () {
      demoObj.visitSite(demoObj.google);
      cy.get(demoObj.gsearchbar).type(TestData1.quote2 + "{enter}");
    });
  });

  const TestData2 = usersData;
  TestData2.forEach((data) => {
    if (data.quote3) {
      it("Data driven Testing using multiple set of data & get particular data", function () {
        demoObj.visitSite(demoObj.google);
        cy.get(demoObj.gsearchbar).type(data.quote3 + "{enter}");
      });
    }
  });

  it("Upload:Single file in Cypress", function () {
    demoObj.visitSite(demoObj.uploadFileUrl);
    cy.get(demoObj.uploadFile).attachFile({
      filePath: "shelf-desktop.jpg",
      fileName: "imagee",
    });
    cy.get(demoObj.submitFile).click();
    cy.get(demoObj.fileArea).should("have.text", "File Uploaded!");
  });

  it("Upload :Drag and Drop", function () {
    demoObj.visitSite(demoObj.uploadFileUrl);
    cy.get(demoObj.drag).attachFile("shelf-desktop.jpg", {
      subjectType: "drag-n-drop",
    });
    cy.get(demoObj.dragArea).should(
      "contain",
      "shelf"
    );
  });
  it("Multiple file uploads", function () {
    demoObj.visitSite(demoObj.uploadFileUrl);
    cy.get(demoObj.uploadFile).attachFile(["shelf-desktop.jpg", "example.json"]);
    cy.get(demoObj.submitFile).click();
    cy.get(demoObj.fileArea).should("have.text", "File Uploaded!");
  });


  it("Multiple file uploads",function(){
    demoObj.visitSite(demoObj.fileUrl);
    cy.get(demoObj.multiUploads).attachFile(["shelf-desktop.jpg", "example.json"]);
    cy.get(demoObj.multiFileArea).should('have.text',"Files You Selected:")
  })

  it("File Upload in Shadow Dom",function(){
    demoObj.visitSite(demoObj.shadowDomUrl);
    cy.get(demoObj.shadowFileInput,{includeShadowDom:true}).attachFile(["shelf-desktop.jpg", "example.json"]);
    cy.get(demoObj.shadowFileAra,{includeShadowDom:true}).should('be.visible')

  });

  it("Handling dropdown in cypress",function(){
    demoObj.visitSite(demoObj.dropdownUrl);
    cy.get("#zcf_address_country")
    .select("Monaco")
    .should('have.value',"Monaco")
})

 it("Dropdown without select tag",function(){
  demoObj.visitSite(demoObj.dropdownUrl2);
  cy.get("label[for='billing_country']").scrollIntoView()
  demoObj.clickElement(demoObj.input_selector);
  demoObj.Typing(demoObj.inputfield,"Saint Helena" +"{enter}");
cy.get(demoObj.input_selector).should('have.text',"Saint Helena");

 })

 it("handling Autosuggest Dropdown",function(){
  demoObj.visitSite(demoObj.wikiUrl);
  demoObj.Typing(demoObj.winput,"delhi");
 cy.get(demoObj.element2).contains("Delhi Metro").click()
 cy.get(demoObj.heading).should('be.visible');
  
 })

 it("Handling Dynamic dropdown",function(){
  demoObj.visitSite(demoObj.google);
  demoObj.Typing(demoObj.gsearchbar ,"delhi capitals");
  cy.get(demoObj.dynamicobj).should('have.length',13);
  cy.get(demoObj.dynamicobj).as('dynamicElements');
  cy.get('@dynamicElements')
  .each(($el, index, $list) => {
    if ($el.text()== 'Delhi Capitals') {
      cy.wrap($el).click()
    }
    cy.wait(3000)
   cy.get(demoObj.gsearchbar).should("be.visible")
 })

 })

 it("Handling datepicker in cypress", function(){
  demoObj.visitSite(demoObj.datepickUrl);
  cy.frameLoaded(".demo-frame");
  cy.iframe().find(demoObj.date).type("6/23/2022");
  //cy.get(".demo-frame").should("contain","2022")

 })

});

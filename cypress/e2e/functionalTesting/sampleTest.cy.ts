import { should } from "chai";
import { practicePage } from "../../../PageObjects/practicePage";
import "cypress-file-upload";
import "cypress-iframe";

import usersData from "../../fixtures/example.json";


///<reference types="cypress-iframe" />
///<reference types= "Cypress" />
const demoObj = new practicePage();

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


  it.only("Multiple file uploads",function(){
    demoObj.visitSite(demoObj.fileUrl);
    cy.get(demoObj.multiUploads).attachFile(["shelf-desktop.jpg", "example.json"]);
    cy.get(demoObj.multiFileArea).should('have.text',"Files You Selected:")
  })

  it.only("File Upload in Shadow Dom",function(){
    demoObj.visitSite(demoObj.shadowDomUrl);
    cy.get(demoObj.shadowFileInput,{includeShadowDom:true}).attachFile(["shelf-desktop.jpg", "example.json"]);
    cy.get(demoObj.shadowFileAra,{includeShadowDom:true}).should('be.visible')

  })
});

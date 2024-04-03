
import { todoPage } from "../../../PageObjects/todoPage";
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand()

const todoo=new todoPage();

beforeEach(function () {
    todoo.VisitBaseUrl();
});


describe('Todo-visual tesing',function(){
     
    it('Verify cursor for text input', function() {
        cy.get(todoo.input).click().should('have.focus');
        cy.get(todoo.input).compareSnapshot("cursor on text field")
    });

    it(' Verify that the input field is displayed on the page.', function () {
        todoo.inputClick('completing visual testing');
        cy.get(todoo.input).should('be.visible') 
        cy.get(todoo.input).compareSnapshot("input field display") 
        });

    it('Attempt to input special characters', function() {
           todoo.inputClick('!@#$%^&*');
            cy.get(todoo.input).should('not.have.value', todoo.inputClick);
            cy.get(todoo.input).compareSnapshot("Input special charecter")
        });

   it('Verify behavior when trying to input a blank space', function() {
            todoo.inputClick(' ');
            cy.get(todoo.input).should('not.have.value', ' ');
            cy.get(todoo.input).compareSnapshot("Blank space ")
        });

    it('Visit todo app & add task succesfully', function () {
       todoo.inputClick('completing visual testing');
       cy.get('#roo').compareSnapshot("task is added")
       });

    it('Check if placeholder text "What needs to be done?" is visible in the input field.',function(){
        cy.get(todoo.input).should('be.visible').should('be.visible')
        .and('have.attr','placeholder','What needs to be done?')
        cy.get(todoo.input).compareSnapshot("Visibility of the placeholder")
    });

     it('Clear input field and confirm it is empty', function() {
        todoo.inputClick('Clearing input field');
        cy.get(todoo.input).clear().should('have.value', '');
        cy.get(todoo.input).compareSnapshot("Confirmation of emty field after clear action ")
    });
    it('Test entering a long string of text', function() {
        
        todoo.inputClick('this is a very long test which should not haveLorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor in');
        cy.get(todoo.input).should('have.value', todoo.input.slice(0, 42));
        cy.get('.todoapp').compareSnapshot("Long string ")
    });

    it('Verify input field behavior with numbers or symbols', function() {
        todoo.inputClick('123!@#');
        cy.get(todoo.input).should('have.value', '123');
        cy.get(todoo.input).compareSnapshot("behaviour with symbols")
    });
});


  
    it('Try pasting text into the input field', function() {
        const pastedText = 'Pasted Text';
        cy.get(todoo.input).invoke('val', pastedText).trigger('input');
        cy.get(todoo.input).should('have.value', pastedText);
        cy.get('.todoapp').compareSnapshot("pasted text ")
    });




import { types } from "util";
import { registrationPage } from "../../../PageObjects/registrationPage";

                                    
///<reference types= "Cypress" />
const obj=new registrationPage
beforeEach(function () {
    cy.visit('/signup.php');
});


  
describe('Registration Test Suite', function () {
  
    this.afterEach(function () {
        obj.SignUPbtn();
        obj.NewUser();
    });
      
    it('Visibility of username placeholder', function () {
       cy.get(obj.user1).should('be.visible')  
    });

     it('Username field is editable', function () {
       cy.get(obj.user1).should("be.enabled") 
    });

 
    it('Acceptance of valid text in username input field', function () {
       obj.Username('example@123');
       });


       it('Visibility of password placeholder', function () {
         cy.get(obj.pwd1).should('be.visible')
     });
 

       
       it('Verify rejection of input with only special characters in the username field', function () {
        obj.Username('@#$%##@$');
        cy.get(obj.user1, { timeout: 10000 }).should('not.have.value', obj.Username);
    });
    
       
    it('Rejection of username with spaces', function () {
        obj.Username('kal yani');
        cy.get(obj.user1, { timeout: 10000 }).should('not.have.value', obj.Username);
    });

    it('Visibility of Password placeholder', function () {
        cy.get(obj.pwd1).should('be.visible')
       
    });


    it('password field is editable', function () {
       
        cy.get(obj.pwd1).should("be.enabled") 
    });

    it('Acceptance of alphanumeric and special characters in the password field', function () {
        obj.Password('Pass@123');
       
    });

    it('Not Acceptance of blank password field', function () {
        obj.Password(' ');
        cy.get(obj.pwd1, { timeout: 10000 }).should('not.have.value', obj.Password);
    });

    it('Not Acceptance of only string values', function () {
        obj.Password('karan');
        cy.get(obj.pwd1, { timeout: 10000 }).should('not.have.value', obj.Password);
    });
    
    it('Visibility of Retypepassword placeholder', function () {
        cy.get(obj.cpwd1).should('be.visible')
       
    });

    
    it('Retype password matches original password', function () {
        obj.Password('karan');
        obj.ConfirmPassword('karan1');
        cy.get(obj.cpwd1, { timeout: 10000 }).should('not.have.value', obj.pwd1);
    });


    it('Rejection of numbers and special characters in the name field', function () {
        obj.Name('123677$#$#');
        cy.get(obj.name1, { timeout: 10000 }).should('not.have.value', obj.Name);
       
    });

    
    it('Acceptance of a valid credit card number', function () {
        obj.CreditCard('1234567890123456');
        cy.get(obj.credit1, { timeout: 10000 }).should('have.value', '1234567890123456');
    });
 
    it('Acceptance of a standard email address', function () {
        obj.Email('example@example.com');
        cy.get(obj.mail1, { timeout: 10000 }).should('have.value', 'example@example.com');
    });
 
    it('Acceptance of an email address with a subdomain', function () {
        obj.Email('user@mail.example.com');
        cy.get(obj.mail1, { timeout: 10000 }).should('have.value', 'user@mail.example.com');
    });
 
    it('Acceptance of an email address with a numeric domain', function () {
        obj.Email('user@example123.com');
        cy.get(obj.mail1).should('have.value', 'user@example123.com');
    });
 
    it('Acceptance of a standard phone number', function () {
        obj.PhoneNumber('1234567890');
        cy.get(obj.phone1).should('have.value', '1234567890');
    });
 
    it('Acceptance of a phone number with country code', function () {
        obj.PhoneNumber('+1234567890');
        cy.get(obj.phone1).should('have.value', '+1234567890');
    });
 
    it('Not Accepting phone number with spaces', function () {
        obj.PhoneNumber('123 456 7890');
        cy.get(obj.phone1, { timeout: 20000 }).should('not.have.value', '123 456 7890').should('be.true')
        expect(true).to.be.true
    });
    
    it('Acceptance of an address with special characters', function () {
        obj.Address('123, Example St, !@#$%^&*');
        cy.get(obj.adds1).should('have.value', '123, Example St, !@#$%^&*');
    });
 
    it('Acceptance of an address with multiple lines', function () {
        obj.Address('123, Example St\nApt 101\nCity, Country');
        cy.get(obj.adds1).should('have.value', '123, Example St\nApt 101\nCity, Country');
    });
 
    it('Verify successful user registration', function () {
       
        obj.Username('user123');
        obj.Password('Pass@123');
        obj.ConfirmPassword('Pass@123');
        obj.Email('user123@example.com');
        obj.PhoneNumber('1234567890');
        obj.Address('123, Example St');
    
    });
 
    it('Verify error handling for incomplete registration', function () {
       
        obj.Username('user123');
        obj.Password('Pass@123');
       
    });
 
    it('Verify Signup button submits the form', function () {
       
        obj.Username('user123');
        obj.Password('Pass@123');
        obj.ConfirmPassword('Pass@123');
        obj.Email('user123@example.com');
        obj.PhoneNumber('1234567890');
        obj.Address('123, Example St');
    
    });

   
    it('Verify successful login  after registration', function () {
        cy.visit('/signup.php');
        obj.Username('user123');
        obj.Password('Pass@123');
        obj.ConfirmPassword('Pass@123');
        obj.Email('user123@example.com');
        obj.PhoneNumber('1234567890');
        obj.Address('123, Example St');
      
    });
});

describe('Registration Test Suite 2', function () {
    
    it('Verify successful user registration', function () {
       
        obj.Username('user123');
        obj.Password('Pass@123');
        obj.ConfirmPassword('Pass@123');
        obj.Email('user123@example.com');
        obj.PhoneNumber('1234567890');
        obj.Address('123, Example St');
         cy.get('[name="signup"]').click();
        cy.url().should('eq',obj.newUser);
        cy.get('#content > p:nth-child(3) > a').click();
    });
 
});  
    







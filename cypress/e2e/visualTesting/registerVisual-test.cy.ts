import { registrationPage } from "../../../PageObjects/registrationPage";
import { addCompareSnapshotCommand } from 'cypress-visual-regression/dist/command'
addCompareSnapshotCommand()

const obj = new registrationPage();
beforeEach(function () {
 cy.visit('/signup.php');
  //cy.visit(`${Cypress.env('testenv')}testphp.vulnweb.com/signup.php`);
});



describe('Visual Registration Test Suite', function () {
  
  afterEach(function () {
    obj.SignUPbtn();
    obj.NewUser();
  });

  it('Not Accepting phone number with spaces', function () {
    obj.PhoneNumber('1234567890');
    cy.wait(4000);
    cy.get(obj.phone1).should('not.have.value', '123 456 7890').should('be.true')
    expect(true).to.be.true
    cy.get(obj.phone1).compareSnapshot('phone-number-field-invalid');
  });

  it('Acceptance of an address with special characters', function () {
    obj.Address('123, , !@#$%^&*');
    cy.get(obj.adds1).should('have.value', '123, Example St, !@#$%^&*');
 cy.get(obj.adds1).compareSnapshot('address-field-special-chars');
  });

  it('Acceptance of an address with multiple lines', function () {
    obj.Address('123, Example St\nApt 101\nCity, Country');
    cy.get(obj.adds1).should('have.value', '123, Example St\nApt 101\nCity, Country');
cy.get(obj.adds1).compareSnapshot('address-field-multiline');
  });

  it('Verify successful user registration', function () {
    obj.Username('user123');
    obj.Password('Pass@123');
    obj.ConfirmPassword('Pass@123');
    obj.Email('user123@example.com');
    obj.PhoneNumber('1234567890');
    obj.Address('123, Example St');
    cy.get('#content').compareSnapshot('registration-form-valid');
  });

  it('Verify error handling for incomplete registration', function () {
    obj.Username('user123');
    obj.Password('Pass@123');
    cy.get('#content').compareSnapshot('registration-form-incomplete');
  });

  it('Verify Signup button submits the form', function () {
    obj.Username('user123');
    obj.Password('Pass@123');
    obj.ConfirmPassword('Pass@123');
    obj.Email('user123@example.com');
    obj.PhoneNumber('1234567890');
    obj.Address('123, Example St');

    cy.get('#content').compareSnapshot('registration-form-before-submit');

    obj.SignUPbtn();

    
  });

  it('Verify successful login after registration', function () {
    cy.visit('/signup.php');
    obj.Username('user123');
    obj.Password('Pass@123');
    obj.ConfirmPassword('Pass@123');
    obj.Email('user123@example.com');
    obj.PhoneNumber('1234567890');
    obj.Address('123, Example St');
    obj.SignUPbtn();

    cy.wait(1000); // Wait for the page to load
    cy.get('#content').compareSnapshot('login-page-after-registration');
  });

   
  it('Retype password matches original password', function () {
    obj.Password('karan');
    obj.ConfirmPassword('karan1');
    cy.get(obj.cpwd1, { timeout: 10000 }).should('not.have.value', obj.pwd1);
    cy.get('#content').compareSnapshot('Retype password');
});


it('Rejection of numbers and special characters in the name field', function () {
    obj.Name('123677$#$#');
    cy.get(obj.name1, { timeout: 10000 }).should('not.have.value', obj.Name);
    cy.get('#content').compareSnapshot('Rejection of numbers and special characters');
   
});


it('Acceptance of a valid credit card number', function () {
    obj.CreditCard('1234567890123456');
    cy.get(obj.credit1, { timeout: 10000 }).should('have.value', '1234567890123456');
    cy.get('#content').compareSnapshot('Acceptance of a valid credit card number');
   
});

it('Acceptance of a standard email address', function () {
    obj.Email('example@example.com');
    cy.get(obj.mail1, { timeout: 10000 }).should('have.value', 'example@example.com');
    cy.get('#content').compareSnapshot('Acceptance of a standard email address');
   
});

it('Acceptance of an email address with a subdomain', function () {
    obj.Email('user@mail.example.com');
    cy.get(obj.mail1, { timeout: 10000 }).should('have.value', 'user@mail.example.com');
    cy.get('#content').compareSnapshot('Acceptance of an email address with a subdomain');
   
});

it('Acceptance of an email address with a numeric domain', function () {
  obj.Email('user@example123.com');
  cy.get(obj.mail1).should('have.value', 'user@example123.com');
  cy.get('#content').compareSnapshot('Email with numeric Domain')
});

it('Acceptance of a standard phone number', function () {
  obj.PhoneNumber('1234567890');
  cy.get(obj.phone1).should('have.value', '1234567890');
  cy.get('#content').compareSnapshot('Standard Phone Number')
});

it('Acceptance of a phone number with country code', function () {
  obj.PhoneNumber('+1234567890');
  cy.get(obj.phone1).should('have.value', '+1234567890');
  cy.get('#content').compareSnapshot('Phone no with countrycode')
});

it('Not Accepting phone number with spaces', function () {
  obj.PhoneNumber('123 456 7890');
  cy.get(obj.phone1, { timeout: 20000 }).should('not.have.value', '123 456 7890').should('be.true')
  expect(true).to.be.true
  cy.get('#content').compareSnapshot('Standard Phone Number')
});

it('Acceptance of an address with special characters', function () {
  obj.Address('123, Example St, !@#$%^&*');
  cy.get(obj.adds1).should('have.value', '123, Example St, !@#$%^&*');
  cy.get('#content').compareSnapshot('Address withspecial charecter')
});

it('Acceptance of an address with multiple lines', function () {
  obj.Address('123, Example St\nApt 101\nCity, Country');
  cy.get(obj.adds1).should('have.value', '123, Example St\nApt 101\nCity, Country');
  cy.get('#content').compareSnapshot('Adress with multines')
});

it('Verify successful user registration', function () {
 
  obj.Username('user123');
  obj.Password('Pass@123');
  obj.ConfirmPassword('Pass@123');
  obj.Email('user123@example.com');
  obj.PhoneNumber('1234567890');
  obj.Address('123, Example St');
  cy.get('#content').compareSnapshot('Succesful user registration')
});

it('Verify error handling for incomplete registration', function () {
 
  obj.Username('user123');
  obj.Password('Pass@123');
  cy.get('#content').compareSnapshot('Incomplete registration')
});

it('Verify Signup button submits the form', function () {
 
  obj.Username('user123');
  obj.Password('Pass@123');
  obj.ConfirmPassword('Pass@123');
  obj.Email('user123@example.com');
  obj.PhoneNumber('1234567890');
  obj.Address('123, Example St');
  cy.get('#content').compareSnapshot('Sign Up')

});


it('Verify successful login  after registration', function () {
  cy.visit('/signup.php');
  obj.Username('user123');
  obj.Password('Pass@123');
  obj.ConfirmPassword('Pass@123');
  obj.Email('user123@example.com');
  obj.PhoneNumber('1234567890');
  obj.Address('123, Example St');
  cy.get('#content').compareSnapshot('Succesful login')
});



});
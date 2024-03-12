describe('Registration Test Suite', function () {
    it('Should visit Google website', function () {
        cy.visit('/signup.php');
    });
    it('Acceptance of valid text in username input field', function () {
        cy.visit("/signup.php");
        const validUsername = 'exampleUser123';
        cy.get('[name="uuname"]').type(validUsername);
    });
    it('Rejection of input with only special characters/symbols in username field', function () {
        cy.visit("/signup.php");
        const invalidUsername = '@#$%^&*';
        cy.get('[name="uuname"]').type(invalidUsername);
    });

    it('Verify rejection of username with spaces',function(){
        cy.visit("/signup.php");
        const uname='kara n';
        cy.get('[name="uuname"]').type(uname);
    });
    

    it('Acceptance alphanumeric and special charecters in password field',function(){
        cy.visit("/signup.php");
        const validPassword='Password@123';
        cy.get('[name="upass"]').type(validPassword);
    });

});

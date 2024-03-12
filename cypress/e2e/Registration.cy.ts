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
});

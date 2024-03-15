import { Login_Elements } from "../../PageObjects/PageElement/Login_Elements";

const obj2 = new Login_Elements();
describe('Login Test Suite', function () {
  
    beforeEach(function () {
        cy.visit('/login.php');
    });


    

       it('Visibility of username placeholder', function () {
         cy.get(obj2.userLogin).should('be.visible')
         obj2.SignInBtn()    });

    it('Visibility of password placeholder', function () {
        cy.get(obj2.pwdLogin).should('be.visible')
        obj2.SignInBtn();
   });

    it('should successfully login with valid credentials', function(){
       obj2.UsernameLogin('test');
        obj2.PasswordLogin('test');
        obj2.SignInBtn();
       cy.visit('http://testphp.vulnweb.com/userinfo.php');

       cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        
       
    });

  
     it('Logout functionality', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        cy.visit('http://testphp.vulnweb.com/userinfo.php');
 
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="login.php"]',{ timeout: 20000 }).contains('About Us').click();
        cy.visit('http://testphp.vulnweb.com/logout.php');
 
         
     });

    
     it('After navigating to userinfo page naviate to About section', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        cy.visit('http://testphp.vulnweb.com/userinfo.php');
 
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="http://www.acunetix.com"]').contains('About Us').click();
       // cy.visit('https://www.acunetix.com/');
         
        
     });

    

   
     
    it('should display an error message for invalid username', function(){
      
        obj2.UsernameLogin('invalid');
        obj2.PasswordLogin('test');  
        obj2.SignInBtn();
    });
    

    
    it('After navigating to userinfo page navigate to Cart', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        cy.visit('http://testphp.vulnweb.com/userinfo.php');
 
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="cart.php"]',{ timeout: 20000 }).first().click();
       // cy.visit('https://www.acunetix.com/');
         
     });

      it('After Login navigate to Update Profile', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        cy.visit('http://testphp.vulnweb.com/userinfo.php');
 
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="userinfo.php"]',{ timeout: 20000 }).first().click();
       
         
     });

     it('After Login navigate to Home page', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        cy.visit('http://testphp.vulnweb.com/userinfo.php');
 
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="logout.php"]',{ timeout: 20000 }).first().click();
       
         
     });

     it(' Go to browse artist section after login', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        cy.visit('http://testphp.vulnweb.com/userinfo.php');
 
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="artists.php"]',{ timeout: 20000 }).first().click();
      
         
     });

    it('should display an error message for empty username', function(){
    
        obj2.UsernameLogin(' ');
        obj2.PasswordLogin('test');
        obj2.SignInBtn();
    });

    it('should display an error message for empty password',function(){
        
        obj2.UsernameLogin('test');
        obj2.PasswordLogin(' ');
        obj2.SignInBtn();
    });





});
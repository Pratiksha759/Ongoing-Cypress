
import { loginPage } from "../../../PageObjects/loginPage";
const obj2 = new loginPage();
beforeEach(function () {
    cy.visit('/login.php');
});
function Userpage(){
    cy.visit('http://testphp.vulnweb.com/userinfo.php'); 
}
function logOut1(){
    cy.visit('http://testphp.vulnweb.com/logout.php');
}







describe('Login Test Suite', function () {
  
   it('Visibility of username placeholder', function () {
         cy.get(obj2.userLogin).should('be.visible')
         obj2.SignInBtn()  
          });

    it('Visibility of password placeholder', function () {
        cy.get(obj2.pwdLogin).should('be.visible')
        obj2.SignInBtn();
   });

    it('should successfully login with valid credentials', function(){
       obj2.UsernameLogin('test');
        obj2.PasswordLogin('test');
        obj2.SignInBtn();
         Userpage();
         obj2.UserInfo();
       //cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        
       
    });

     it('Logout functionality', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         Userpage();
         obj2.UserInfo();
          obj2.Aboutt();
        logOut1();
         
     });

    
     it('After navigating to userinfo page naviate to About section', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         Userpage();
        cy.get('[type="submit"][value="update"]',{ timeout: 40000 }).should('be.visible');
        cy.get('a[href="http://www.acunetix.com"]').contains('About Us').click();
       
         
        
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
         Userpage();
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="cart.php"]',{ timeout: 20000 }).first().click();
      
         
     });

      it('After Login navigate to Update Profile', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         Userpage();
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="userinfo.php"]',{ timeout: 20000 }).first().click();
       
         
     });

     it('After Login navigate to Home page', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         Userpage();
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
        cy.get('a[href="logout.php"]',{ timeout: 20000 }).first().click();
       
         
     });

     it(' Go to browse artist section after login', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         Userpage();
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
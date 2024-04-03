
import { loginPage } from "../../../PageObjects/loginPage";
const obj2 = new loginPage();
beforeEach(function () {
    cy.visit('/login.php');
});


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
         obj2.Userpage();
         obj2.UserInfo();
       
    });

     it('Logout functionality', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         obj2.Userpage();
         obj2.UserInfo();
          obj2.Aboutt();
        obj2.logOut1();
         
     });

    
     it('After navigating to userinfo page naviate to About section', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         obj2.Userpage();
         obj2.UserInfo();
         obj2.Aboutt();
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
         obj2.Userpage();
        obj2.UserInfo();
         obj2.ClickCart();  
     });

      it('After Login navigate to Update Profile', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         obj2.Userpage();
         obj2.UserInfo();
         obj2.Aboutt();
     });

     it('After Login navigate to Home page', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
         obj2.Userpage();
         obj2.UserInfo();
         obj2.Logout();
       
         
     });

     it(' Go to browse artist section after login', function(){
        obj2.UsernameLogin('test');
         obj2.PasswordLogin('test');
         obj2.SignInBtn();
        obj2. Userpage();
         obj2.UserInfo();
         obj2.ArtistInfo();
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
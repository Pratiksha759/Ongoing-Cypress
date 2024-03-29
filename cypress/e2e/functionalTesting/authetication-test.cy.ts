
import { authenticationPage } from "../../../PageObjects/authenticationPage";

beforeEach(function () {
  cy.visit('https://authenticationtest.com/');
});

const obj3 = new authenticationPage;
const url = 'https://authenticationtest.com/simpleFormAuth/';
const linkSelector = 'a[href="https://authenticationtest.com/simpleFormAuth/"]';
const url1 = 'https://authenticationtest.com/complexAuth/';
const linkSelector1 = 'a[href="https://authenticationtest.com/complexAuth/"]';
function complexUrl(){
  cy.visit('https://authenticationtest.com/complexAuth/');
  }
  function LoginSucces(){
    cy.visit('https://authenticationtest.com/loginSuccess/');
    }
  function LoginFail(){
  cy.visit('https://authenticationtest.com/loginFail/');
      }
  function visit1(url: string, linkSelector: any) {
    cy.get(linkSelector, { timeout: 20000 }).first().click();
    cy.visit(url);}
  function visit2(url1: string, linkSelector: any) {
    cy.get(linkSelector1, { timeout: 20000 }).first().click();
    cy.visit(url1);}




describe('Authetication Test Suite', function () {

  it('should successfully login with valid credentials in simple authentication form', function(){
      visit1(url,linkSelector);
        obj3.emailAuth('simpleForm@authenticationtest.com');
         obj3.PasswordAuth('pa$$w0rd');
         obj3.SignInBtnAuth;
         LoginSucces();
     });

     it('should not accept invalid username in simple authentication form', function(){
        visit1(url,linkSelector);
        obj3.emailAuth('simpleForm@ticationtest.com');
         obj3.PasswordAuth('pa$$w0rd');
         obj3.SignInBtnAuth;
          LoginFail();  
     });

  it('should not accept invalid password in simple authentication form', function(){
        visit1(url,linkSelector);
        obj3.emailAuth('simpleForm@authenticationtest.com');
         obj3.PasswordAuth('passInvalid');
         obj3.SignInBtnAuth;
         visit2(url1,linkSelector1);
      });


  it('should successfully login with valid credentials in Complex Authentication form', function(){
        visit2(url1,linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           LoginSucces();
       });


       it('should not accept invalid username in Complex Authentication form', function(){
        visit2(url1,linkSelector1);
          obj3.emailAuth('complex@aicationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           complexUrl();
        });


       it('should not accept invalid password in Complex Authentication form', function(){
        visit2(url1,linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
            complexUrl(); 

            });


       it('should not submit without selecting dropdown in Complex Authentication form', function(){
        visit2(url1,linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           complexUrl();
         
           
          
       });

       it('should not submit without selecting checkbox in Complex Authentication form', function(){
        visit2(url1,linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.selectDropdown('Please Log Me In');
          obj3.SignInBtnAuth;
          complexUrl();
         });

         
       it('should not submit if both email and password are invalid in Complex Authentication form', function(){
        visit2(url1,linkSelector1);
          obj3.emailAuth('complex@auhnticationtest.com');
           obj3.PasswordAuth('pa$$w0d');
           obj3.selectDropdown('Please Log Me In');
         obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           complexUrl();
         });


         it('should not submit if both dropdwon and checkbox are not checked in Complex Authentication form', function(){
            visit2(url1,linkSelector1);
              obj3.emailAuth('complex@auhnticationtest.com');
               obj3.PasswordAuth('pa$$w0d');
               obj3.selectDropdown('Please Log Me In');
             obj3.checkCheckbox('I love form manipulation');
               obj3.SignInBtnAuth;
               complexUrl();
             });
  
    
  
       

   
    

});
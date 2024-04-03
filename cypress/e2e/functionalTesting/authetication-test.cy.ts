
import { authenticationPage } from "../../../PageObjects/authenticationPage";


const obj3 = new authenticationPage;
beforeEach(function () {
  obj3.HomePage();
});



describe('Authetication Test Suite', function () {

  it('should successfully login with valid credentials in simple authentication form', function(){
      obj3.visit1(obj3.url,obj3.linkSelector);
        obj3.emailAuth('simpleForm@authenticationtest.com');
         obj3.PasswordAuth('pa$$w0rd');
         obj3.SignInBtnAuth;
         obj3.LoginSucces();
     });

     it('should not accept invalid username in simple authentication form', function(){
        obj3.visit1(obj3.url,obj3.linkSelector);
        obj3.emailAuth('simpleForm@ticationtest.com');
         obj3.PasswordAuth('pa$$w0rd');
         obj3.SignInBtnAuth;
          obj3.LoginFail();  
     });

  it('should not accept invalid password in simple authentication form', function(){
       obj3.visit1(obj3.url,obj3.linkSelector);
        obj3.emailAuth('simpleForm@authenticationtest.com');
         obj3.PasswordAuth('passInvalid');
         obj3.SignInBtnAuth;
         obj3.visit2(obj3.url1,obj3.linkSelector1);
      });


  it('should successfully login with valid credentials in Complex Authentication form', function(){
        obj3.visit2(obj3.url1,obj3.linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           obj3.LoginSucces();
       });


       it('should not accept invalid username in Complex Authentication form', function(){
        obj3.visit2(obj3.url1,obj3.linkSelector1);
          obj3.emailAuth('complex@aicationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           obj3.complexUrl();
        });


       it('should not accept invalid password in Complex Authentication form', function(){
        obj3.visit2(obj3.url1,obj3.linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
            obj3.complexUrl(); 

            });


       it('should not submit without selecting dropdown in Complex Authentication form', function(){
        obj3.visit2(obj3.url1,obj3.linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           obj3.complexUrl();
         
           
          
       });

       it('should not submit without selecting checkbox in Complex Authentication form', function(){
        obj3.visit2(obj3.url1,obj3.linkSelector1);
          obj3.emailAuth('complex@authenticationtest.com');
           obj3.PasswordAuth('pa$$w0rd');
           obj3.selectDropdown('Please Log Me In');
           obj3.SignInBtnAuth;
           obj3.complexUrl();
         });

         
       it('should not submit if both email and password are invalid in Complex Authentication form', function(){
        obj3.visit2(obj3.url1,obj3.linkSelector1);
          obj3.emailAuth('complex@auhnticationtest.com');
           obj3.PasswordAuth('pa$$w0d');
           obj3.selectDropdown('Please Log Me In');
         obj3.checkCheckbox('I love form manipulation');
           obj3.SignInBtnAuth;
           obj3.complexUrl();
         });


         it('should not submit if both dropdwon and checkbox are not checked in Complex Authentication form', function(){
            obj3.visit2(obj3.url1,obj3.linkSelector1);
              obj3.emailAuth('complex@auhnticationtest.com');
               obj3.PasswordAuth('pa$$w0d');
               obj3.selectDropdown('Please Log Me In');
             obj3.checkCheckbox('I love form manipulation');
               obj3.SignInBtnAuth;
              obj3. complexUrl();
             });
  
    
  
       

   
    

});
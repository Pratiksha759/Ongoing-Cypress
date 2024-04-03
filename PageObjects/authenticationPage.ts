export class authenticationPage {
    authEmail = '[name="email"]';
    authPwd = '[name="password"]';
    ddown = '[name="selectLogin"]';
    cbox = 'input[type="checkbox"]';
    cboxLabel = 'label[for="loveForm"]'; 
    url= 'https://authenticationtest.com/simpleFormAuth/';
    linkSelector = 'a[href="https://authenticationtest.com/simpleFormAuth/"]';
    url1 = 'https://authenticationtest.com/complexAuth/';
    linkSelector1 = 'a[href="https://authenticationtest.com/complexAuth/"]';


    complexUrl(){
        cy.visit('https://authenticationtest.com/complexAuth/');
        }

    LoginFail(){
            cy.visit('https://authenticationtest.com/loginFail/');
         }

    LoginSucces(){
            cy.visit('https://authenticationtest.com/loginSuccess/');
            }

     HomePage(){
                cy.visit('https://authenticationtest.com/');
    }
        
      
    visit1(url: string, linkSelector: any) {
            cy.get(linkSelector, { timeout: 20000 }).first().click();
            cy.visit(url);}

     visit2(url1: string, linkSelector1: any) {
                cy.get(linkSelector1, { timeout: 20000 }).first().click();
                cy.visit(url1);}

    emailAuth(uname: any) {
        cy.get(this.authEmail).type(uname);
    }

    PasswordAuth(pwd: any) {
        cy.get(this.authPwd).type(pwd);
    }

    SignInBtnAuth() {
        cy.get('[type="submit"][value="Log In"]').click();
    }

    selectDropdown(option: string) {
        cy.get(this.ddown).select(option).click;
    }

    checkCheckbox(label: string) {
        
        cy.get(this.cboxLabel).click();
    }
   
}

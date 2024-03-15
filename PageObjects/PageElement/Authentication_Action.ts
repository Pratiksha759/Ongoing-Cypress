export class Authentication_Action {
    authEmail = '[name="email"]';
    authPwd = '[name="password"]';
    ddown = '[name="selectLogin"]';
   // cbox = '[name="loveForm"]';
    cbox = 'input[type="checkbox"]';
    cboxLabel = 'label[for="loveForm"]'; 

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

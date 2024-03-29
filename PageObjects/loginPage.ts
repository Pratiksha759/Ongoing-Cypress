export class loginPage {
    userLogin = '[name="uname"]';
    pwdLogin = '[name="pass"]';


    UsernameLogin(uname: any) {
        cy.get(this.userLogin).type(uname);
    }

    PasswordLogin(pwd: any) {
        cy.get(this.pwdLogin).type(pwd);
    }

    SignInBtn() {
        cy.get('[type="submit"][value="login"]').click();
    }
    
    UserInfo(){
        cy.get('[type="submit"][value="update"]',{ timeout: 20000 }).should('be.visible');
    }

    Aboutt(){
        cy.get('a[href="login.php"]',{ timeout: 40000 }).contains('About Us').click();
    }
   
}

export class Login_Elements {
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

   
}

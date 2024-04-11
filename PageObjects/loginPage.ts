export class loginPage {
    userLogin = '[name="uname"]';
    pwdLogin = '[name="pass"]';

    Userpage(){
        cy.visit('http://testphp.vulnweb.com/userinfo.php'); 
    }

    logOut1(){
        cy.visit('http://testphp.vulnweb.com/logout.php');
    }

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
        cy.get('[type="submit"][value="update"]',{ timeout: 80000 }).should('be.visible');
    }

    Aboutt(){
        cy.get('a[href="login.php"]',{ timeout: 80000 }).contains('About Us').click();
    }
   
    ClickCart(){
        cy.get('a[href="cart.php"]',{ timeout: 80000 }).first().click();
      
    }

    Logout(){
        cy.get('a[href="logout.php"]',{ timeout: 40000 }).first().click();
    }

    ArtistInfo(){
        cy.get('a[href="artists.php"]',{ timeout: 70000 }).first().click();
    }
}

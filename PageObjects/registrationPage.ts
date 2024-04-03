export class registrationPage{

    user1='[name="uuname"]'
    pwd1='[name="upass"]'
    cpwd1='[name="upass2"]'
    name1='[name="urname"]'
    credit1='[name="ucc"]'
    mail1='[name="uemail"]'
    phone1='[name="uphone"]'
    adds1='[name="uaddress"]'
    content='#content'
    newUser='http://testphp.vulnweb.com/secured/newuser.php'

   Username(unamee:string){
        cy.get(this.user1).type(unamee);
    }

    Password(pwd:any){
        cy.get(this.pwd1).type(pwd);
    }

    ConfirmPassword(cpwd:any){
        cy.get(this.cpwd1).type(cpwd);
    }

    Name(namee:string){
        cy.get(this.name1).type(namee);
    }

   CreditCard(credit:any){
    cy.get(this.credit1).type(credit);
   }
   
   Email(mail:any){
    cy.get(this.mail1).type(mail);
   }

   PhoneNumber(phonee:string){
    cy.get(this.phone1).type(phonee);
   }

   Address(adds:any){
    cy.get(this.adds1).type(adds);
   }

   SignUPbtn(){
    cy.get('[name="signup"]').click;
   }

   NewUser(){
    cy.visit("http://testphp.vulnweb.com/secured/newuser.php");
   }
  
 
}
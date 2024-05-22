
export class practicePage {
    demoUrl: string = "https://demo.automationtesting.in/Index.html";
    sec1= "#ui-id-1";
    email='#email';
    go="#enterimg"
    

    visitSite(url: string): void {
        cy.visit(url);
    }

    clickElement(selector: string): void {
        cy.get(selector).click();
    }

Typing(val3:any,val4:any){
    cy.get(val3).type(val4)
}
}
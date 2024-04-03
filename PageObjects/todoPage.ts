export class todoPage{

    input='#todo-input'


    VisitBaseUrl(){
        cy.visit('https://todomvc.com/examples/react/dist/#');
    }

    inputClick(input1:string){
        cy.get(this.input, { timeout: 10000 })
        .type(`${input1}{enter}`);
    }
}
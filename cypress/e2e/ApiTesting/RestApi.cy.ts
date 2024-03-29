import { method } from "cypress/types/bluebird";
/// <reference types="cypress" />


describe("HTTP Requests", () => {
    it('Get Call for status code validation', () => {
        cy.request('https://reqres.in/api/users/2').then((response) => {
            cy.log(JSON.stringify(response.body.data.email))
        })
    })

    it('Header validation', () => {
        cy.request('https://reqres.in/api/users/2').as('user')
        cy.get('@user')
            .its('headers')
            .its('content-type')
            .should('include', 'application/json')

        cy.get('@user')
            .its('headers')
            .its('connection')
            .should('include', 'keep-alive')

    });

    it('Get Call for status code validation', () => {
        cy.request('GET', 'https://reqres.in/api/users/2').as('existuser');
        cy.get('@existuser').its('status').should('equal', 200);

        cy.request({ url: '/user/non-exist', failOnStatusCode: false }).as('nonExistUser')
        cy.get('@nonExistUser').its('status').should('equal', 404);

    });

    it('API Tests- GET request', (): void => {
        cy.request({ url: 'https://reqres.in/api/users/2', method: 'GET' }).then((response): void => {
            const responseBody = response.body;
            cy.log(JSON.stringify(responseBody));
            expect(response.status).to.eq(200);
            expect(responseBody.data.id).to.eq(2);
            expect(responseBody.data.last_name).not.to.contain('farnandice');
        });
    });

    it('API Tests- POST request', () => {
        cy.request({
            url: 'https://reqres.in/api/login',
            method: 'POST',
            body: {
                email: "eve.holt@reqres.in",
                password: "cityslicka"
            }
        }).then((response) => {
            const responseBody = response.body;
            cy.wrap(responseBody).its('token').should('equal', 'QpwL5tke4Pnpja7X4');
        });
    });

    it('API Tests- DELETE request', () => {
        cy.request({
            url: 'https://reqres.in/api/user/2',
            method: 'DELETE'
        }).as('deleteuser')

        cy.get('@deleteuser').its('status').should('equal', 204);
    });


    it('API Tests- PUT  request', () => {
        cy.request({
            url: 'https://reqres.in/api/user/2',
            method: 'PUT',
            body:{name :'nameupdate'},
        }).as('putrequest')

        cy.get('@putrequest').its('status').should('equal',200)
        cy.get('@putrequest').then((res)=>{
            expect(res).to.have.property('body').to.have.property('name').to.equal('nameupdate')
        })
    });

    it('API Tests- PATCH request', () => {
        cy.request({
            url: 'https://reqres.in/api/user/2',
            method: 'PATCH',
            body: {
                name: 'morpheus',
                job: 'zion resident'
            }
        }).as('patchrequest')
    
        cy.get('@patchrequest').then((response) => {
            const res = response as unknown as Cypress.Response<any>;
    
            // Check if response has expected status
            expect(res.status).to.equal(200);
    
            // Check if response body contains expected properties
            expect(res.body).to.have.property('name', 'morpheus');
            expect(res.body).to.have.property('job', 'zion resident');
            expect(res.body).to.have.property('updatedAt');
        });
    });
});

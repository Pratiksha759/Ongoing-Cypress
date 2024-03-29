import 'cypress-plugin-api';
import { method } from 'cypress/types/bluebird';

describe("HTTP Requests", function(){

  it('Get Call for status code validation', function(){
    cy.request('GET', 'https://pokeapi.co/api/v2/pokemon/25').as('pokemon');
    cy.get('@pokemon').its('status').should('equal', 200);
  });

  it("API Test-Header Validation", function(){
    cy.request('https://pokeapi.co/api/v2/pokemon/25').as('pokemon');
    cy.get('@pokemon').its('headers').its('content-type').should('include', 'application/json; charset=utf-8');
  });

  it("API Test Validate name value", function(){
    cy.request('https://pokeapi.co/api/v2/pokemon/55').as('pokemonew');
    cy.get('@pokemonew').its('body').should('include', { name: 'golduck' });
  });

  it('API Test-404 validation using Get Method', function(){
    cy.request({
      method: 'GET',
      url: 'https://pokeapi.co/api/v2/pokemon/10000',
      failOnStatusCode: false
    }).as('pokemon');
    cy.get('@pokemon').its('status').should('equal', 404);
  });

  it('GET using httpbin', function(){
    cy.request({
      method: 'GET',
      url: 'https://httpbin.org/get'
    }).then(function(response){
      expect(response.body).to.have.property('url');
    });
  });

  it('Post Request', function(){
    cy.request({
      method: 'POST',
      url: 'https://httpbin.org/post',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'name': 'pratiksha',
        'age': 27
      },
    }).then(function(response){
      expect(response.body).to.have.property('json');
      expect(response.body.json).to.deep.equal({ "name": "pratiksha", "age": 27 });
    });
  });

  it('PUT Request', function(){
    cy.request({
      method: 'PUT',
      url: 'https://httpbin.org/put',
      headers: {
        'content-type': 'application/json'
      },
      body: {
        'name': 'pratiksha ',
        'age': 23
      },
    }).then(function(response){
      expect(response.body).to.have.property('json');
      expect(response.body.json).to.deep.equal({ "name": "pranali", "age": 22 });
    });
  });

});
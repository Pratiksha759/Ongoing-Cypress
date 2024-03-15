// support/index.d.ts
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      login(visit1: any): void;
    }
  }
// support/index.d.ts
/// <reference types="cypress" />

declare namespace Cypress {
    interface Chainable {
      login(name: string): void;
    }
  }

  import './commands';
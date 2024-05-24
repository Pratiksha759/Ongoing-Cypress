/// 

import 'cypress-file-upload';
import { any } from 'cypress/types/bluebird';

// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//

Cypress.Commands.add("interactWithIframe", (iframeSelector:any, action) => {
    cy.get(iframeSelector).then(($iframeElement) => {
      let ibody = $iframeElement.contents().find('body');
      action(ibody);
    });
  });
  

  /// <reference types="cypress" />



/// <reference types="cypress" />

declare global{namespace Cypress {
  interface Chainable<Subject = any> {
    interactWithIframe(iframeSelector: any, action: (ibody: JQuery<HTMLElement>) => void): Chainable<Subject>;
  }
}
}

  
  
  
  

//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
// Cypress.Commands.add('visit1', () => {
//     cy.get('a[href="https://authenticationtest.com/simpleFormAuth/"]', { timeout: 20000 }).first().click();
//     return cy.visit('https://authenticationtest.com/simpleFormAuth/');
// });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
// declare global {
//   namespace Cypress {
//     interface Chainable {
//       login(email: string, password: string): Chainable<void>
//       drag(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       dismiss(subject: string, options?: Partial<TypeOptions>): Chainable<Element>
//       visit(originalFn: CommandOriginalFn, url: string, options: Partial<VisitOptions>): Chainable<Element>
//     }
//   }
// }
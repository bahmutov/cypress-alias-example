/// <reference types="cypress" />

import { Test } from './test'

it('has the right text', () => {
  cy.visit('public/index.html')
  Test.getText('myText')
  // some time later
  cy.get('@myText').should('be.a', 'string')
})

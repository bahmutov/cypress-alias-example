/// <reference types="cypress" />

import { Test } from './test'

it('has the right text', () => {
  cy.visit('public/index.html')
  Test.getText()
  cy.get('@buttonText').should('be.a', 'string')
})

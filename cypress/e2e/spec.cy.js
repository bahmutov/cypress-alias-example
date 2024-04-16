/// <reference types="cypress" />

import { Test } from './test'

it('has the right text', () => {
  cy.visit('public/index.html')
  Test.getText() // it provides the alias '@buttonText'
  cy.get('@buttonText').should('be.a', 'string')
})

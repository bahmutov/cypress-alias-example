/// <reference types="cypress" />

import { Test } from './test'

const test = new Test()

it('has the right text', () => {
  cy.visit('public/index.html')
  test.getText() // it provides the alias '@buttonText'
  cy.get('@buttonText').then((text) => console.log(text))
})

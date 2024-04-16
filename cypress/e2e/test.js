/// <reference types="cypress" />

export const Test = {
  getText() {
    return cy.get('button').invoke('text').as('buttonText')
  },
}

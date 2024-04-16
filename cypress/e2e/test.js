/// <reference types="cypress" />

export class Test {
  getText() {
    return cy.get('button').invoke('text').as('buttonText')
  }
}

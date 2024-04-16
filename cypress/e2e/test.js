/// <reference types="cypress" />

export const Test = {
  /**
   * it provides the alias `@buttonText`
   */
  getText() {
    return cy.get('button').invoke('text').as('buttonText')
  },
}

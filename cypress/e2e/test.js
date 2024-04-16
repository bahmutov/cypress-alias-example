/// <reference types="cypress" />

export const Test = {
  /**
   * it provides the alias `@buttonText`.
   * @param {string} aliasName Default is `buttonText`
   * @example
   *  Test.getText('myText')
   *  cy.get('@myText').should('be.a', 'string')
   * @example
   *  Test.getText()
   *  cy.get('@buttonText').should('equal', 'Click me')
   */
  getText(aliasName = 'buttonText') {
    return cy.get('button').invoke('text').as(aliasName)
  },
}

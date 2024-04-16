export const Test = {
  /**
   * it provides the alias `@buttonText`.
   * @param aliasName Default is `buttonText`
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

  /**
   * Yields the previously set Cypress alias
   * @param aliasName Alias without `@` prefix
   * @example
   *  cy.getText('myText')
   *  // some time later
   *  cy.getAlias('myText').should('equal', 'Click me')
   */
  getAlias(aliasName = 'buttonText') {
    return cy.get<string>('@' + aliasName)
  },
}

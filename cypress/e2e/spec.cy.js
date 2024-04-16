// @ts-check
import { Test } from './test'

it('has the right text', () => {
  cy.visit('public/index.html')
  Test.getText('myText')
  // some time later
  Test.getAlias('myText').then((s) => {
    expect(s).to.be.a('string')
  })
})

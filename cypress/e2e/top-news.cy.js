describe('empty spec', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://api.nytimes.com/svc/topstories/v2/world.json?api-key=zFAFLWv8eNjlWC8oPAFmHbme0aAvA6RZ', {fixture : 'data.json' })
  })
  it('should have a title', () => {
    cy.get('.title').should('have.text', 'NY Times World Top Stories')
  }),
  it('should have a home button', () => {
    cy.get('.home-btn').should('have.text', 'Home')
  }),
  it('should have a clear button', () => {
    cy.get('.clear-search').should('have.text', 'clear')
  }),
  it('should have three articles on the landing page', () => {
    cy.get('.all-article').children().should('have.length', 3)
  }),
  it('should be able to filter articles based on the input', () => {
    cy.get('input').type('japan')
    cy.get('.all-article').children().should('have.length', 1)
  }),
  it('should show a message when there are no search results', () => {
    cy.get('input').type('mno')
    cy.get('.all-article > h1').should('have.text', 'Sorry, there are no current results.')
  }),
  it('should clear the input field', () => {
    cy.get('input').type('japan')
    cy.get('input').should('have.text', '')
  }),
  it('should be taken to a articles detail page when clicking on the `see more` button', () => {
    cy.get('#1').click()
    cy.url().should('eq', 'http://localhost:3000/article/1')
    cy.get(':nth-child(3) > h1').should('have.text', 'Mines, Fires, Rockets: The Ravages of War Bedevil Ukraine’s Farmers')
    cy.get(':nth-child(3) > :nth-child(4)').should('have.text', "A deal allowing ships to start carrying grain from Ukraine solved a logistical problem, but it left a more pressing one for Ukrainian farmers: growing and reaping crops in a war zone.")
    cy.get(':nth-child(3) > :nth-child(5)').should('have.text', "Published: 2022-08-04")
  }),
  it('should take the user back home when clicking the `home` button', () => {
    cy.get('#1').click()
    cy.url().should('eq', 'http://localhost:3000/article/1')

    cy.get('.home-btn').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })
})
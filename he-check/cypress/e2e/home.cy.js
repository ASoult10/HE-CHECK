import ProposalData from '../ProposalData.json'

describe('Home (End2End)', () => {
  it('escribe los datos de la propuesta y se ejecuta el análisis correctamente', () => {
    cy.intercept('POST', '**/api/**').as('analyzeProposal')

    cy.visit('/')

    cy.contains('h1', '¿Qué es HE-CHECK?').should('be.visible')
    cy.contains('h1', '¿Cómo funciona?').should('be.visible')

    cy.contains('h2', 'Topic de la propuesta')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.topic)

    cy.contains('h2', 'Título de la propuesta')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.title)

    cy.contains('h2', 'Tipo de acción')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.actionType)

    cy.contains('h2', 'Duración en meses')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.duration)

    cy.contains('h2', 'Presupuesto total')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.budget)

    cy.contains('h2', 'Resumen de la propuesta')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.summary)

    cy.contains('h2', 'Objetivos de la propuesta')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.objectives)

    cy.contains('h2', 'Metodología / Plan de trabajo')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.methodology)

    cy.contains('h2', 'Impacto esperado')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.impact)

    cy.contains('h2', 'Consorcio')
      .closest('.input-box')
      .find('textarea')
      .type(ProposalData.consortium)

    cy.contains('button', 'Analizar').click()

    cy.contains('p', 'Analizando documento...', { timeout: 10000 }).should('be.visible')

    cy.wait('@analyzeProposal', { timeout: 60000 }).its('response.statusCode').should('eq', 200)

    cy.contains('p', 'Analizando documento...', { timeout: 180000 }).should('not.exist')

    cy.contains('h1', 'Resultados', { timeout: 180000 }).should('be.visible')

    cy.contains('h3', /Excelencia:/, { timeout: 180000 }).should('be.visible')
    cy.contains('h3', /Impacto:/, { timeout: 180000 }).should('be.visible')
    cy.contains('h3', /Implementación:/, { timeout: 180000 }).should('be.visible')
    cy.contains('h3', /Conclusiones:/, { timeout: 180000 }).should('be.visible')

    cy.contains('button', 'Volver', { timeout: 180000 }).should('be.visible')
    cy.contains('button', 'Copiar (JSON)', { timeout: 180000 }).should('be.visible')
  })
})

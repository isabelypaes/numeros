describe('Página principal', () => {
  beforeEach(() => {
    cy.visit('https://numeros-pro-brain.vercel.app');
  })
  it('Deve permitir inserir o número (1-1000) e clicando em "Verificar", mostrará todos os resultados', () => {
    cy.get('input[id="inserirNumero"]').type('75');
    cy.get('[onclick="verificaNumero()"]').click();
    })
})
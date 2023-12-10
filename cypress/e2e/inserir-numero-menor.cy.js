describe('Página principal', () => {
    beforeEach(() => {
      cy.visit('https://numeros-pro-brain.vercel.app');
    })
    it('Deve permitir o usuário inserir o número menor que 1 e, clicando em "Verificar", exibir um pop-up de aviso e não mostrar nenhum resultado', () => {
        cy.get('input[id="inserirNumero"]').type('0');
        cy.get('[onclick="verificaNumero()"]').click();
        })
  })
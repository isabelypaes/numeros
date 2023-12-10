describe('Página principal', () => {
    beforeEach(() => {
      cy.visit('https://numeros-pro-brain.vercel.app');
    })
    it('Deve permitir o usuário inserir o número maior que 1000 e, clicando em "Verificar", exibir um pop-up de aviso e não mostrar nenhum resultado', () => {
        cy.get('input[id="inserirNumero"]').type('1500');
        cy.get('[onclick="verificaNumero()"]').click();
        })
  })
import TestNavbar from './TestNavbar.vue';
import vuetify from './plugins/vuetify';

describe('TestNavbar component tests', () => {
  it.only('Default view', () => {
    cy.mount(TestNavbar, { testProp: 'This is a test prop' }, {
      global: {
        plugins: [vuetify]
      }
    })
      .then(() => {
        console.log(Cypress.vueWrapper.getComponent(TestNavbar).vm.numRows);
        cy.get('[data-cy="navbar"]').should('be.visible');
        cy.get('[data-cy="drawer-btn"]').should('be.visible');
        cy.get('[data-cy="home-img"]').should('be.visible');
        cy.get('[data-cy="home-text"]').should('be.visible');
        cy.get('[data-cy="settings-btn"]').should('be.visible');
        cy.get('[data-cy="displayname-btn"]').should('be.visible');
      });
  });
});

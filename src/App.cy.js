import { mount } from 'cypress/vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'

describe('<App />', () => {
  it('renders', () => {
    // see: https://test-utils.vuejs.org/guide/
    mount(App, {
      global: {
        plugins: [vuetify]
      }
    // cy.mount(App, {}, {
    //   global: {
    //     plugins: [vuetify]
    //   }
     }).then(() => {
      cy.viewport(1024, 900)
      cy.get('[data-cy="v-btn-test"]').should('be.visible');
      console.log(Cypress.vueWrapper.vm.testFoo)
    })
  })
})

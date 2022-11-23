import Navbar from './Navbar.vue';
import vuetify from './plugins/vuetify';

describe('<Navbar />', () => {
  it('renders', () => {
    cy.mount(Navbar, {testProp: 'This is a test prop'}, {
      global: {
        plugins: [vuetify]
      }
    })
      .then(() => {
        expect(Cypress.vueWrapper.getComponent(Navbar).vm.testFoo2).to.eq('Test foo 2');
        Cypress.vueWrapper.getComponent(Navbar).vm.changeFoo('Foo has changed');
        expect(Cypress.vueWrapper.getComponent(Navbar).vm.testFoo2).to.eq('Foo has changed');
      })
  })
})
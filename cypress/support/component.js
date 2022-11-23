// ***********************************************************
// This example support/component.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

import { VApp } from 'vuetify/lib/components/VApp/index.mjs';
import { mount } from 'cypress/vue'
import { h } from 'vue'

// Cypress.Commands.add('mount', mount)


  Cypress.Commands.add("mount", (component, props, args) => {
    return mount(
      { render: () => h(VApp, {}, [h(component, props)]) },
      { ...args }
    );
  });
// Example use:
// cy.mount(MyComponent)
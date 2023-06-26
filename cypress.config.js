const { defineConfig } = require("cypress");
const { baseUrl } = require('./cypress/fixtures/endpoint.json')

module.exports = defineConfig({

  defaultCommandTimeout: 10000,
  viewportHeight: 1080,
  viewportWidth: 1920,
  blockHosts: ['*.linkedin.*'],
  e2e: {
    baseUrl: baseUrl,
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

const { defineConfig } = require("cypress");

module.exports = defineConfig({
 viewportHeight: 1500,
 viewportWidth: 1200,
 reporter: 'cypress-mochawesome-reporter',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on)
    },
    baseUrl:"https://www.google.com"
  },
});

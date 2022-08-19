const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'pug97y',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://petstore.swagger.io'
  },
});

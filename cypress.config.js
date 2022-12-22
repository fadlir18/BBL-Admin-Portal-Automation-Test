const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qh8jp2',
  chromeWebSecurity: false,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

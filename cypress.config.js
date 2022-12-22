const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qh8jp2',
  chromeWebSecurity: false,
  e2e: {
    experimentalSessionAndOrigin: true,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

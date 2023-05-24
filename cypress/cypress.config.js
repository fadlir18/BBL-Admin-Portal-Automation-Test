const { defineConfig } = require("cypress");

module.exports = defineConfig({
  experimentalRunAllSpecs: true,
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});

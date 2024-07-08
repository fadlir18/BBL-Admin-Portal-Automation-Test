const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'qh8jp2',
  e2e: {
    experimentalRunAllSpecs: true,
    baseUrl: 'https://admin.test.youtap-azuredev.net/',
  },
});

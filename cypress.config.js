const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 40000,

    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://www.saucedemo.com/",

    retries:
    {
      runMode: 2,
      openMode: 0

    },

    async setupNodeEvents(on, config) {
        
      await addCucumberPreprocessorPlugin(on, config);

      installLogsPrinter(on, {
        printLogsToConsole: 'onFail'
      });

          on(
            "file:preprocessor",
              createBundler({
                plugins: [createEsbuildPlugin(config)],
              })
          );
        return config;
    },
  },
});
const { defineConfig } = require("cypress");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const installLogsPrinter = require('cypress-terminal-report/src/installLogsPrinter');
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 768,
    defaultCommandTimeout: 20000,
    watchForFileChanges: false,

    specPattern: "cypress/e2e/**/*.feature",
    supportFile: "cypress/support/e2e.js",
    baseUrl: "https://www.saucedemo.com/",

    retries:
    {
      runMode: 2,
      openMode: 0

    },

    async setupNodeEvents(on, config) {

      // cypress-terminal-report deve ser registrado ANTES do cucumber preprocessor,
      // pois no Cypress o último registro de um evento sobrescreve o anterior.
      // O cucumber preprocessor precisa ser o último a registrar before:run e after:spec.
      installLogsPrinter(on, {
        printLogsToConsole: 'onFail'
      });

      await addCucumberPreprocessorPlugin(on, config);

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
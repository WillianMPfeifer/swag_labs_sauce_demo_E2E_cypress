const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "cypress/cucumber-json/", 
  reportPath: "cypress/reports/html/", 
  openReportInBrowser: true, 
  metadata: {
    browser: {
      name: "chrome",
      version: "120",
    },
    device: "Local test machine",
    platform: {
      name: "windows",
    },
  },
  customData: {
    title: "Relatório de Testes Web Educação",
    data: [
      { label: "Projeto", value: "cypress-bdd-arquiteture" }, 
      { label: "Release", value: "1.0.6" },
      { label: "Ambiente", value: "Homologação" },
    ],
  },
});
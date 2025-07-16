// cucumber.config.js
module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    paths: ["src/test/features/*.feature"],
    publishQuiet: true, 
    dryRun: false,
    require: [
      "src/hooks/*.ts",
      "src/test/steps/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "allure-cucumberjs/reporter",
      "rerun:@rerun.txt"
    ],
    formatOptions: {
      resultsDir: "allure-results",
      snippetInterface: "async-await"
    },
    parallel: 2
  },
  rerun: {
    publishQuiet: true, 
    dryRun: false,
    require: [
      "src/hooks/*.ts",
      "src/test/steps/*.ts"
    ],
    requireModule: [
      "ts-node/register"
    ],
    format: [
      "progress-bar",
      "html:test-results/cucumber-report.html",
      "json:test-results/cucumber-report.json",
      "allure-cucumberjs/reporter",
      "rerun:@rerun.txt"
    ],
    formatOptions: {
      resultsDir: "allure-results",
      snippetInterface: "async-await"
    },
    parallel: 4
  }
};

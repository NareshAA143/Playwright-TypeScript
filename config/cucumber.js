// cucumber.config.js
module.exports = {
  default: {
    tags: process.env.npm_config_TAGS || "",
    paths: ["src/test/features/*.feature"],
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
      resultsDir: "allure-results"
    },
    parallel: 2
  },
  rerun: {
    paths: ["src/test/features/*.feature"],
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
      resultsDir: "allure-results"
    },
    parallel: 2
  }
};

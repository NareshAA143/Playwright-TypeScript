const report = require("multiple-cucumber-html-reporter");

report.generate({
  jsonDir: "test-results",
  reportPath: "test-results/reports/",
  reportName: "Playwright Automation Report",
  pageTitle:"Demo Blaze Application test report",
  displayDuration: false,
  metadata: {
    browser: {
      name: "chrome",
      version: "137",
    },
    device: "Naresh - PC",
    platform: {
      name: "windows",
      version: "10",
    },
  },
  customData: {
    title: "Test info",
    data: [
      { label: "Project", value: "Demo Blaze Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" }
    ],
  },
});
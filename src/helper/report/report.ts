const report = require("multiple-cucumber-html-reporter");//imports multiple-cucumber-html-reporter module

//Calling the generate function from the reporter to create a report
report.generate({
  jsonDir: "test-results",//folder path where the JSON reports are stored
  reportPath: "test-results/reports/",//output folder path where the generated HTML report will be stored
  reportName: "Playwright Automation Report", //name displayed on the top of the report
  pageTitle:"Demo Blaze Application test report",// The browser tab title after opening the report in the browser
  displayDuration: false,//display duration of each test
  metadata: {  //this block adds environment or execution info in the report header
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
  customData: { //Custom information to show in the report
    title: "Test info",
    data: [
      { label: "Project", value: "Demo Blaze Application" },
      { label: "Release", value: "1.2.3" },
      { label: "Cycle", value: "Smoke-1" }
    ],
  },
});




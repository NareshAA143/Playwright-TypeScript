const fs = require('fs-extra');
const path = require('path');

// Create timestamp: e.g., 2025-06-28_10-45-00
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').replace('T', '_').split('Z')[0];

const backupDir = 'report-backups';
const allureResults = 'allure-results';
const testResults = 'test-results';
const allureReport = 'allure-report';
const cucumberHtmlReport = path.join(testResults, 'reports');

// Timestamped backup paths
const tsAllureResults = path.join(backupDir, `${allureResults}-${timestamp}`);
const tsTestResults = path.join(backupDir, `${testResults}-${timestamp}`);
const tsAllureReport = path.join(backupDir, `${allureReport}-${timestamp}`);
const tsCucumberReport = path.join(backupDir, `cucumber-report-${timestamp}`);

try {
  // Ensure backup directory exists
  fs.ensureDirSync(backupDir);

  // Backup allure-results
  if (fs.existsSync(allureResults)) {
    fs.moveSync(allureResults, tsAllureResults);
    console.log(`📁 Backed up allure-results → ${tsAllureResults}`);
  }

  // Backup test-results
  if (fs.existsSync(testResults)) {
    fs.moveSync(testResults, tsTestResults);
    console.log(`📁 Backed up test-results → ${tsTestResults}`);
  }

  // Backup allure-report (HTML)
  if (fs.existsSync(allureReport)) {
    fs.copySync(allureReport, tsAllureReport);
    console.log(`📁 Backed up allure HTML report → ${tsAllureReport}`);
  }

  // Backup cucumber HTML report
  if (fs.existsSync(cucumberHtmlReport)) {
    fs.copySync(cucumberHtmlReport, tsCucumberReport);
    console.log(`📁 Backed up cucumber HTML report → ${tsCucumberReport}`);
  }

  // Recreate fresh result folders
  fs.ensureDirSync(allureResults);
  fs.ensureDirSync(testResults);
  console.log('✅ Fresh allure-results and test-results folders created.');

} catch (err) {
  console.error('❌ Error in createAllureFolder.js:', err);
  process.exit(1);
}



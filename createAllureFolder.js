const fs = require('fs-extra');

try {
  // Clean if exists
  fs.removeSync('allure-results');
  fs.removeSync('test-results');

  // Recreate fresh
  fs.ensureDirSync('allure-results');
  fs.ensureDirSync('test-results');

  console.log('✅ Cleaned and recreated allure-results and test-results folders.');
} catch (err) {
  console.error('❌ Error cleaning/creating folders:', err);
  process.exit(1);
}

const fs = require('fs-extra');

try {
  fs.ensureDirSync('allure-results');
  fs.ensureDirSync('test-results');
  console.log('Required folders are ready.');
} catch (err) {
  console.error('Error creating folders:', err);
  process.exit(1);
}

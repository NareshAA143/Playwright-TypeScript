import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";
import data from "../../helper/util/test-data/OrangeHRMData.json";

setDefaultTimeout(2 * 60 * 1000); // 2 minutes

// Navigate to login page
Given('User navigates to OrangeHRM Loginpage', async function (this: CustomWorld) {
    await this.loginPage.navigateToLoginPage();
    this.logger.info("User navigated to the application");
});

// Enter username and password
When('User enters username and password', async function (this: CustomWorld) {
    await this.loginPage.enterUserName(data.userName);
    await this.loginPage.enterPassword(data.password);
    this.logger.info("User entered username and password");
});

// Click on login button
Then('user clicks on login button', async function (this: CustomWorld) {
    await this.loginPage.clickOnLogin();
    this.logger.info("User clicked login button");
});

When('user clicks on Admin button', async function (this: CustomWorld) {
    await this.homePage.clickOnAdmin();
    this.logger.info("User clicked on Admin button");
});

Then('user enters username',async function (this: CustomWorld) {
    await this.adminPage.enterUserName("Ravi M B");
});

Then('user selects user role',async function (this: CustomWorld) {   
    await this.adminPage.ClickonUserRoleDropdown();
    await this.adminPage.clickonUserRole();
});

Then('user enters employee name',async function (this: CustomWorld) {
    await this.adminPage.enterEmployeeName("Ravi M B");
});

Then('user selects status',async function (this: CustomWorld) {
    await this.adminPage.ClickonStatusDropdown();
    await this.adminPage.clickonStatus();
});

Then('user clicks on search',async function(this: CustomWorld){
    await this.adminPage.clickOnSearch();
});
Then('sees number of rows in the table',async function(this: CustomWorld){
    await this.adminPage.verifyTableRows();
});
Then('user sees the content of each row in the table',async function(this: CustomWorld){
    await this.adminPage.VerifyEachRowContent();
});
Then('user sees the number of checkboxes in the table',async function(this: CustomWorld){
    await this.adminPage.VerifyNumberOfCheckboxes();
});
Then('user checks all the checkboxes in the table',async function(this: CustomWorld){
    await this.adminPage.CheckAllCheckboxes();
});
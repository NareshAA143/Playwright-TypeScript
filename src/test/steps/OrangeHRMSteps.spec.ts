// // import { Before, When,setDefaultTimeout ,Then, Given} from "@cucumber/cucumber"
// // setDefaultTimeout(60 * 1000*2);
// // import { expect } from "playwright/test"
// // import { fixture } from "../../hooks/pageFixture";
// // import OrangeHRMLoginPage from "../../pages/OrangeHRMLoginPage";
// // import Assert from "../../helper/wrapper/assert";
// // import data from "../../helper/util/test-data/OrangeHRMData.json";

// // let loginPage: OrangeHRMLoginPage;
// // let assert: Assert;

// // Given('User navigates to OrangeHRM Loginpage', async function () {
// //     loginPage = new OrangeHRMLoginPage(fixture.page);
// //     assert = new Assert(fixture.page);
// //     await loginPage.navigateToLoginPage();
// //     fixture.logger.info("User Navigated to the application");
// // });

// // When('User enters username and password', async function () {
// //     await loginPage.enterUserName(data.userName);
// //     await loginPage.enterPassword(data.password);
// //     fixture.logger.info("User enters username and password");
// // });
// // Then('user clicks on login button', async function () {
// //     await loginPage.clickOnLogin();
// //     fixture.logger.info("User clicks on login button");
// // });

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
Then('user sees Dashboard page', async function (this: CustomWorld) { 
    await this.homePage.verifyHomePage();
    await this.homePage.clickOnAdmin();
    await this.homePage.clickOnLeave();
   await this.homePage.clickWelcomeAdmin();
    this.logger.info("User sees Dashboard page");
});

Then('user clicks on Leave button', async function (this: CustomWorld) {
    await this.homePage.clickOnLeave();
    this.logger.info("User clicked on Leave button");

});

Then('user clicks on apply', async function (this: CustomWorld) {
    await this.leavePage.clickApply();
    this.logger.info("User clicked on apply");
});

When("user selects from date", async function (this: CustomWorld) {
  await this.leavePage.selectDate("1997-05-07"); 
  this.logger.info("User selects from date");
});

When('user clicks on Admin button', async function (this: CustomWorld) {
    await this.homePage.clickOnAdmin();
    this.logger.info("User clicked on Admin button");
});

Then('user enters username',async function (this: CustomWorld) {
    await this.adminPage.enterUserName("Jobinsam@6742");
})
Then('user selects user role',async function (this: CustomWorld) {   
    await this.adminPage.selectUserRole(0,"ESS");
})

Then('user enters employee name',async function (this: CustomWorld) {
    await this.adminPage.enterEmployeeName("Jobin Sam");
})
Then('user selects status',async function (this: CustomWorld) {
    await this.adminPage.selectStatus(1,"Enabled");
})
Then('user clicks on search',async function(this: CustomWorld){
    await this.adminPage.clickOnSearch();
})
Then('user selects date',async function (this: CustomWorld) {
    await this.leavePage.selectDate("1997-05-07"); 
    this.logger.info("User selects from date");
});




import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";
import data from "../../helper/util/test-data/OrangeHRMData.json";

setDefaultTimeout(2 * 60 * 1000); // 2 minutes

Then('user sees Dashboard page', async function (this: CustomWorld) { 
    await this.homePage.verifyHomePage();
    await this.homePage.clickOnAdmin();
    await this.homePage.clickOnLeave();
   await this.homePage.clickWelcomeAdmin();
    this.logger.info("User sees Dashboard page");
});

Then('user clicks on user profile dropdown', async function (this:CustomWorld) {
    await this.homePage.clickOnUserNameDropdown();
    this.logger.info("User clicked on user profile dropdown"); 
})

Then('user clicks on support option', async function (this:CustomWorld) {
    await this.homePage.clickOnSupport();
    this.logger.info("User clicked on support option");
    await this.homePage.VerifyCustomerSupportLabel();
    this.logger.info("User able to see customer support label");
    
})

Then('user clicks on Leave button', async function (this: CustomWorld) {
    await this.homePage.clickOnLeave();
    this.logger.info("User clicked on Leave button");

});

Then('user clicks on selects Show leave with status dropdown', async function (this: CustomWorld) {
    await this.leavePage.ClickonLeaveStatusDropdown();
    this.logger.info("User clciks on dropdown selected Show leave with status");
});

Then('user selects Cancelled dropdown', async function (this: CustomWorld) {
    await this.leavePage.clickonSelectCancelled();
    this.logger.info("User clciks on dropdown selected Cancelled");
});

Then('user selectes leave Type', async function (this: CustomWorld) {
    await this.leavePage.clickonLeaveTypeDropdown();
    await this.leavePage.clickonLeaveType();
    this.logger.info("User clciks on dropdown selected leave Type");
});

Then('user enters EmployeeName', async function (this: CustomWorld) {
    await this.leavePage.fillEmployeeName("Ravi M B");
    await this.leavePage.ClickonEmployeeNameSuggest();
    this.logger.info("User enters EmployeeName");
});

Then('user selects Sub unit', async function (this: CustomWorld) {
    await this.leavePage.clickonSubUnitDropdown();
    await this.leavePage.clickonSubUnit();
    this.logger.info("User selects Sub unit");
});

Then('user clicks on Include Past Employees', async function (this: CustomWorld) {
    await this.leavePage.clickIncludePastEmployees();
    this.logger.info("User clicks on Include Past Employees");
});

Then('user clicks on apply', async function (this: CustomWorld) {
    await this.leavePage.clickApply();
    this.logger.info("User clicked on apply");
});

When("user selects from date", async function (this: CustomWorld) {
  await this.leavePage.selectDate("1997-05-07"); 
  this.logger.info("User selects from date");
});

Then('user selects date',async function (this: CustomWorld) {
    await this.leavePage.selectDate("1997-05-07"); 
    this.logger.info("User selects from date");
});




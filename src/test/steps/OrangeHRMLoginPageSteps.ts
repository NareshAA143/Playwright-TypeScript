import { Before, When,setDefaultTimeout ,Then, Given} from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import OrangeHRMLoginPage from "../../pages/OrangeHRMLoginPage";
import Assert from "../../helper/wrapper/assert";
import data from "../../helper/util/test-data/OrangeHRMData.json";

let loginPage: OrangeHRMLoginPage;
let assert: Assert;

Given('User navigates to OrangeHRM Loginpage', async function () {
    loginPage = new OrangeHRMLoginPage(fixture.page);
    assert = new Assert(fixture.page);
    await loginPage.navigateToLoginPage();
    fixture.logger.info("User Navigated to the application");
});

When('User enters username and password', async function () {
    await loginPage.enterUserName(data.userName);
    await loginPage.enterPassword(data.password);
    fixture.logger.info("User enters username and password");
});
Then('user clicks on login button', async function () {
    await loginPage.clickOnLogin();
    fixture.logger.info("User clicks on login button");
});
import { Before, When,setDefaultTimeout ,Then, Given} from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import OrangeHRMHomePage from "../../pages/OrangeHRMHomePage";
import Assert from "../../helper/wrapper/assert";

let homePage: OrangeHRMHomePage;
let assert: Assert;

Given('user is on HomePage', async function () {
    homePage = new OrangeHRMHomePage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User is on HomePage");
});

Then('user sees Dashboard page',async function () { 
    await homePage.verifyHomePage();
    fixture.logger.info("User sees Dashboard page");
});

When('user clicks on Admin button', async function () {
    await homePage.clickOnAdmin();
    fixture.logger.info("User clicks on Admin button");
});
 
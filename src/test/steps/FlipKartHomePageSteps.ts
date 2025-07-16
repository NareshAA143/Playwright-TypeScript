import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import FlipKartHomePage from "../../pages/FlipKartHomePage";
import Assert from "../../helper/wrapper/assert";

let flipKartHomePage: FlipKartHomePage;
let assert: Assert;

Given('user navigates to the FlipKart application', async function () {
    flipKartHomePage = new FlipKartHomePage(fixture.page);
    assert = new Assert(fixture.page);
    await flipKartHomePage.navigateToFlipKartHomePage();
    fixture.logger.info("User Navigated to the FlipKart application");
});

When('User enters iphone15', async function () {
    await flipKartHomePage.searchForProduct("iphone15");
    fixture.logger.info("User clicks on search box");
});

Then('User clicks on search icon', async function () {
    await flipKartHomePage.clickSearchIcon();
    fixture.logger.info("User clicks on search icon");
});


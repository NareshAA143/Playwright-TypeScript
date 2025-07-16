import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import FlipKartPhonePage from "../../pages/FlipKartPhonePage";
import Assert from "../../helper/wrapper/assert";

let flipKartPhonePage: FlipKartPhonePage;
let assert: Assert;

Given('User is on Phones Products page',async function () {
    flipKartPhonePage = new FlipKartPhonePage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User Navigated to the Phones Products page");
});

Then('User clicks on Apple Iphone15 pro', async function () {
    const newPage = await flipKartPhonePage.clickOniPhone15AndSwitch();
    // Override the main page reference for the next steps
    fixture.page = newPage;
    fixture.logger.info("User clicked on Apple Iphoe15 pro and switched to new tab");
});



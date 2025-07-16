import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import FlipKartAddToCartPage from "../../pages/FlipKartAddToCartPage";
import Assert from "../../helper/wrapper/assert";

let flipKartAddToCartPage: FlipKartAddToCartPage;
let assert: Assert;

Given('User siwtches to the new page',async function () {
    flipKartAddToCartPage = new FlipKartAddToCartPage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User Navigated to the Add to Cart page");
});

Then('User clicks on addto cart',async function () {
    await flipKartAddToCartPage.clickOnAddToCart();
    fixture.logger.info("User clicks on addto cart");
});

Then('User clicks on cart button',async function () {
    await flipKartAddToCartPage.clickOnCart();
    fixture.logger.info("User clicks on cart button");
});
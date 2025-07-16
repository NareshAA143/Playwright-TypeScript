import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import FlipKartPlaceOrderPage from "../../pages/FlipKartPlaceOrderPage";
import Assert from "../../helper/wrapper/assert";

let flipKartPlaceOrderPage: FlipKartPlaceOrderPage;
let assert: Assert;

Given('User is on OrderPlace page',async function () {
    flipKartPlaceOrderPage = new FlipKartPlaceOrderPage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User Navigated to the OrderPlace page");
});
Then('User verifies the product placed is correct one',async function () {
    await flipKartPlaceOrderPage.verifyProductAddedToCart();
    fixture.logger.info("User verifies the product placed is correct one");
});
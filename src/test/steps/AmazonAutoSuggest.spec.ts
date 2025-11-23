import { Given, When, Then, setDefaultTimeout } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

setDefaultTimeout(2 * 60 * 1000); // 2 minutes

Given("User opens Amazon site", async function (this: CustomWorld) {
    await this.page.goto('https://www.amazon.in/');
    this.logger.info("User navigated to the application");
})

When('user fills iphone in search box', async function (this: CustomWorld) {
    await this.amazonHomePage.search("iphone");
    this.logger.info("User filled iphone in search box");
})
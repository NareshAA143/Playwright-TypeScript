import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('User opens Myntra page', async function (this: CustomWorld) {
    await this.myntraPage.NavigateToMyntraPage();
    this.logger.info("User navigated to the application");
})
When('User clicks on Men Section', async function (this: CustomWorld) {
    await this.myntraPage.ClickOnMenSection();
    this.logger.info("User clicked on Men Section");
})
Then('User clicks on TShirts', async function (this: CustomWorld) {
    await this.myntraPage.ClickOnTshirts();
    this.logger.info("User clicked on TShirts");
})
Then('User selects Brands', async function (this: CustomWorld) {
    await this.myntraPage.SelectBrands();
    this.logger.info("User selected Brands");
})
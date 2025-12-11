import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('User navigates to Sausedemo URL', async function (this: CustomWorld) {
    await this.sausdemoPage.NavigateToSausdemoPage();
});
When('User fills username',async function (this: CustomWorld) {
    await this.sausdemoPage.FillUsername("standard_user");
});
Then('User fills password',async function (this: CustomWorld) {
    await this.sausdemoPage.FillPassword("secret_sauce");
});
Then('User clicks login button',async function (this: CustomWorld) {
    await this.sausdemoPage.ClickLoginButton();
});
Then('User sees products',async function (this: CustomWorld) {
    await this.sausdemoPage.GetProductNames();
});
Then('User clicks on AddToCart for specific products',async function (this: CustomWorld) {
    await this.sausdemoPage.AddSpecificProductsToCart();
});
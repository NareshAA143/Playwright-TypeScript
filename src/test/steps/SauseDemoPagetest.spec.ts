import { Given,When,Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";
import { expect } from "playwright/test";
import Allure from "allure-js-commons";

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
Then('User filters By ATOZ', async function (this: CustomWorld) {
    await this.sausdemoPage.filterByNameAtoZ();
    const names=await this.sausdemoPage.getProductNames();
    const sorted=[...names].sort();
    console.log(sorted);
    expect(names).toEqual(sorted);
});
Then('User filters By ZToA', async function (this: CustomWorld) {
    await this.sausdemoPage.filterByNameZtoA();
    const names=await this.sausdemoPage.getProductNames();
    const sorted=[...names].sort().reverse();
    console.log(sorted);
    expect(names).toEqual(sorted);
});
Then('User filters By LowToHigh', async function (this: CustomWorld) {
    await this.sausdemoPage.filterByPriceLowtoHigh();
    const prices=await this.sausdemoPage.getProductPrices();
    const sorted=[...prices].sort((a,b)=>a-b);
    console.log(sorted);
    expect(prices).toEqual(sorted);
});
Then('User filters By HighToLow', async function (this: CustomWorld) {
    await this.sausdemoPage.filterByPriceHightoLow();
    const prices=await this.sausdemoPage.getProductPrices();
    const sorted=[...prices].sort((a,b)=>b-a);
    console.log(sorted);
    expect(prices).toEqual(sorted);
});
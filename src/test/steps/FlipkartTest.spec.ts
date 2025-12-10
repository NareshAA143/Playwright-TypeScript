import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user launches Flipkart URL', async function(this:CustomWorld){
  await this.flipkartPage.NavigatetToFlipkartPage();
});
Then('user enters product name in search box', async function(this:CustomWorld){
  await this.flipkartPage.SearchProducts();
});
When('User enters laptop in search', async function(this:CustomWorld){
  await this.flipkartPage.SearchLaptopProduct('laptop');
});
Then('User clicks enter', async function(this:CustomWorld){
  await this.page.keyboard.press('Enter');
});
Then('User sees unique brands', async function(this:CustomWorld){
  await this.flipkartPage.GetBrandNames();
});
Then('User sees products with prices', async function(this:CustomWorld){
  await this.flipkartPage.GetProductsWithPrices();
});

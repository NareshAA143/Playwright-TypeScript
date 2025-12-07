import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user launches Flipkart URL', async function(this:CustomWorld){
  await this.flipkartPage.NavigatetToFlipkartPage();
});
Then('user enters product name in search box', async function(this:CustomWorld){
  await this.flipkartPage.SearchProducts();
});

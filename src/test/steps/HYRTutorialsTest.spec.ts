import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('User opens HYR tutorials page',async function(this: CustomWorld) {   
    await this.hyrPage.NavigateToURL();
})
When('User is on Register Page', async function(this: CustomWorld) {
    await this.hyrPage.VerifyRegisterText();
})
Then('User fills FirstName', async function(this:CustomWorld) {
    await this.hyrPage.fillFirstName();
})
Then('User fills LastName', async function(this:CustomWorld) {
    await this.hyrPage.fillLastName();
})
Then('User fills Email', async function(this:CustomWorld) {
    await this.hyrPage.fillEmail();
})
Then('User fills Password', async function(this:CustomWorld) {
    await this.hyrPage.fillPassword();
})
Then('User fills Repeat Password', async function(this:CustomWorld) {
    await this.hyrPage.fillRepeatPassword();
})
Then('User checks the all checkbox', async function(this:CustomWorld) {
    await this.hyrPage.checkAllCheckbox();
})
Then('User clicks on Register button', async function(this:CustomWorld) {
    await this.hyrPage.clickRegisterButton();
})
import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user launches TestPages URL', async function (this: CustomWorld) {
    await this.testPages.NavigateToURL();

})
When('user uploads file',async function(this:CustomWorld){
    await this.testPages.UploadFile();
})
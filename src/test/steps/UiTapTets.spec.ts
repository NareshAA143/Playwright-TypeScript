import{Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user navigates to UITAP URL', async function(this:CustomWorld){
    await this.uiTapPage.NavigateToUITapPage();
});

When('user uploads files', async function(this:CustomWorld){
    await this.uiTapPage.UploadFiles();
});
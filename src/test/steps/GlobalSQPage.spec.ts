import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";


Given('User navigates to Globalsq page', async function(this:CustomWorld){
 await this.globalSQPage.NavigateToTutorialsPage();
});

When('User fills ios date', async function(this:CustomWorld){
 await this.globalSQPage.FillDate();
});

When('User fills current date', async function(this:CustomWorld){
 await this.globalSQPage.FillCurrentDate();
});
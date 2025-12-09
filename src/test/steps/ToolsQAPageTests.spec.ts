import{Given,When,Then} from '@cucumber/cucumber';
import { CustomWorld } from "../../hooks/world";

Given('User launches ToolsQA URL', async function(this:CustomWorld){
  await this.toolsQAPage.NavigateToToolsQAPage();
});
When('User clicks on AlertsWindows', async function(this:CustomWorld){
  await this.toolsQAPage.clickOnAlertsWindows();
});
Then('User clicks on BrowserWindows', async function(this:CustomWorld){
  await this.toolsQAPage.clickOnBrowserWindows();
});
Then('User clicks on NewTab', async function(this:CustomWorld){
  await this.toolsQAPage.clickOnNewTab();
});
Then('User clicks on NewWindow', async function(this:CustomWorld){
  await this.toolsQAPage.clickOnNewWindow();
});
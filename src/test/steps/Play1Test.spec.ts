import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('User navigates to URL', async function(this:CustomWorld){
  await this.play1Page.NavigatetToPlay1Page();
});

When('user clicks on clicking on element', async function(this:CustomWorld){
  await this.play1Page.ClickOnButton();
});
Then('user clicks right button on element', async function(this:CustomWorld){
  await this.play1Page.ClickOnRightButton();
});
Then('user double clicks on element', async function(this:CustomWorld){
  await this.play1Page.DoubleClickOnElement();
});
Then('user mousehovers on element and click', async function(this:CustomWorld){
  await this.play1Page.HoverOnChooseLanguageAndClick();
});
Then('user drag and drops on element', async function(this:CustomWorld){
  await this.play1Page.DragAndDropElement();
});
Then('user scrolls page to bottom', async function(this:CustomWorld){
  await this.play1Page.ScrollPage();
});
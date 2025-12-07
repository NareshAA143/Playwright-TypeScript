import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user launches Tutorials page', async function(this:CustomWorld){
  await this.tutorialsPage.NavigatetToTutorialsPage();
});
When('user copies in one input and pastes in another', async function(this:CustomWorld){
  await this.tutorialsPage.FocusCopyPaste();
});
When('user enters Caps letter at start',async function(this:CustomWorld){ 
  

})
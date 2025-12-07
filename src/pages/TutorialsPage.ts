import{Page,Locator, expect} from "@playwright/test";

export default class TutorialsPage{
 private page: Page;
 private searchInput:Locator;
 private eamilInput:Locator;

 constructor(page:Page) {   
     this.page = page;
     this.searchInput=this.page.locator('#name');
     this.eamilInput=this.page.locator('#email');

 }

 public async NavigatetToTutorialsPage(){
     await this.page.goto("https://www.tutorialspoint.com/selenium/practice/selenium_automation_practice.php");
 }
 public async FocusCopyPaste(){
     await this.searchInput.focus();
     await this.page.keyboard.type('Playwright');
     await this.page.keyboard.press('Control+A');//select all
     await this.page.keyboard.press('Control+C');//copy
     await this.eamilInput.focus();//focus on email input
     await this.page.keyboard.press('Control+V');//paste
 }
 public async EnterCapsLetterAtStart(){
    await this.searchInput.focus();
    await this.page.keyboard.down('Shift');//clicks shift key
    await this.page.keyboard.press('KeyA');//enters A only, not possible to enter whole string of words
    await this.page.keyboard.up('Shift');//releases shift key
    await this.page.waitForTimeout(3000);
}

}
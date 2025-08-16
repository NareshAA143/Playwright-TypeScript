import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
export default class OrangeHRMAdminPage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }

    private Elements={
        user: "//h6[normalize-space()='Admin']",
        username:"div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']",
        dropdowns:".oxd-select-wrapper",
        employeeName:"input[placeholder='Type for hints...']",
        statusdropdown:"//div[contains(@class,'oxd-select-wrapper')]//div[contains(@class,'oxd-select-text-input')]",
        dropdownOption:(optionText:string)=>`//div[@role='option']//span[text()='${optionText}']`,
        search:"button[type='submit']"    
    }

    public async adminpage(){
        await expect(this.page.locator(this.Elements.user)).toBeVisible();
    }
    public async enterUserName(userName: string) {
        await this.page.fill(this.Elements.username, userName);
    
    }
    public async selectUserRole(dropdownIndex: number, optionText:string) { 
        const dropdownElements = await this.page.$$(this.Elements.dropdowns)       
        await dropdownElements[dropdownIndex].click();
        await this.page.locator(`//div[@role='option']//span[text()='${optionText}']`).click();
        
    }
    public async enterEmployeeName(employeeName: string) {
        await this.page.fill(this.Elements.employeeName, employeeName);
    
    }
    public async selectStatus(dropdownIndex: number, optionText:string) {
    const dropdownElements = await this.page.$$(this.Elements.dropdowns)       
        await dropdownElements[dropdownIndex].click();
        await this.page.locator(`//div[@role='option']//span[text()='${optionText}']`).click();
    }  
    public async clickOnSearch() {
        await this.page.click(this.Elements.search);
    }
}
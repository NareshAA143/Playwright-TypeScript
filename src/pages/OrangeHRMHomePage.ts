import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
export default class OrangeHRMHomePage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }

    private Elements={
    Dashboard: "//h6[normalize-space()='Dashboard']",
    userName:".oxd-userdropdown-name",
    logo: "img[alt='client brand banner']",
    AdminBtn:"//li[1]//a[1]//span[1]"
    }

    public async verifyHomePage() {
        await expect(this.page.locator(this.Elements.Dashboard)).toBeVisible();
        await expect(this.page.locator(this.Elements.Dashboard)).toHaveText("Dashboard");
        await expect(this.page.locator(this.Elements.logo)).toBeVisible();
        await expect(this.page.locator(this.Elements.userName)).toHaveText("manda1 user");
        const username = await this.page.locator(this.Elements.userName).textContent();
        console.log(username);
    }
    public async clickOnAdmin() {
        await this.page.click(this.Elements.AdminBtn);
    }

}
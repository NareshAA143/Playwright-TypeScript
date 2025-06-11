import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";


export default class LoginPage {
    private page: Page;

    private base: PlaywrightWrapper;

    constructor( page: Page) {
        this.page = page;
        this.base = new PlaywrightWrapper(page);
    }

     private Elements={
        userName:"//li[@class='nav-item active']//a[@class='nav-link']",
        laptops:"//a[3]"

     }

     async verifyUserName()
     {
         await expect(this.page.locator(this.Elements.userName)).toBeVisible();
         await expect(this.page).toHaveTitle("STORE");
     }

     async clickOnLaptops()
     {
      
         await this.page.locator(this.Elements.laptops).click();
     }

}
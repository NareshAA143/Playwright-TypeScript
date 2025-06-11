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
        sonyvaio:"//a[normalize-space()='Sony vaio i5']"

     }

     async clickOnProduct()
    {
        await this.page.locator(this.Elements.sonyvaio).click();

    }
}
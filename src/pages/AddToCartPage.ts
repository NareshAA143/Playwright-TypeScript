import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
import { add } from "winston";


export default class LoginPage {

    private page: Page;
    
        private base: PlaywrightWrapper;
    
        constructor( page: Page) {
            this.page = page;
            this.base = new PlaywrightWrapper(page);
        }

     private Elements={
        addToCart:"//a[normalize-space()='Add to cart']",
        logout:"#logout2"

     }

     async clickOnAddToCart()
     {
        // const [dialog] = await Promise.all([
        //               this.page.waitForEvent('dialog'),
        //               await this.page.locator(this.Elements.addToCart).click()
        //             ]);
        //             expect(dialog.message()).toBe('Product added.');
        //             await dialog.accept();

         await this.page.locator(this.Elements.addToCart).click();
                    
                   }

     async clickOnLogout()
    {
        await this.page.locator(this.Elements.logout).click();
        
    }
        
     
}
     
    
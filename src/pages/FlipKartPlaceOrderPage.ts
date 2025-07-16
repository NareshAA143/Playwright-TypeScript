import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
export default class FlipKartPlaceOrderPage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }
       private Elements={
        addedProduct: "//a[normalize-space()='Apple iPhone 15 (Black, 128 GB)']"

       }

       async verifyProductAddedToCart() {
        const productName= await this.page.locator(this.Elements.addedProduct).textContent();
        expect(productName).toBe("Apple iPhone 15 (Black, 128 GB)");
    }
}
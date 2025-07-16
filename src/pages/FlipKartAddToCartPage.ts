import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
export default class FlipKartAddToCartPage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }
       private Elements={
        addToCartBtn:"//button[normalize-space()='Add to cart']",
        cartBtn: "//span[normalize-space()='Cart']"
       }

       async clickOnAddToCart() {
        await this.page.click(this.Elements.addToCartBtn);
       }
       async clickOnCart() {
        await this.page.click(this.Elements.cartBtn);
       }

    }

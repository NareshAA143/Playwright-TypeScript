import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
export default class FlipKartHomePage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }

       private Elements={
        searchInput:"input[placeholder='Search for Products, Brands and More']",
        searchButton: "svg[width='24']"
       }

       async navigateToFlipKartHomePage() {
           await this.base.goto("https://www.flipkart.com/");
       }

       async searchForProduct(searchText: string) {
        await this.page.fill(this.Elements.searchInput, searchText);
       }
       async clickSearchIcon() {
        await this.page.click(this.Elements.searchButton);
       }


    }
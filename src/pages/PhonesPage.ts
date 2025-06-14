import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";


export default class PhonesPage {
    private page: Page;

    private base: PlaywrightWrapper;

    constructor( page: Page) {
        this.page = page;
        this.base = new PlaywrightWrapper(page);
    }

    private Elements={

        listofPhones:"//div[@id='tbodyid']//h4[@class='card-title']/a",
        iphone6:"//a[normalize-space()='Iphone 6 32gb']"

    }

    async listOfPhones():
        Promise<string[]>{
            await this.page.waitForSelector(this.Elements.listofPhones);
            const phonenames = await this.page.locator(this.Elements.listofPhones).allTextContents();
            return phonenames.map(name=>name.trim());
        }

    async clickOniPhone(){
        await this.page.locator(this.Elements.iphone6).click();
    }    
}

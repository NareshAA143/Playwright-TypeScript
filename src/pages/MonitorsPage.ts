import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";


export default class MonitorsPage {
    private page: Page;

    private base: PlaywrightWrapper;

    constructor( page: Page) {
        this.page = page;
        this.base = new PlaywrightWrapper(page);
    }

    private Elements={
        listOfMonitors:"//div[@id='tbodyid' and  @class='row']//h4",
        appleMonitor:"//a[normalize-space()='Apple monitor 24']"

}


async listOfMonitors():
    Promise<string[]>{
        await this.page.waitForSelector(this.Elements.listOfMonitors);
        const monitorNames = await this.page.locator(this.Elements.listOfMonitors).allTextContents();
        return monitorNames.map(name=>name.trim());
    }

async clickOnAppleMonitor(){
    await this.page.locator(this.Elements.appleMonitor).click();
}



}

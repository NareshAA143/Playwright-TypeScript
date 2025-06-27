//This class wraps common Playwright page actions-navigation, click with waiting, naviagtion after click
import { Page } from "@playwright/test";

export default class PlaywrightWrapper {

    constructor(private page: Page) { }//constructor takes  apage object as an argument
                                       //private page: Page stores the page inside the class for later use

    async goto(url: string) {
        await this.page.goto(url, {
            waitUntil: "domcontentloaded"
        });
    }

    async waitAndClick(locator: string) {
        const element = this.page.locator(locator);
        await element.waitFor({
            state: "visible"
        });
        await element.click();
    }

    async navigateTo(link: string) {
        await Promise.all([
            this.page.waitForNavigation(),
            this.page.click(link)
        ])
    }

}
 
import {Page,Locator} from 'playwright';

export default class ToolsQAPage {
    private page:Page;
    private alertsWindows:Locator;
    private browserWindows:Locator;
    private newTab:Locator;
    private newWindow:Locator;

    constructor(page:Page) {
        this.page = page;
        this.alertsWindows=this.page.locator('text=Alerts, Frame & Windows');
        this.browserWindows=this.page.locator('text=Browser Windows');
        this.newTab=this.page.locator('#tabButton');
        this.newWindow=this.page.locator('#windowButton');
    }

    public async NavigateToToolsQAPage() {
        await this.page.goto('https://demoqa.com');
    }
    public async clickOnAlertsWindows() {
        await this.alertsWindows.click();
    }
    public async clickOnBrowserWindows() {
        await this.browserWindows.click();
    }
    public async clickOnNewTab() {
        const [newTab]=await Promise.all([this.page.waitForEvent('popup'),this.newTab.click()]);
        await newTab.waitForLoadState('domcontentloaded');
        console.log("New tab url :", newTab.url());
        await this.page.waitForTimeout(3000);
        await newTab.close();
    }
    public async clickOnNewWindow() {
        const [newWindow]=await Promise.all([this.page.context().waitForEvent('page'),this.newWindow.click()]);
        await newWindow.waitForLoadState('domcontentloaded');
        console.log("New window url :", newWindow.url());
        await this.page.waitForTimeout(3000);
        await newWindow.close();
    }


}
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
        laptops:"//a[3]",
        loginModal:"#logInModal",
        contact:"//a[normalize-space()='Contact']",
        contactEmail:"//input[@id='recipient-email']",
        contactName:"//input[@id='recipient-name']",
        message:"//label[normalize-space()='Message:']",
        sendBtn:"//button[normalize-space()='Send message']",
        phones:"//div[@id='contcont']//a[2]",
        monitors:"//a[4]"

     }

     async verifyUserName()
     {
         await expect(this.page.locator(this.Elements.userName)).toBeVisible();
         await expect(this.page).toHaveTitle("STORE");
     }

     async clickOnLaptops()
     {
         await this.page.locator(this.Elements.loginModal).waitFor({state:'hidden'});
         await this.page.locator(this.Elements.laptops).click();
     }

     async clickOnContact()
     {
         await this.page.locator(this.Elements.contact).click();
     }

     async enterContactEmail(email:string)
     {
         await this.page.locator(this.Elements.contactEmail).fill(email);
     }

     async enterContactName(name:string)
     {
         await this.page.locator(this.Elements.contactName).fill(name);
     }

     async enterMessage(message:string)
     {
         await this.page.locator(this.Elements.message).fill(message);
     }

    async clickOnSend()
     {
         await this.page.locator(this.Elements.sendBtn).click();
     }

       async clickOnPhones()
    {
        await this.page.locator(this.Elements.phones).click();
    }

    async clickOnMonitors()
    {
        await this.page.locator(this.Elements.monitors).click();
    }
}
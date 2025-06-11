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
        loginLink:"#login2",
        userName:"#loginusername",
        password:"#loginpassword",
        loginBtn:"button[onclick='logIn()']"
    }

    async navigateToLoginPage() {
        await this.base.goto("https://demoblaze.com/index.html");
       
    }

    async clickLogin() {
        await this.page.click(this.Elements.loginLink);
    }

    async enterUserName(userName: string) {
        await this.page.fill(this.Elements.userName, userName);
    
    }

    async enterPassword(password: string) {
        await this.page.fill(this.Elements.password, password);
    
    }

    async clickOnLogin() {
        await this.page.click(this.Elements.loginBtn);
    }

    async LoginFailed() {
         const [dialog] = await Promise.all([
              this.page.waitForEvent('dialog'),
             await this.page.locator("button[onclick='logIn()']").click()
            ]);
            expect(dialog.message()).toBe('Wrong password.');
            await dialog.accept();
    }



}

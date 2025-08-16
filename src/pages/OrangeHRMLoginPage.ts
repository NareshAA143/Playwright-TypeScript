import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
export default class OrangeHRMLoginPage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }

    private Elements={
        userName:"input[placeholder='Username']",
        password:"input[placeholder='Password']",
        loginBtn:"button[type='submit']"
    }

    public async navigateToLoginPage() {
        await this.base.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    }

    public async enterUserName(userName: string) {
        await this.page.fill(this.Elements.userName, userName);
    
    }

    public async enterPassword(password: string) {
        await this.page.fill(this.Elements.password, password);
    
    }

    public async clickOnLogin() {
        await this.page.click(this.Elements.loginBtn);
    }

}
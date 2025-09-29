// import {expect,Page} from "@playwright/test";
// import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
// export default class OrangeHRMHomePage {

//    private page: Page;
   
//        private base: PlaywrightWrapper;
   
//        constructor( page: Page) {
//            this.page = page;
//            this.base = new PlaywrightWrapper(page);
//        }

//     private Elements={
//     Dashboard: "//h6[normalize-space()='Dashboard']",
//     userName:".oxd-userdropdown-name",
//     logo: "img[alt='client brand banner']",
//     AdminBtn:"//li[1]//a[1]//span[1]",
//     LeaveBtn:"//span[normalize-space()='Leave']",
//     dashBoard:"//h6[normalize-space()='Dashboard']",
//     welcomeAdmin:"//a[@id='nameofuser']"
//     }

//     public async verifyHomePage() {
//         await this.page.waitForTimeout(5000);
//         await expect(this.page.locator(this.Elements.dashBoard)).toBeVisible();
//         var dashboard= await this.page.locator(this.Elements.dashBoard).textContent();
//         await expect(dashboard).toBe("Dashboard");
        
//     }
//     public async clickOnAdmin() {
//         await this.page.click(this.Elements.AdminBtn);
//     }
//     public async clickOnLeave() {
//         await this.page.click(this.Elements.LeaveBtn);
//     }
//     public async VerifyWelcomeAdmin()
//     {
//         await this.page.locator(this.Elements.welcomeAdmin).click();
//     }

// }

import { expect, Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class OrangeHRMHomePage {
  private page: Page;
  private base: PlaywrightWrapper;

  // Locators
  private dashboardHeading: Locator;
  private userName: Locator;
  private logo: Locator;
  private adminBtn: Locator;
  private leaveBtn: Locator;
  private buzzBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // Initialize locators
    this.dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });
    this.userName = this.page.locator(".oxd-userdropdown-name");
    this.logo = this.page.locator("img[alt='client brand banner']");
    this.adminBtn = this.page.getByRole('link', { name: 'Admin' });
    this.leaveBtn = this.page.getByRole('link', { name: 'Leave' });
    this.buzzBtn = this.page.getByRole('link', { name: 'Buzz' });
  }

  public async verifyHomePage() {
    // better than fixed timeout
    await expect(this.dashboardHeading).toBeVisible();
    await expect(this.dashboardHeading).toHaveText("Dashboard");
  }

  public async clickOnAdmin() {
    await expect(this.adminBtn).toBeVisible();
    await this.adminBtn.click();
  }

  public async clickOnLeave() {
    await expect(this.leaveBtn).toBeVisible();
    await this.leaveBtn.click();
  }

  public async clickWelcomeAdmin() {
    await expect(this.buzzBtn).toBeVisible();
    await this.buzzBtn.click();
  }
}

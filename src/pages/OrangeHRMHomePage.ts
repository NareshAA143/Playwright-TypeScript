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
  private supportBtn: Locator
  private customerSupportLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // Initialize locators
    this.dashboardHeading = this.page.getByRole('heading', { name: 'Dashboard' });
    this.userName = this.page.locator(".oxd-userdropdown-name");
    this.supportBtn=this.page.locator('[role="menuitem"]',{hasText:"Support"});
    this.customerSupportLabel=this.page.locator('.orangehrm-sub-title');
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

  public async clickOnUserNameDropdown() {
    await expect(this.userName).toBeVisible();
    await this.userName.click();
  }

  public async clickOnSupport() {
    await expect(this.supportBtn).toBeVisible();
    await this.supportBtn.click();
  }
  public async VerifyCustomerSupportLabel() {
    await expect(this.customerSupportLabel).toBeVisible();
    await expect(this.customerSupportLabel).toHaveText("Customer Support");
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

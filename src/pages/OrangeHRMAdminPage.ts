import { expect, Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class OrangeHRMAdminPage {
  private page: Page;
  private base: PlaywrightWrapper;

  // Locators
  private userHeading: Locator;
  private usernameInput: Locator;
  private userRoleDropdown: Locator;
  private userRole: Locator;
  private employeeName: Locator;
  private employeeNameSuggest: Locator;
  private statusDropdown: Locator;
  private status: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // initialize locators
    this.userHeading = this.page.locator("//h6[normalize-space()='Admin']");
    this.usernameInput = this.page.getByRole('textbox').nth(1);
    this.userRoleDropdown = this.page.locator(".oxd-select-text.oxd-select-text--active").nth(0);
    this.userRole=this.page.locator('.oxd-select-option', {hasText:'Admin'});
    this.employeeName=this.page.getByRole('textbox', { name: 'Type for hints...' });
    this.employeeNameSuggest=this.page.getByRole('option', { name: 'Ravi M B' });
    this.statusDropdown=this.page.locator(".oxd-select-text.oxd-select-text--active").nth(1);
    this.status=this.page.locator('.oxd-select-option', {hasText:'Enabled'});
    this.searchButton = this.page.locator("button[type='submit']");
  }

  //Action methods
  public async verifyAdminPage() {
    await expect(this.userHeading).toBeVisible();
  }

  public async enterUserName(userName: string) {
    await this.usernameInput.fill(userName);
  }

public async ClickonUserRoleDropdown() {
    await expect(this.userRoleDropdown).toBeVisible();
    await this.userRoleDropdown.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickonUserRole() {
    await expect(this.userRole).toBeVisible();
    await this.userRole.click();
    await this.page.waitForTimeout(2000);
  }

 public async enterEmployeeName(employeeName: string) {
    await this.employeeName.fill(employeeName);
    await this.page.waitForTimeout(5000);
    await this.employeeNameSuggest.click();
  
  }

public async ClickonStatusDropdown() {
    await expect(this.statusDropdown).toBeVisible();
    await this.statusDropdown.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickonStatus() {
    await expect(this.status).toBeVisible();
    await this.status.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickOnSearch() {
    await this.searchButton.click();
  }
}

import { expect, Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class OrangeHRMAdminPage {
  private page: Page;
  private base: PlaywrightWrapper;

  // Locators
  private userHeading: Locator;
  private usernameInput: Locator;
  private dropdowns: Locator;
  private employeeNameInput: Locator;
  private statusDropdown: Locator;
  private searchButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // initialize locators
    this.userHeading = this.page.locator("//h6[normalize-space()='Admin']");
    this.usernameInput = this.page.locator(
      "div[class='oxd-input-group oxd-input-field-bottom-space'] div input[class='oxd-input oxd-input--active']"
    );
    this.dropdowns = this.page.locator(".oxd-select-wrapper");
    this.employeeNameInput = this.page.locator("input[placeholder='Type for hints...']");
    this.statusDropdown = this.page.locator(
      "//div[contains(@class,'oxd-select-wrapper')]//div[contains(@class,'oxd-select-text-input')]"
    );
    this.searchButton = this.page.locator("button[type='submit']");
  }

  //Action methods
  public async verifyAdminPage() {
    await expect(this.userHeading).toBeVisible();
  }

  public async enterUserName(userName: string) {
    await this.usernameInput.fill(userName);
  }

  public async selectUserRole(dropdownIndex: number, optionText: string) {
    const dropdownElement = this.dropdowns.nth(dropdownIndex);
    await dropdownElement.click();
    await this.page.locator(`//div[@role='option']//span[text()='${optionText}']`).click();
  }

  public async enterEmployeeName(employeeName: string) {
    await this.employeeNameInput.fill(employeeName);
  }

  public async selectStatus(dropdownIndex: number, optionText: string) {
    const dropdownElement = this.dropdowns.nth(dropdownIndex);
    await dropdownElement.click();
    await this.page.locator(`//div[@role='option']//span[text()='${optionText}']`).click();
  }

  public async clickOnSearch() {
    await this.searchButton.click();
  }
}

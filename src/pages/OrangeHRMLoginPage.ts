import { expect, Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class OrangeHRMLoginPage {
  private page: Page;
  private base: PlaywrightWrapper;

  // Locators
  private userNameInput: Locator;
  private passwordInput: Locator;
  private loginButton: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // Initialize locators (Playwright recommended way)
    this.userNameInput = this.page.getByPlaceholder("Username");
    //this.userNameInput = this.page.locator("input[placeholder='Username']");//we can directly use locator
    this.passwordInput = this.page.getByPlaceholder("Password");
    this.loginButton = this.page.getByRole("button", { name: "Login" });
  }

  public async navigateToLoginPage() {
    await this.base.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login");
    await expect(this.userNameInput).toBeVisible(); // sanity check page is loaded
  }

  public async enterUserName(userName: string) {
    await this.userNameInput.fill(userName);
  }

  public async enterPassword(password: string) {
    await this.passwordInput.fill(password);
  }

  public async clickOnLogin() {
    await this.loginButton.click();
  }
}

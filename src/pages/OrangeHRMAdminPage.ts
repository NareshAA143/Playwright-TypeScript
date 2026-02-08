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
  private tableRows: Locator;
  private checkboxesInTable: Locator;
  private userNamesInTable: Locator;

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
    this.tableRows = this.page.locator('//div[@class="oxd-table-body"]/child::div[@class="oxd-table-card"]');
    this.userNamesInTable = this.page.locator('//div[@class="oxd-table-card"]/descendant::div[text()="Evie14"]');
    this.checkboxesInTable = this.page.locator('//div[@class="oxd-table-card"]/descendant::input');
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
  public async verifyTableRows() {
    const rowCount = await this.tableRows.count();
    console.log(`Number of rows in the table: ${rowCount}`);
    
}
public async VerifyEachRowContent() {
    const rows = await this.page.locator('//div[@class="oxd-table-body"]/child::div[@class="oxd-table-card"]').all();
    for(let row of rows) {
        console.log(row.allTextContents());
  }
}
public async VerifyNumberOfCheckboxes() {
  const checkboxesCount = await this.checkboxesInTable.count();
  console.log(`Number of checkboxes in the table: ${checkboxesCount}`);
}
public async CheckAllCheckboxes() {
  for(let check of await this.checkboxesInTable.all())  
    {
        await check.check();
        await this.page.waitForTimeout(3000);
    } 
}

}

import { expect, Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class OrangeHRMLeavePage {
  private page: Page;
  private base: PlaywrightWrapper;

  // Locators
  private calendarIcon: Locator;
  private applyLink: Locator;
  private leaveStatusdropdown: Locator;
  private selectCancelled: Locator;
  private CancelledLabel: Locator;
  private LeaveTypeDropdown: Locator;
  private LeaveType:Locator;
  private employeeName:Locator;
  private employeeNameSuggest:Locator;
  private subUnitDropdown:Locator;
  private subUnit:Locator;
  private includePastEmployees:Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // Initialize locators
    this.leaveStatusdropdown=this.page.locator('.oxd-multiselect-wrapper .oxd-select-text');
    this.selectCancelled=this.page.locator('.oxd-select-option', {hasText:'Cancelled'} );
    this.CancelledLabel=this.page.locator('.oxd-multiselect-chips-area .oxd-chip.oxd-chip--default.oxd-multiselect-chips-selected', {hasText:'Cancelled'});
    this.calendarIcon = this.page.locator(".oxd-icon.bi-calendar").first();
    this.LeaveTypeDropdown=this.page.locator('.oxd-select-wrapper .oxd-select-text.oxd-select-text--active').nth(0);
    this.LeaveType=this.page.locator('.oxd-select-option', {hasText:'CAN - Bereavement'});
    this.employeeName=this.page.locator("input[placeholder='Type for hints...']");
    this.employeeNameSuggest=this.page.getByRole('option', { name: 'Ravi M B' });
    this.subUnitDropdown=this.page.locator('.oxd-select-wrapper .oxd-select-text.oxd-select-text--active').nth(1);
    this.subUnit=this.page.locator('.oxd-select-option', {hasText:'Administration'});
    this.includePastEmployees=this.page.locator('.oxd-switch-input.oxd-switch-input--active.--label-right');
    this.applyLink = this.page.locator("//a[normalize-space()='Apply']");
    
  }

  // Dynamic locators as helper methods
  public async ClickonLeaveStatusDropdown() {
    await expect(this.leaveStatusdropdown).toBeVisible();
    await this.leaveStatusdropdown.click();
    await this.page.waitForTimeout(2000);
  }
 public async clickonSelectCancelled() {
    await expect(this.selectCancelled).toBeVisible();
    await this.selectCancelled.click();
    await this.page.waitForTimeout(2000);
    await this.page.waitForSelector('.oxd-multiselect-chips-selected');
    await expect(this.CancelledLabel).toBeVisible();
  }

  public async clickonLeaveTypeDropdown() {
    await expect(this.LeaveTypeDropdown).toBeVisible();
    await this.LeaveTypeDropdown.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickonLeaveType() {
    await expect(this.LeaveType).toBeVisible();
    await this.LeaveType.click();
    await this.page.waitForTimeout(2000);
  }

  public async fillEmployeeName(employeeName: string) {
    await this.employeeName.fill(employeeName);
    await this.page.waitForTimeout(5000);
  }

  public async ClickonEmployeeNameSuggest() {
    await expect(this.employeeNameSuggest).toBeVisible();
    await this.employeeNameSuggest.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickonSubUnitDropdown() {
    await expect(this.subUnitDropdown).toBeVisible();
    await this.subUnitDropdown.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickonSubUnit() {
    await expect(this.subUnit).toBeVisible();
    await this.subUnit.click();
    await this.page.waitForTimeout(2000);
  }

  public async clickIncludePastEmployees() {
    await expect(this.includePastEmployees).toBeVisible();
    await this.includePastEmployees.check();
    await this.page.waitForTimeout(2000);
  }

  private yearListItem = (year: string) =>
    this.page.locator(`//li[contains(., '${year}')]/i`);

  private monthListItem = (month: string) =>
    this.page.locator(`//li[contains(., '${month}')]/i`);

  private dayCell = (day: string) =>
    this.page.getByText(day, { exact: true });

  // Actions
  public async clickApply() {
    await expect(this.applyLink).toBeVisible();
    await this.applyLink.click();
  }

  private async openCalendar() {
    await expect(this.calendarIcon).toBeVisible();
    await this.calendarIcon.click();
  }

  private async selectYear(year: string) {
    await this.yearListItem(year).click();
  }

  private async selectMonth(month: string) {
    await this.monthListItem(month).click();
  }

  private async selectDay(day: string) {
    await this.dayCell(day).click();
  }

  // Single method: handles full date selection
  public async selectDate(date: string) {
    const [year, monthIndex, day] = date.split("-").map(Number);
    const monthNames = [
      "January","February","March","April","May","June",
      "July","August","September","October","November","December"
    ];

    await this.openCalendar();
    await this.selectYear(year.toString());
    await this.selectMonth(monthNames[monthIndex - 1]);
    await this.selectDay(day.toString());
  }
}

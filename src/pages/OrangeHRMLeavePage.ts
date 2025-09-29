// import {expect,Page} from "@playwright/test";
// import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

// export default class OrangeHRMLeavePage {
//     private page: Page;
//     private base: PlaywrightWrapper;

//     constructor(page: Page) {
//         this.page = page;
//         this.base = new PlaywrightWrapper(page);
//     }

//   private Elements = {
//     calendarIcon: ".oxd-icon.bi-calendar",
//     yearListItem: (year: string) => `//li[contains(., '${year}')]/i`,
//     monthListItem: (month: string) => `//li[contains(., '${month}')]/i`,
//     dayCell: (day: string) => `text=${day}`,
//     apply:"//a[normalize-space()='Apply']"
//   };


//   public async Clickapply() {
//     await this.page.locator(this.Elements.apply).click();
//   }

//   async openCalendar() {
//     await this.page.locator(this.Elements.calendarIcon).first().click();
//   }

//   async selectYear(year: string) {
//     await this.page.locator(this.Elements.yearListItem(year)).click();
//   }

//   async selectMonth(month: string) {
//     await this.page.locator(this.Elements.monthListItem(month)).click();
//   }

//   async selectDay(day: string) {
//     await this.page.getByText(day, { exact: true }).click();
//   }

//   // Single method: handles full date selection
//   async selectDate(date: string) {
//     const [year, monthIndex, day] = date.split("-").map(Number);
//     const monthNames = [
//       "January","February","March","April","May","June",
//       "July","August","September","October","November","December"
//     ];

//     await this.openCalendar();
//     await this.selectYear(year.toString());
//     await this.selectMonth(monthNames[monthIndex - 1]);
//     await this.selectDay(day.toString());
//   }
// }

import { expect, Page, Locator } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class OrangeHRMLeavePage {
  private page: Page;
  private base: PlaywrightWrapper;

  // Locators
  private calendarIcon: Locator;
  private applyLink: Locator;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);

    // Initialize locators
    this.calendarIcon = this.page.locator(".oxd-icon.bi-calendar").first();
    this.applyLink = this.page.locator("//a[normalize-space()='Apply']");
    
  }

  // Dynamic locators as helper methods
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

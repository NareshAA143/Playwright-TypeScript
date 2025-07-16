import { Page, BrowserContext } from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";

export default class FlipKartPhonePage {
  private page: Page;
  private base: PlaywrightWrapper;

  constructor(page: Page) {
    this.page = page;
    this.base = new PlaywrightWrapper(page);
  }

  private Elements = {
    iphone15: "//div[normalize-space()='Apple iPhone 15 (Black, 128 GB)']"
  };

  async clickOniPhone15AndSwitch(): Promise<Page> {
    const context = this.page.context();
    const [newPage] = await Promise.all([
      context.waitForEvent("page"),
      this.page.click(this.Elements.iphone15)
    ]);

    await newPage.waitForLoadState('domcontentloaded');
    return newPage;
  }
}

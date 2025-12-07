import{Page,Locator, expect} from "@playwright/test";

export default class FlipkartPage{
 private page: Page;
 private searchInput:Locator;

constructor(page:Page) {
    this.page = page;
    this.searchInput=this.page.locator('input[placeholder="Search for Products, Brands and More"]');
}

public async NavigatetToFlipkartPage(){
    await this.page.goto("https://www.flipkart.com/");
}
public async SearchProducts(){
    await this.searchInput.focus();
    await this.page.keyboard.type('iphone177');
    await this.page.keyboard.press('Backspace');
    await this.page.keyboard.press('Control+A');
    await this.page.keyboard.press('Delete');
    await this.page.keyboard.type('iphone17 pro max');
    await this.page.keyboard.press('Enter');
    await this.page.waitForTimeout(5000);
}

}
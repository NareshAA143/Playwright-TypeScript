import{Page,Locator, expect} from "@playwright/test";

export default class Play1Page{

private page: Page;
private clickBtn: Locator;
private clickText:Locator;
private chooseLanguage:Locator;
private javaText:Locator;
private dragElement:Locator;
private dropElement:Locator;
private dropMessage:Locator;

constructor(page: Page) {
    this.page = page;
    this.clickBtn=this.page.locator('#click_area');
    this.clickText=this.page.locator('#click_type');
    this.chooseLanguage=this.page.locator('.dropbtn');
    this.javaText=this.page.locator('#hover_validate');
    this.dragElement=this.page.locator('#drag_source');
    this.dropElement=this.page.locator('div[id="drop_target"] h3');
    this.dropMessage=this.page.locator('h3[class="bg-danger text-light shadow"] h3');
}

public async NavigatetToPlay1Page(){
    await this.page.goto("https://play1.automationcamp.ir/mouse_events.html");
    await expect(this.clickText).not.toBeVisible();
}
public async ClickOnButton(){
    await this.clickBtn.click();
    await expect(this.clickText).toHaveText('Click');
    await this.page.waitForTimeout(3000);   
}
public async ClickOnRightButton(){
    await this.clickBtn.click({button:'right'});
    await expect(this.clickText).toHaveText('Right-Click');
    await this.page.waitForTimeout(3000);
}
public async DoubleClickOnElement(){
    await this.clickBtn.dblclick();
    await expect(this.clickText).toHaveText('Double-Click');
    await this.page.waitForTimeout(3000);
}
public async HoverOnChooseLanguageAndClick(){
    await this.chooseLanguage.hover();
    await this.page.locator('text="Java"').click();
    await expect(this.javaText).toHaveText('Java');
    await this.page.waitForTimeout(3000);
}
public async DragAndDropElement(){
    await this.dragElement.dragTo(this.dropElement);
    await expect(this.dropMessage).toHaveText('Drop is successful!');
    await this.page.waitForTimeout(3000);
}
public async ScrollPage(){
    await this.page.mouse.wheel(0,500);//scroll down to 500 pixels
    await this.page.waitForTimeout(3000);
}
}
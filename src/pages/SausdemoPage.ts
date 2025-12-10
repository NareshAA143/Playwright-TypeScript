import{Page,Locator,expect} from '@playwright/test';

export default class SausdemoPage{
    private page: Page;
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;
    private productNames: Locator;

    constructor(page: Page){
        this.page = page;
        this.username=this.page.locator('#user-name');
        this.password=this.page.locator('#password');
        this.loginButton=this.page.locator('#login-button');
        this.productNames=this.page.locator('.inventory_item_name');
    }
    public async NavigateToSausdemoPage(){
        await this.page.goto('https://www.saucedemo.com/');
    }
    public async FillUsername(username: string){
        await this.username.fill(username);
    }
    public async FillPassword(password: string){
        await this.password.fill(password);
    }
    public async ClickLoginButton(){
        await this.loginButton.click();
    }
    public async GetProductNames(){
        const prodNames= await this.productNames.allTextContents();//returns array of strings
        console.log(prodNames);
        for(const product of prodNames)
        {
            console.log(product);
        }
    await expect(prodNames[0]).toContain('Sauce Labs Backpack');
    await expect(prodNames.length).toBe(6);
    }
}
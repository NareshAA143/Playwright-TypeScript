import{Page,Locator,expect} from '@playwright/test';

export default class SausdemoPage{
    private page: Page;
    private username: Locator;
    private password: Locator;
    private loginButton: Locator;
    private productNames: Locator;
    private productPrices: Locator;
    private addToCartButton: Locator;
    private filterDropdown: Locator;
    private filterNameAtoZ: Locator;
    private filterNameZtoA: Locator;
    private filterPriceLowtoHigh: Locator;
    private filterPriceHightoLow: Locator;


    constructor(page: Page){
        this.page = page;
        this.username=this.page.locator('#user-name');
        this.password=this.page.locator('#password');
        this.loginButton=this.page.locator('#login-button');
        this.productNames=this.page.locator('.inventory_item_name');
        this.addToCartButton=this.page.locator('#add-to-cart-sauce-labs-backpack');
        this.filterDropdown=this.page.locator('.product_sort_container');
        this.filterNameAtoZ=this.page.locator("option[value='az']");
        this.filterNameZtoA=this.page.locator("option[value='za']");
        this.filterPriceLowtoHigh=this.page.locator("option[value='lohi']");
        this.filterPriceHightoLow=this.page.locator("option[value='hilo']");
        this.productPrices=this.page.locator('.inventory_item_price');
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
    //
     public async enterUsername(username: string) {
    await this.username.fill(username);
  }

  public async enterPassword(password: string) {
    await this.password.fill(password);
  }
    //
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

    public async AddSpecificProductsToCart() {
    const productsToCart = [
        "Sauce Labs Backpack",
        "Sauce Labs Bike Light",
        "Sauce Labs Bolt T-Shirt",
        "Sauce Labs Onesie"
    ];

    const items = this.page.locator(".inventory_item");

    const count = await items.count();

    for (let i = 0; i < count; i++) {
        const product = items.nth(i);
        const name = await product.locator(".inventory_item_name").textContent();

        if (name && productsToCart.includes(name.trim())) {
            await product.locator("button:has-text('Add to cart')").click();
        }
    }
}
public async filterByNameAtoZ(){
    await this.filterDropdown.click();
    await this.filterDropdown.selectOption({index:0});
}
public async filterByNameZtoA(){
    await this.filterDropdown.click();
    await this.filterDropdown.selectOption({index:1});  
}
public async filterByPriceLowtoHigh(){
    await this.filterDropdown.selectOption({index:2});
}
public async filterByPriceHightoLow(){
    await this.filterDropdown.click();
    await this.filterDropdown.selectOption({index:3});
}
public async getProductNames(){
    return await this.productNames.allTextContents();
}
public async getProductPrices(){
const prices = await this.productPrices.allTextContents();
return prices.map(price => parseFloat(price.replace('$', '')));
}
}
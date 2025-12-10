import{Page,Locator, expect} from "@playwright/test";

export default class FlipkartPage{
 private page: Page;
 private searchInput:Locator;
 private brandNames:Locator;
 private prodcutCarts:Locator;

constructor(page:Page) {
    this.page = page;
    this.searchInput=this.page.locator('input[placeholder="Search for Products, Brands and More"]');
    this.brandNames=this.page.locator('.RG5Slk');
    this.prodcutCarts=this.page.locator('.ZFwe0M.row');
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
public async SearchLaptopProduct(productName:string){
    await this.searchInput.focus();
    await this.searchInput.fill(productName)
}
public async GetBrandNames()
{
    await this.page.waitForSelector('.RG5Slk');
    await this.brandNames.first().waitFor({ state: "visible" });
    const allBrands= await this.brandNames.allTextContents();//returns array of strings
    console.log("All Brands in Array :",allBrands);

    const brandNames=allBrands.map(product=>product.split(' ')[0]);//returns first word of each string
    console.log("BrandNames in Array :", brandNames);

    const uniqueBrands = new Set(brandNames);
    console.log("Unique Brands in Set :", uniqueBrands);

}
public async GetProductsWithPrices(){
    await this.page.waitForSelector('.ZFwe0M.row');
    await this.prodcutCarts.first().waitFor({ state: "visible" });
    const count=await this.prodcutCarts.count();
    console.log("Count of products :",count);

    const productMap=new Map<string,string>();
    for(let i=0;i<count;i++)
    {
        const card=await this.prodcutCarts.nth(i);
        const nameLocator= card.locator('.RG5Slk');
        const priceLocator= card.locator('.hZ3P6w.DeU9vF');
        const nameText=(await nameLocator.textContent())?.trim().split(' ')[0];
        const priceText=(await priceLocator.textContent())?.trim();
     if(nameText && priceText)
     {
        productMap.set(nameText,priceText);
     }
     console.log('Product Map is :',productMap);
     const someProduct="Apple";
     if(productMap.has(someProduct))
     {
        console.log(`${someProduct} price is ${productMap.get(someProduct)}`);
     }
     for(const[product,price] of productMap)
     {
         console.log(`product : ${product} price is ${price}`);
     }
    }

}
}
import { expect, Page, Locator } from "@playwright/test";

export default class AmazonHomePage {
    
    //locators declaration
     private page: Page;
     private searchBox: Locator;
     private dropdownList: Locator;
     private suggestedProducts: Locator;

     //loacators initialization
     constructor(page: Page) {
          this.page = page;
          this.searchBox = this.page.locator("#twotabsearchtextbox");
          this.dropdownList=this.page.locator('.left-pane-results-container')
          this.suggestedProducts=this.page.locator("[id*='sac-suggestion-row']")
     }

     //Actions
     public async search(searchText: string)
     {
        await this.searchBox.fill(searchText);
        await expect(this.searchBox).toBeVisible();
        await this.page.waitForTimeout(2000);
        const countOfOptions=await this.suggestedProducts.count();//count number of options suggested
        console.log(countOfOptions);
        await expect(this.suggestedProducts).toHaveCount(countOfOptions);
        const optionsText=await this.suggestedProducts.allTextContents();//returns all product names in string array
        console.log(optionsText);//print all product names
        await expect(this.page.locator("[id*='sac-suggestion-row']",{hasText:'iphone 17 pro'}).first()).toBeVisible();//check particular product visible
        //await this.page.locator("[id*='sac-suggestion-row']",{hasText:'iphone 17 pro'}).first().click();//click particular product from suggested list
        await this.page.waitForTimeout(2000);

        //using for loop to click particular product
        const options=await this.suggestedProducts.all();//get all options locators in array
        for(const option of options)
        {
            if(await option.textContent()==='iphone 17pro max')
            {
                await option.click();
                await this.page.waitForTimeout(2000);
                break;
            }

        }
     }

}
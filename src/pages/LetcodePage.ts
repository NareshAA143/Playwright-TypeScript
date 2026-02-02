import { expect, Page, Locator } from "@playwright/test";
import { Logger } from "winston";
import { AllureLogger } from "../helper/util/allureLogger";

export default class LetcodePage {

    private page: Page;
    private shoppingtable: Locator
    private shoppingTableHeaders:Locator
    private headers:Locator
    private tableHeadingColumns: Locator
    private shoppingTablerows: Locator
    private LetsHandleTablerows: Locator
    private apple: Locator
    private applePrice: Locator

    private HandleTable: Locator

    private sortTable: Locator
    private calories: Locator

    //locators declaration
    constructor(page: Page, winstonLogger?: Logger) {
        this.page = page;
        this.shoppingtable = this.page.locator('#shopping');
        this.shoppingTableHeaders = this.page.locator('#shopping thead tr th');
        this.shoppingTablerows = this.page.locator('#shopping tbody tr');
        this.headers=this.page.locator('table[id="simpletable"] thead th')
        this.tableHeadingColumns = this.page.locator('#shopping thead tr th')
        this.LetsHandleTablerows = this.page.locator('#simpletable tbody tr')
        this.apple = this.page.locator('#shopping tbody tr:nth-child(2) td:nth-child(1)');
        this.applePrice = this.page.locator('#shopping tbody tr:nth-child(2) td:nth-child(2)');
        this.HandleTable = this.page.locator('#simpletable');
        this.LetsHandleTablerows = this.page.locator('#simpletable tbody tr');
        this.sortTable = this.page.locator('.mat-sort');
        this.calories = this.page.locator('.mat-sort tbody tr td:nth-of-type(2)');
    }

    //Actions
    public async NavigateToLetcodePage() {
        await this.page.goto('https://letcode.in/table');
    }

    public async CheckShoppingTable() {
        await expect(this.shoppingtable).toBeVisible();
    }

   public async PrintShoppingListItems() {
    const items: string[] = [];
    const rowCount = await this.shoppingTablerows.count();
     for (let i = 1; i <= rowCount; i++) {
      const shoppingListItem = this.page.locator(`#shopping tbody tr:nth-child(${i}) td:nth-child(1)`);
    const eachItem = await shoppingListItem.textContent();
    console.log("The item is:", eachItem);
    if (eachItem) {
      items.push(eachItem.trim());
    }
  }
  console.log("The shopping items are:", items);
}
public async PrintShoppingListPrices(){
    const prices: string[] = [];
    const rowCount = await this.shoppingTablerows.count();
    for(let i=1;i<=rowCount;i++){
        const shoppingListPrice = this.page.locator(`#shopping tbody tr:nth-child(${i}) td:nth-child(2)`);
        const eachPrice = await shoppingListPrice.textContent();
        console.log("The price is:", eachPrice);
        if(eachPrice){
            prices.push(eachPrice.trim());
        }
    }
 console.log("The shopping prices are:", prices);
}

    public async CheckLetsHandleItTableHeaders() {  
        const headnames = ['First name', 'Last name', 'Email address', 'Present/Absent'];
        const headernames= await this.headers.allTextContents();
        console.log("The heading columns are:", headernames);
        expect(headernames).toEqual(headnames);
    }
    public async CheckLetsHandleItTableRows(){
        const rowsCount= await this.LetsHandleTablerows.count();
        console.log("The number of rows is:", rowsCount);
        expect(rowsCount).toBe(3);
    }
    public async CheckOnCheckBoxbyName(name:string){
        const nameMatch= this.LetsHandleTablerows.filter({has:this.page.locator("td"), hasText:name});
        await nameMatch.locator("input").check();
        expect(nameMatch.locator("input")).toBeChecked();
    }
    public async CheckOnCheckBoxbyNameUsingForLoop(name:string){ 
        for(let i=0; i<await this.LetsHandleTablerows.count();i++){
            const eachRow = await this.LetsHandleTablerows.nth(i);
            const eachColumn=await eachRow.locator("td");
            for(let j=0; j<await eachColumn.count();j++){
                if(await eachColumn.nth(j).textContent()===name){
                    await eachColumn.last().locator("input").check();
                    expect(eachColumn.last().locator("input")).toBeChecked();
                }
            }
        }   
    }
    public async CheckTableHeadingColumns() {
        const colnames = ['Items', 'Price'];
        const columnnames = await this.tableHeadingColumns.allTextContents();
        console.log("The heading columns are:", columnnames);
        await expect(columnnames).toEqual(colnames);
    }
    public async RowsCount() {
        const row = await this.shoppingTablerows.count();
        console.log("The number of rows is:", row);
        await expect(row).toBe(4);
    }
    public async ColumnsCount() {
        const column = await this.shoppingTableHeaders.count();
        console.log("The number of columns is:", column);
        await expect(column).toBe(2);
    }
    public async CheckApple() {
        const text = await this.apple.textContent();
        console.log("The text of apple is:", text);
        await expect(this.apple).toHaveText('Apple');

        const price = await this.applePrice.textContent();
        console.log("The price of apple is:", price);
        await expect(this.applePrice).toHaveText('180');
    }

    public async CheckHandleTable() {
        await expect(this.HandleTable).toBeVisible();
    }

    public async FiterRowsByText() {
        const names = ['Koushik', 'Yashwanth', 'Iron'];
        for (const name of names) {
            const rowText = await this.LetsHandleTablerows.filter({ hasText: name });
            await rowText.locator("//input[@type='checkbox']").check();
            expect(rowText.locator("//input[@type='checkbox']").isChecked()).toBeTruthy();
        }

    }

    public async CheckSortTable() {
        await expect(this.sortTable).toBeVisible();
    }

    public async sortByCalories() {
        // Get all the calorie values as text
        const caloriesText = await this.calories.allTextContents();
        console.log("The calories are:", caloriesText);
        // Convert string[] → number[]
        const calories:number[] = caloriesText.map(c => Number(c.trim()));
        // Use slice() to create a copy before sorting
        const sortedCalories:number[] = calories.slice().sort((a, b) => a - b);
        console.log("Sorted calories:", sortedCalories);
        expect(calories).toEqual(sortedCalories);
    }



}
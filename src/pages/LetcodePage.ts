import { expect, Page, Locator } from "@playwright/test";

export default class LetcodePage {

    private page: Page;
    private table: Locator
    private tableHeadingColumns: Locator
    private rows: Locator
    private columns: Locator
    private apple: Locator
    private applePrice: Locator

    private HandleTable: Locator
    private HandleTablerows: Locator

    private sortTable: Locator
    private calories: Locator

    //locators declaration
    constructor(page: Page) {
        this.page = page;
        this.table = this.page.locator('#shopping');
        this.tableHeadingColumns = this.page.locator('#shopping thead tr th')
        this.rows = this.page.locator('#shopping tbody tr')
        this.columns = this.page.locator('#shopping thead tr th')
        this.apple = this.page.locator('#shopping tbody tr:nth-child(2) td:nth-child(1)');
        this.applePrice = this.page.locator('#shopping tbody tr:nth-child(2) td:nth-child(2)');

        this.HandleTable = this.page.locator('#simpletable');
        this.HandleTablerows = this.page.locator('#simpletable tbody tr');

        this.sortTable = this.page.locator('.mat-sort');
        this.calories = this.page.locator('.mat-sort tbody tr td:nth-of-type(2)');
    }

    //Actions
    public async NavigateToLetcodePage() {
        await this.page.goto('https://letcode.in/table');
    }

    public async CheckTable() {
        await expect(this.table).toBeVisible();
    }
    public async CheckTableHeadingColumns() {
        const colnames = ['Items', 'Price'];
        const columnnames = await this.tableHeadingColumns.allTextContents();
        console.log("The heading columns are:", columnnames);
        await expect(columnnames).toEqual(colnames);
    }
    public async RowsCount() {
        const row = await this.rows.count();
        console.log("The number of rows is:", row);
        await expect(row).toBe(4);
    }
    public async ColumnsCount() {
        const column = await this.columns.count();
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
            const rowText = await this.HandleTablerows.filter({ hasText: name });
            await rowText.locator("//input[@type='checkbox']").check();
            //await expect(rowText.locator("//input[@type='checkbox']")).toBeChecked();
        }

        for (const name of names) {
            const rowText = await this.HandleTablerows.filter({ hasText: name });
            await expect(rowText.locator("//input[@type='checkbox']")).toBeChecked();
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
        const calories = caloriesText.map(c => Number(c.trim()));
        // Use slice() to create a copy before sorting
        const sortedCalories = calories.slice().sort((a, b) => a - b);
        console.log("Sorted calories:", sortedCalories);
        expect(calories).toEqual(sortedCalories);
    }



}
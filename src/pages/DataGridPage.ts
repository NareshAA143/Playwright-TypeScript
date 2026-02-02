import{Page,Locator, expect} from "@playwright/test";

export default class DataGrid{
    private page: Page;
    private Balances:Locator;

    constructor(page:Page) {
        this.page = page;
        this.Balances=this.page.locator('#ex1-grid tr td:nth-child(5)');
    }
    public async NavigateToDataGridPage(){
        await this.page.goto("https://www.w3.org/WAI/ARIA/apg/patterns/grid/examples/data-grids/");
    }
    public async BalancesInDataGrid(){
        const balances= await this.Balances.allTextContents();//returns array of string
        console.log("Balances in DataGrid :",balances);
        const regex=/\.00$/;//regex to check balance ends with .00
        const cleanedBalances = balances.map(balance=>balance.replace(regex,'').trim());//returns array of strings without .00
        console.log("Cleaned Balances in DataGrid :",cleanedBalances);
    }
}
import{Page,Locator, expect} from "@playwright/test";

export default class MyntraPage{
    private page: Page;
    private men:Locator;
    private Tshirts:Locator;
    private szncheckbox:Locator;
   

    constructor(page:Page) {
        this.page = page;
        this.men=this.page.locator('.desktop-main[href="/shop/men"]');
        this.Tshirts=this.page.getByRole('link', { name: 'T-Shirts', exact: true });
        this.szncheckbox=this.page.locator('//span[text()="Brand"]/following-sibling::ul/child::li/child::label/child::input[@value="SZN"]');
    }
    public async NavigateToMyntraPage(){
        await this.page.goto("https://www.myntra.com/");
    }
    public async ClickOnMenSection(){
        await this.men.click();
    }
    public async ClickOnTshirts(){    
        await this.Tshirts.click();
        await this.page.waitForTimeout(3000);
    }
    public async SelectBrands(){
        const brandNames = ['Moda Rapido(11537)', 'WOOSTRO(9439)'];

        for (const brand of brandNames) {
            const listItem = this.page.getByRole('listitem').filter({ hasText: brand });
            const label = listItem.locator('label');

            await listItem.scrollIntoViewIfNeeded();
            await label.click();
            await expect(listItem.locator('input[type="checkbox"]')).toBeChecked();
        }
    }
    public async CheckAllCheckboxes(){
        await this.szncheckbox.waitFor({state:'visible',timeout:5000});
        await this.szncheckbox.waitFor({state:'attached',timeout:5000});
        await this.szncheckbox.scrollIntoViewIfNeeded();
        await this.szncheckbox.check();
    }
}
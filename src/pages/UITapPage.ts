import { Page, Locator } from "playwright";
import path from 'path';

export default class UITapPage {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    public async NavigateToUITapPage() {
        await this.page.goto('http://uitestingplayground.com/upload');
    }
    public async UploadFiles() {
        const filePath1=path.join(__dirname,'../../Uploads/Pet.txt');
        const filePath2=path.join(__dirname,'../../Uploads/Pet2.txt');
        const iframe=this.page.locator('iframe').contentFrame();
        const fileinput= await iframe.getByText('Browse files');
        await fileinput.setInputFiles([filePath1,filePath2]);
        await this.page.waitForTimeout(3000);
    }
}
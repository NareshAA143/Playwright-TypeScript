import {Page, Locator} from 'playwright';
import path from 'path';

export default class TestPages {
private page: Page;
private fileInput: Locator;

constructor(page: Page) {
    this.page = page;
    this.fileInput=this.page.locator('#fileinput');
}
public async NavigateToURL(){
    await this.page.goto('https://testpages.eviltester.com/pages/files/file-upload/');
}
public async UploadFile(){
    const filePath=path.join(__dirname,'../../Uploads/Pet.txt');
    await this.fileInput.setInputFiles(filePath);
    await this.page.waitForTimeout(1000);
}


}
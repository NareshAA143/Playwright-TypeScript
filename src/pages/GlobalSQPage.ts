import { expect, Page, Locator } from "@playwright/test";


export default class TutorialsPage {

    private page: Page;
    private dateInputBox: Locator;
    private date: Locator;

    
    constructor(page: Page) {
        this.page = page;
        this.dateInputBox= this.page.locator('#post-2661').getByRole('paragraph').locator('iframe').contentFrame().locator('#datepicker')
        this.date=this.page.locator('#post-2661').getByRole('paragraph').locator('iframe').contentFrame().getByRole('link', { name:'25', exact: true })
}

public async NavigateToTutorialsPage() {
    await this.page.goto("https://www.globalsqa.com/demo-site/datepicker/");
}

public async FillDate() {
    await this.dateInputBox.click();
    await this.date.click();
    await expect(this.dateInputBox).toHaveValue('12/25/2025');
    await this.page.waitForTimeout(3000);
}

public async FillCurrentDate() {
    const currentDate = new Date();
    console.log("Whole Date :",currentDate);//It prints the current system date & time in this format:2025-12-02T17:25:31.123Z

    const todayDate= currentDate.getDate();
    console.log("TodayDate :",todayDate);//Prints only the day of the month:

    await this.dateInputBox.click();
    await this.page.locator('#post-2661').getByRole('paragraph').locator('iframe').contentFrame().locator(`text="${todayDate}"`).click();
    const DateTextBoxValue=await this.dateInputBox.inputValue();
    console.log("DateTextBoxValue :",DateTextBoxValue);//Prints only the day of the month:

    const today=new Date();
    const currentday=today.getDate();
    console.log("CurrentDay :",currentday);//Prints only the day of the month:

    const currentMonth = today.getMonth()+1;
    console.log("CurrentMonth :",currentMonth);//Prints only the day of the month:

    const currentFullYear = today.getFullYear();
    console.log("CurrentFullYear :",currentFullYear);//Prints only the day of the month:

    const formattedDate = `${currentMonth}/${todayDate}/${currentFullYear}`;
    console.log("FormattedDate :", formattedDate);
    console.log("FormattedDate :",formattedDate);//Prints only the day of the month:

    //formatt the date
    const expectedDate=new Date(formattedDate);
    const actualDate=new Date(DateTextBoxValue);

    expect(actualDate.getTime()).toBe(expectedDate.getTime());
    await this.page.waitForTimeout(3000);

}

}
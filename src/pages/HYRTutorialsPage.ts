import { Page,Locator,expect } from '@playwright/test';

export default class HYRTutorialsPage {
    private page: Page;
    private registerText: Locator;
    private firstNameText: Locator;
    private lastNameText: Locator;
    private emailText: Locator;
    private passwordText: Locator;
    private repeatPasswordText: Locator;
    private registerButton: Locator;

    constructor(page: Page) {
        this.page = page;
        this.registerText = this.page.locator('//h1[text()="Register"]');
        this.firstNameText = this.page.locator('//label[text()="First Name "]/following-sibling::input[1]');
        this.lastNameText = this.page.locator('//label[text()="First Name "]/following-sibling::input[2]');
        this.emailText = this.page.locator('//label[text()="First Name "]/following-sibling::input[3]');
        this.passwordText = this.page.locator('//label[text()="Password"]/parent::div/following-sibling::div/child::input[@type="password"]');
        this.repeatPasswordText = this.page.locator('//label[text()="First Name "]/following-sibling::input[4]');
        this.registerButton = this.page.locator('button[type="submit"]');
    }
    public async NavigateToURL(){
        await this.page.goto('https://www.hyrtutorials.com/p/add-padding-to-containers.html#google_vignette', { timeout: 60000 });
        await this.page.waitForLoadState('networkidle');
        await this.page.waitForTimeout(2000);
    }
    public async VerifyRegisterText(){
        await this.registerText.waitFor({ state: 'visible', timeout: 10000 });
        const registerText = await this.registerText.textContent();
        expect(registerText?.trim()).toBe('Register');
        await this.page.waitForTimeout(2000);
    }
    public async fillFirstName(){
        await this.firstNameText.waitFor({ state: 'visible', timeout: 10000 });
        await this.firstNameText.fill('John');
        await this.page.waitForTimeout(2000);
    }
    public async fillLastName(){
        await this.lastNameText.waitFor({ state: 'visible', timeout: 10000 });
        await this.lastNameText.fill('Doe');
        await this.page.waitForTimeout(2000);
    }
    public async fillEmail(){
        await this.emailText.waitFor({ state: 'visible', timeout: 10000 });
        await this.emailText.fill('johndoe@gmail.com');
        await this.page.waitForTimeout(2000);
    }
    public async fillPassword(){
        await this.passwordText.waitFor({ state: 'visible', timeout: 10000 });
        await this.passwordText.fill('123456');
        await this.page.waitForTimeout(2000);
    }
    public async fillRepeatPassword(){
        await this.repeatPasswordText.waitFor({ state: 'visible', timeout: 10000 });
        await this.repeatPasswordText.fill('123456');
        await this.page.waitForTimeout(2000);
    }
    public async checkAllCheckbox(){
        const contact = ['Maria Anders', 'Francisco Chang', 'Roland Mendel', 'Helen Bennett', 'Yoshi Tannamuri', 'Giovanni Rovelli'];
        for(const contactName of contact){
          const check= await this.page.locator('//td[text()="'+contactName+'"]/preceding-sibling::td/child::input');
          await check.waitFor({ state: 'visible', timeout: 10000 });
          await check.check();
            expect(await check.isChecked()).toBeTruthy();
        }
        await this.page.waitForTimeout(2000);
    }
    public async clickRegisterButton(){
        await this.registerButton.waitFor({ state: 'visible', timeout: 10000 });
        await this.registerButton.click();
        await this.page.waitForTimeout(2000);
    }
    
}
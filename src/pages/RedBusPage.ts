import {Page, Locator,expect} from '@playwright/test';

export default class RedBusPage{
    private page: Page;
    private fromCityLocator: Locator;
    private toCityLocator: Locator;

    constructor(page: Page){
        this.page = page;
        this.fromCityLocator = this.page.locator('#srcinput');
        this.toCityLocator = this.page.locator('#destinput');
    }

    public async NavigateToRedBus(){
        await this.page.goto('https://www.redbus.in/');
    }
    public async Entercity(city:string){
        await this.fromCityLocator.fill(city);
    }
    public async EnterFromCity(){
        let cities = ["GOA (PANAJI), Goa", "Panjim, Goa"]
        for(const city of cities){
            const fromCities = await this.page.locator(`//div[contains(@class,'listItem')]/descendant::div[text()="${city}"]`);
            if(await fromCities.textContent() === city){
                const cityText = await fromCities.textContent();
                console.log("City found: " + cityText);
                await fromCities.click();
                break;
            }
        }
    }
    public async EnterToCity(city:string){
        await this.toCityLocator.fill(city);
    }
    public async EnterToCityOption(){
        let cities = ["Pondi", "Pondicherry"]
        for(const city of cities){
            const toCities = await this.page.locator(`//div[contains(@class,'listItem')]/descendant::div[text()="${city}"]`);
            if(await toCities.textContent() === city){
                const cityText = await toCities.textContent();
                console.log("City found: " + cityText);
                await toCities.click();
                break;
            }
        }
    }
    
}
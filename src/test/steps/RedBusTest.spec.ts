import {Given, When, Then} from '@cucumber/cucumber';
import { CustomWorld } from '../../hooks/world';

Given('User opens RedBus', async function (this: CustomWorld) {
    await this.redBusPage.NavigateToRedBus();
    this.logger.info("User navigated to RedBus application");
})
When('User enters City in From text box', async function (this: CustomWorld) {
    await this.redBusPage.Entercity("Goa");
    this.logger.info("User entered city in From text box");
})
Then('User Clicks on option', async function (this: CustomWorld) {
    await this.redBusPage.EnterFromCity();
    this.logger.info("User clicked on option");
})
Then('User enters City in To text box', async function (this: CustomWorld) {
    await this.redBusPage.EnterToCity("Pondi");
})
Then('User Clicks on To City option', async function (this: CustomWorld) {
    await this.redBusPage.EnterToCityOption();
})
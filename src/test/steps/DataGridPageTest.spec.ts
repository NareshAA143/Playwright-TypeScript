import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user navigates to the DataGrid page', async function(this:CustomWorld){

    await this.dataGridPage.NavigateToDataGridPage();
});
Then('the balance is visible in the DataGrid', async function(this:CustomWorld){

    await this.dataGridPage.BalancesInDataGrid();
});
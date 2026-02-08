import { Given, When, Then } from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('User navigates to LetCode', async function (this: CustomWorld) {
    await this.letcodePage.NavigateToLetcodePage();
});

When('User sees rows of Table', async function (this: CustomWorld) {
    await this.letcodePage.CheckShoppingTable();
    await this.letcodePage.RowsCount();
});
Then('User sees Table heading columns', async function (this: CustomWorld) {
    await this.letcodePage.CheckTableHeadingColumns();
});
Then('User sees columns of Table', async function (this: CustomWorld) {
    await this.letcodePage.ColumnsCount();
});
Then('User sees all items in shopping list', async function (this: CustomWorld) {
    await this.letcodePage.PrintShoppingListItems();
    await this.letcodePage.PrintShoppingListPrices();
})
Then('User checks 2nd row 1st column cell', async function (this: CustomWorld) {

    await this.letcodePage.CheckApple();
})

When('User sees handle table', async function (this: CustomWorld) {
    await this.letcodePage.CheckHandleTable();

})
Then('User sees table headers', async function (this: CustomWorld) {
    await this.letcodePage.CheckLetsHandleItTableHeaders();
})
Then('User sees table rows', async function (this: CustomWorld) {
    await this.letcodePage.CheckLetsHandleItTableRows();
})

Then('User checks 1st checkbox', async function (this: CustomWorld) {
    await this.letcodePage.FiterRowsByText();
})
Then('User checks checkbox by name', async function (this: CustomWorld) {
    await this.letcodePage.CheckOnCheckBoxbyName("Raj");
    await this.letcodePage.CheckOnCheckBoxbyName("Man");
    await this.letcodePage.CheckOnCheckBoxbyNameUsingForLoop("Chatterjee");
})
When('User sees sort Table', async function (this: CustomWorld) {
    await this.letcodePage.CheckSortTable();
})
Then('User sees sort table headers', async function (this: CustomWorld) {
    await this.letcodePage.ListSortTableHeaders();
})
Then('User sees sorted calories', async function (this: CustomWorld) {
    await this.letcodePage.sortByCalories();
})

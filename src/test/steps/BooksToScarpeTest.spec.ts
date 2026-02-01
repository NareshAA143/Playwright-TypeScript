import {Given, When, Then} from "@cucumber/cucumber";
import { CustomWorld } from "../../hooks/world";

Given('user navigates to the Books to Scrape page', async function(this:CustomWorld){

    await this.booksToScrapePage.NavigateToBooksToScrapePage();
});
Then('user sees the prices of the books', async function(this:CustomWorld){

    await this.booksToScrapePage.GetBooksPrice();
});
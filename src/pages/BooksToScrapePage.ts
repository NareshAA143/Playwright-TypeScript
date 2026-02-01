import{Page,Locator, expect} from "@playwright/test";

export default class BooksToScrapePage{
    private page: Page;
    private BookPrices:Locator;

    constructor(page:Page) {
        this.page = page;
        this.BookPrices=this.page.locator(".price_color")
    }
    public async NavigateToBooksToScrapePage(){
        await this.page.goto("https://books.toscrape.com/");
    }
    public async GetBooksPrice(){
        const prices= await this.BookPrices.allTextContents();//returns array of string
        console.log("Prices in Books to Scrape :",prices);
        const regerx=/\d+\.\d{2}/;//regext to match $
        const cleanedPrices = prices.map(price=>price.match(regerx));//returns array of strings without $
        console.log("Cleaned Prices in Books to Scrape :",cleanedPrices);
    }
}
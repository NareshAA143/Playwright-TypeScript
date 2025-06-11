import { Given,When,Then, setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import ProductsPage from "../../pages/ProductsPage";

let productsPage: ProductsPage;
let assert: Assert;


Given('User is on Products page', async function () {
     productsPage = new ProductsPage(fixture.page);
    assert = new Assert(fixture.page);

})

Given('User clicks on SonyVaioI5', async function () {

    productsPage.clickOnProduct();
    fixture.logger.info("User clicks on SonyVaioI5");
});
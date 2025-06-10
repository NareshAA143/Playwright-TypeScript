import { When,setDefaultTimeout } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";

           When('User clicks on Laptops', async function () {
            await fixture.page.locator("//a[3]").click();
            fixture.logger.info("User clicks on Laptos");
          });
        
           When('User clicks on SonyVaioI5', async function () {
             await fixture.page.locator("//a[normalize-space()='Sony vaio i5']").click();
             fixture.logger.info("User selects SonyVaioI5");
           });
        
           When('User clicks on Add to cart button', async function () {
             const [dialog] = await Promise.all([
              fixture.page.waitForEvent('dialog'),
              fixture.page.locator("//a[normalize-space()='Add to cart']").click()
            ]);
            expect(dialog.message()).toBe('Product added.');
            await dialog.accept();
            fixture.logger.info("User adds product to cart");
           });

           When('User clicks on logout button', async function () {

            await fixture.page.locator("#logout2").click();
            fixture.logger.info("User logged out successfully");

           });
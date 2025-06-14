import { Before, When,setDefaultTimeout ,Then, Given} from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import AddToCartPage from "../../pages/AddToCartPage";
import Assert from "../../helper/wrapper/assert";

  let addToCart: AddToCartPage;
  let assert: Assert

  Given('User is on Add to cart page', async function () {
      addToCart = new AddToCartPage(fixture.page);
      assert = new Assert(fixture.page);
      fixture.logger.info("User is on Add to cart page");
  })
        
  Given('User clicks on Add to cart button', async function () {
     
      fixture.page.on('dialog',async (dialog)=>{
        const alertMessage= dialog.message();
         expect(alertMessage).toBe('Product added.');
         await dialog.accept(); 
      })
      await addToCart.clickOnAddToCart()
      fixture.logger.info("User clicks on Add to cart button");
  })
        

 Then('User clicks on logout button', async function () {

       await addToCart.clickOnLogout();
        fixture.logger.info("User logged out successfully");

   });
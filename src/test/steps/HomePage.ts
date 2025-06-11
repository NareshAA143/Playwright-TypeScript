import { Given,When,Then, setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { fixture } from "../../hooks/pageFixture";
import Assert from "../../helper/wrapper/assert";
import HomePage from "../../pages/HomePage";    


let homePage: HomePage;
let assert: Assert;


Given('User is on Home page', async function () {
     homePage = new HomePage(fixture.page);
    assert = new Assert(fixture.page);

})

Given('Login should be success', async function () {
    
        await homePage.verifyUserName();
        fixture.logger.info("Username is Welcome pavanol");

         });

When('User clicks on Laptops', async function () {

           await homePage.clickOnLaptops();
           fixture.logger.info("User clicks on Laptos");
           
          });
        
       

 
          
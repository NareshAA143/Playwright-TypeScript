import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/LoginPage";  
import Assert from "../../helper/wrapper/assert";
import data from "../../helper/util/test-data/LoginData.json";
import PhonesPage from "../../pages/PhonesPage";


let phonesPage: PhonesPage;
let assert: Assert;

When('User is on Phones Page', async function () {
         
          phonesPage = new PhonesPage(fixture.page);
          assert = new Assert(fixture.page);
          fixture.logger.info("User is on Phones Page");
           
   });

Then(`User see's list of Phones`, async function () {
          
          const phoneNames:string[] = await phonesPage.listOfPhones();
          phoneNames.forEach((product,index)=>{
                     console.log(`Product ${index+1} is ${product}`);
          });
          fixture.logger.info(`list of Phones: ${phoneNames.join(',')}`);
          fixture.logger.info("User see's list of Phones");

})

Then('User clicks on iphone6', async function () {
    
        await phonesPage.clickOniPhone();
        fixture.logger.info("User clicks on iphone6");

})

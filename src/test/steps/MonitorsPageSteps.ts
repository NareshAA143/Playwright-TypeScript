import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import LoginPage from "../../pages/LoginPage";  
import Assert from "../../helper/wrapper/assert";
import data from "../../helper/util/test-data/LoginData.json";
import MonitorsPage from "../../pages/MonitorsPage";


let monitorsPage: MonitorsPage;
let assert: Assert;


Given('User is on Monitors Page', async function () {
     monitorsPage = new MonitorsPage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User is on the Monitors page");
})

Then(`User see's list of Monitors`, async function () {
    
     const monitorNames:string[] = await monitorsPage.listOfMonitors();
              monitorNames.forEach((product,index)=>{
                         console.log(`Product ${index+1} is ${product}`);
              });
               fixture.logger.info("User see's list of monitors");
              fixture.logger.info(`list of monitors: ${monitorNames.join(',')}`);
             
})

Then('User clicks on Apple Monitors', async function () {
    
        await monitorsPage.clickOnAppleMonitor();
        fixture.logger.info("User clicks on Apple Monitor");

})


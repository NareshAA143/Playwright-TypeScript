import { Before, When,setDefaultTimeout ,Then, Given} from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";
import OrangeHRMAdminPage from "../../pages/OrangeHRMAdminPage";    
import Assert from "../../helper/wrapper/assert";

let AdminPage : OrangeHRMAdminPage
let assert: Assert;


Given('user is on Admin Page', async function () {
    AdminPage = new OrangeHRMAdminPage(fixture.page);
    assert = new Assert(fixture.page);
    fixture.logger.info("User is on Admin Page");
});

Then('user enters username',async function () {
    await AdminPage.enterUserName("Jobinsam@6742");
})
Then('user selects user role',async function () {   
    await AdminPage.selectUserRole(0,"ESS");
})

Then('user enters employee name',async function () {
    await AdminPage.enterEmployeeName("Jobin Sam");
})
Then('user selects status',async function () {
    await AdminPage.selectStatus(1,"Enabled");
})
Then('user clicks on search',async function(){
    await AdminPage.clickOnSearch();
})
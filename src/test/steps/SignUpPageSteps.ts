import { Given,When,Then,setDefaultTimeout, Before } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture"; 
import Assert from "../../helper/wrapper/assert";
import SignUpPage from "../../pages/SignUpPage";
const signUpData = require("../../helper/util/test-data/SignUpData.json");

let signUpPage: SignUpPage;
let assert: Assert;

  Given('User click on Signup button', async function () {
     signUpPage = new SignUpPage(fixture.page);
     assert = new Assert(fixture.page);
     await signUpPage.clickOnSignUp();
     fixture.logger.info("User clicks on Signup button");
     await this.attach("User clicks on Signup button", "text/plain");
   });

   Then('User enters username', async function () {
          
          await signUpPage.enterUserName(signUpData.userName);
          fixture.logger.info("User enters the username");
          await this.attach("User enters the username", "text/plain");

     });

  Then('User enters password', async function () {

          await signUpPage.enterPassword(signUpData.password);
          fixture.logger.info("User enters the password");
          await this.attach("User enters the password", "text/plain");

  })

  When('User clicks on Signup button', async function () {

          await signUpPage.clickOnSignUpBtn();
          fixture.logger.info("User clicks on Signup button");
          await this.attach("User clicks on Signup button", "text/plain");
           
    });

     
import { Given,When,Then, setDefaultTimeout } from "@cucumber/cucumber"
setDefaultTimeout(60 * 1000*2);
import { expect } from "playwright/test"
import { fixture } from "../../hooks/pageFixture";


       //Background: Login Page--starts
         Given('User navigates to the application', async function () {
         
          await fixture.page.goto(process.env.BASEURL as string);
          fixture.logger.info("Navigated to the application");
           
         });

         When('User click on the login link', async function () {

          await fixture.page.locator("#login2").click();
        });

        //Background: Login fixture.page--ends



        //Scenario: Login should be success--starts
       
         When('User enter the username as {string}', async function (username) {
          
          await fixture.page.locator("#loginusername").fill(username)

         });

         When('User enter the password as {string}', async function (password) {
          await fixture.page.locator("#loginpassword").fill(password)

         });


         When('User click on the login button', async function () {

          await fixture.page.locator("button[onclick='logIn()']").click();
           
         });

   
         Then('Login should be success', async function () {
           await fixture.page.locator("#nameofuser").isVisible();
           const username = await fixture.page.locator("#nameofuser").innerText();
           console.log(username);
           fixture.logger.info("Username: "+username);
           await expect(fixture.page).toHaveTitle("STORE");
          
         });
        
         //Scenario: Login should be success--ends



         //Scenario: Login should not be success--starts

         Then('Login should fail', async function () {     
            const [dialog] = await Promise.all([
              fixture.page.waitForEvent('dialog'),
              fixture.page.locator("button[onclick='logIn()']").click()
            ]);
            expect(dialog.message()).toBe('Wrong password.');
            await dialog.accept();
          });
         
          //Scenario: Login should not be success--ends


         
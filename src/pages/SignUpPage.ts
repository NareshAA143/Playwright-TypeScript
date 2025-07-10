import {expect,Page} from "@playwright/test";
import PlaywrightWrapper from "../helper/wrapper/PlaywrightWrapper";
import { sign } from "crypto";

export default class SignUpPage {

   private page: Page;
   
       private base: PlaywrightWrapper;
   
       constructor( page: Page) {
           this.page = page;
           this.base = new PlaywrightWrapper(page);
       }

       private Elements={
           signUpLink:"#signin2",
           userName:"#sign-username",
           password:"#sign-password",
           signUpBtn:"button[onclick='register()']"
       }

       async clickOnSignUp() {
           await this.page.click(this.Elements.signUpLink);
       }
       async enterUserName(userName: string) {
           await this.page.fill(this.Elements.userName, userName);
       }
       async enterPassword(password: string) {
           await this.page.fill(this.Elements.password, password);
       }
       async clickOnSignUpBtn() {
           this.page.once('dialog', async (dialog) => {
               const alertMessage = dialog.message();
               expect(alertMessage).toBe('Sign up successful.');
               await dialog.accept();
           });
           await this.page.click(this.Elements.signUpBtn);
       }
    }
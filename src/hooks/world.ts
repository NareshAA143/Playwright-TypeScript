import { setWorldConstructor, World, IWorldOptions } from "@cucumber/cucumber";
import { Page, Browser, BrowserContext } from "playwright";
import { Logger } from "winston";
import OrangeHRMLoginPage from "../pages/OrangeHRMLoginPage";//import classes
import OrangeHRMHomePage from "../pages/OrangeHRMHomePage";
import OrangeHRMLeavePage from "../pages/OrangeHRMLeavePage";
import OrangeHRMAdminPage from "../pages/OrangeHRMAdminPage";
import AmazonHomePage from "../pages/AmazonHomePage";
import LetcodePage from "../pages/LetcodePage";
import GlobalSQPage from "../pages/GlobalSQPage";
export class CustomWorld extends World {
  // Playwright objects
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  logger!: Logger;

  //Declare Page objects
  loginPage!: OrangeHRMLoginPage;
  homePage!: OrangeHRMHomePage;
  leavePage!: OrangeHRMLeavePage;
  adminPage!: OrangeHRMAdminPage;
  amazonHomePage!: AmazonHomePage;
  letcodePage!: LetcodePage;
  globalSQPage!: GlobalSQPage;

  constructor(options: IWorldOptions) {
    super(options);
  }

  /**
   * Initialize all page objects for this scenario.
   * Call this in Before hooks after page is assigned.
   */
  initPages() {
    this.loginPage = new OrangeHRMLoginPage(this.page);
    this.homePage = new OrangeHRMHomePage(this.page);
    this.leavePage=new OrangeHRMLeavePage(this.page);
    this.adminPage=new OrangeHRMAdminPage(this.page);
    this.amazonHomePage=new AmazonHomePage(this.page);
    this.letcodePage=new LetcodePage(this.page);
    this.globalSQPage=new GlobalSQPage(this.page);
  }
}

setWorldConstructor(CustomWorld);

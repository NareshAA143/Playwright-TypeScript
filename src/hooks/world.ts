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
import Play1Page from "../pages/Play1Page";
import FlipkartPage from "../pages/FlipkartPage";
import TutorialsPage from "../pages/TutorialsPage";
import  TestPages  from "../pages/TestPages";
import UITapPage from "../pages/UITapPage";
import ToolsQAPage from "../pages/ToolsQAPage";
import sausdemoPage from "../pages/SausdemoPage";
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
  play1Page!: Play1Page;
  flipkartPage!: FlipkartPage;
  tutorialsPage!: TutorialsPage;
  testPages!: TestPages;
  uiTapPage!: UITapPage;
  toolsQAPage!: ToolsQAPage;
  sausdemoPage!: sausdemoPage;

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
    this.play1Page=new Play1Page(this.page);
    this.flipkartPage=new FlipkartPage(this.page);
    this.tutorialsPage=new TutorialsPage(this.page);
    this.testPages=new TestPages(this.page);
    this.uiTapPage=new UITapPage(this.page);
    this.toolsQAPage=new ToolsQAPage(this.page);
    this.sausdemoPage=new sausdemoPage(this.page);
  }
}

setWorldConstructor(CustomWorld);

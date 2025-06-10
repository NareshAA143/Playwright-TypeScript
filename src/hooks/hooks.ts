import { Before, After, BeforeAll, AfterAll,Status} from "@cucumber/cucumber"
import { Browser ,BrowserContext } from "playwright"
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { options } from "../helper/util/logger";
import { createLogger } from "winston";

let browser: Browser    
let context: BrowserContext;


//Before starting of Feature file BeforeAll Block is executed
BeforeAll(async function () {
  getEnv();
  browser= await invokeBrowser(); 
});


//Before starting of each scenario Before Block is executed
Before(async function ({pickle}) {
    const scenarioName = pickle.name+pickle.id;
     context = await browser.newContext();
     const page = await context.newPage();
     fixture.page = page;
     fixture.logger = createLogger(options(scenarioName));
  
});

// After every Scenario step it is executed
// AfterStep(async function ({pickle,result}) {
//  const img =await pageFixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:'png'});
//   await this.attach(img, "image/png");
// });

//After completion of each scenario After Block is executed
After(async function ({pickle, result}) {
    console.log(result?.status);
    //screenshot
    if (result?.status === Status.FAILED) {
        const img =await fixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:'png'});
    this.attach(img, "image/png");
    }
  await fixture.page.close();
  await context.close();
});

//After completion of Feature file AfterAll Block is executed
AfterAll(async function () {
  await browser.close();
  fixture.logger.close();
}); 
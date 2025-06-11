import { Before, After, BeforeAll, AfterAll,Status} from "@cucumber/cucumber"
import { Browser ,BrowserContext } from "playwright"
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");

let browser: Browser    
let context: BrowserContext;


//Before starting of Feature file BeforeAll Block is executed
BeforeAll(async function () {
  getEnv();
  browser= await invokeBrowser(); 
});


//Before starting of each scenario Before Block is executed
// It will trigger for not auth scenarios
Before({ tags: "not @auth" }, async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        recordVideo: {
            dir: "test-results/videos",
        },
    });
    await context.tracing.start({
        name: scenarioName,
        title: pickle.name,
        sources: true,
        screenshots: true, snapshots: true
    });
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
  let videoPath: string='';
  let img: Buffer=Buffer.from('');

    if (result?.status === Status.FAILED) {
        img =await fixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:'png'});
        
        const video = fixture.page.video();
        videoPath =video? await video.path():'';
   
    }
  await fixture.page.close();
  await context.close();
  if(result?.status === Status.FAILED){
    this.attach(img, "image/png");
   if(videoPath){
   this.attach(fs.readFileSync(videoPath), 'video/webm');
  }
}
});

//After completion of Feature file AfterAll Block is executed
AfterAll(async function () {
  await fixture.page.close();
  await browser.close();
  
}); 


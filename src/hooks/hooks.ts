import { Before, After, BeforeAll, AfterAll,Status} from "@cucumber/cucumber"
import { Browser ,BrowserContext } from "playwright"
import { fixture } from "./pageFixture";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
const fs = require("fs-extra");

//Declares top‑level vars to hold the browser instance and context across scenarios.
let browser: Browser    
let context: BrowserContext;


//Runs once before any feature files,Loads environment config and launches the browser.
BeforeAll(async function () {
  getEnv();
  browser= await invokeBrowser(); 
});

//Runs before each scenario without @auth tag.
//Constructs a new browser context with video recording.
//Starts Playwright tracing for diagnostics.
//Opens a new page; attaches it and a logger to the shared fixture.
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


//Similar to the previous hook, but for @auth scenarios.
//Uses previously saved storageState (cookies/localStorage) based on scenario name.
//Allows pre-authenticated flows.
Before({ tags: '@auth' }, async function ({ pickle }) {
    const scenarioName = pickle.name + pickle.id
    context = await browser.newContext({
        storageState: getStorageState(pickle.name),
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

//Executes after every scenario:
//If the scenario passed:
//Takes a screenshot.
//Retrieves the recorded video file path.
//Stops tracing and saves the .zip.
//Cleans up the page and context.
//Attaches screenshot, video, and a trace link to the Cucumber report.
After(async function ({pickle, result}) {
  let videoPath: string='';
  let img: Buffer=Buffer.from('');
  const path = `./test-results/traces/${pickle.name}.zip`;
    if (result?.status === Status.PASSED) {
        img =await fixture.page.screenshot({path: `./test-results/screenshots/${pickle.name}.png`, type:'png'});
        
        const video = fixture.page.video();
        videoPath =video? await video.path():'';
   
    }
    await context.tracing.stop({ path: path });
    await fixture.page.close();
    await context.close();

  if(result?.status === Status.PASSED){

    this.attach(img, "image/png");

   if(videoPath){

   this.attach(fs.readFileSync(videoPath), 'video/webm');

    const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${path}</a>`
        await this.attach(`Trace file: ${traceFileLink}`, 'text/html');

  }
}
});

//Ensures any remaining page/context is closed.
//Closes the browser completely.
AfterAll(async function () {
 if(fixture.page){
  await fixture.page.close();
 }

 if(browser){   
  await browser.close();
 }
}); 

//Determines which authentication state file to load based on scenario identifier.
//Returns a path to the JSON representing prior logged‑in session.
function getStorageState(user:string): string | { cookies: Array<{ name: string; value: string; domain: string; path: string; expires: number; httpOnly: boolean; secure: boolean; sameSite: "Strict" | "Lax" | "None"; }>; origins: Array<{ origin: string; localStorage: Array<{ name: string; value: string; }>; }>; } | undefined {
 if(user.endsWith("admin")){
  return "src/helper/auth/admin.json";
 }
 else if(user.endsWith("lead")){
  return "src/helper/auth/lead.json";
 }
 
}


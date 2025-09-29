// import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
// import { Browser, BrowserContext } from "playwright";
// import { fixture } from "./pageFixture";
// import { invokeBrowser } from "../helper/browsers/browserManager";
// import { getEnv } from "../helper/env/env";
// import { createLogger } from "winston";
// import { options } from "../helper/util/logger";
// import * as fs from "fs-extra";

// let browser: Browser;
// let context: BrowserContext;

// BeforeAll(async function () {
//   await fs.ensureDir("allure-results");
//   console.log("ensured allure-results folder exists");

//   getEnv();
//   browser = await invokeBrowser();
// });

// // Before hook for scenarios NOT tagged with @auth
// Before({ tags: "not @auth" }, async function ({ pickle }) {
//   const scenarioName = pickle.name + pickle.id;
//   context = await browser.newContext({
//     recordVideo: {
//       dir: "test-results/videos",
//     },
//   });
//   await context.tracing.start({
//     name: scenarioName,
//     title: pickle.name,
//     sources: true,
//     screenshots: true,
//     snapshots: true,
//   });
//   const page = await context.newPage();
//   fixture.page = page;
//   fixture.logger = createLogger(options(scenarioName));
// });

// // Before hook for scenarios tagged with @auth
// Before({ tags: "@auth" }, async function ({ pickle }) {
//   const scenarioName = pickle.name + pickle.id;
//   context = await browser.newContext({
//     storageState: getStorageState(pickle.name),
//     recordVideo: {
//       dir: "test-results/videos",
//     },
//   });
//   await context.tracing.start({
//     name: scenarioName,
//     title: pickle.name,
//     sources: true,
//     screenshots: true,
//     snapshots: true,
//   });
//   const page = await context.newPage();
//   fixture.page = page;
//   fixture.logger = createLogger(options(scenarioName));
// });

// After(async function ({ pickle, result }) {
//   let videoPath: string = "";
//   let img: Buffer = Buffer.from("");
//   const tracePath = `./test-results/traces/${pickle.name}.zip`;

//   if (result?.status === Status.PASSED || result?.status === Status.FAILED){
//     img = await fixture.page.screenshot({
//       path: `./test-results/screenshots/${pickle.name}.png`,
//       type: "png",
//     });
//     const video = fixture.page.video();
//     videoPath = video ? await video.path() : "";
//   }

//   await context.tracing.stop({ path: tracePath });
//   await fixture.page.close();
//   await context.close();

//   // Attach screenshot to reports (Cucumber & Allure)
//   if (img) {
//     await this.attach(img, "image/png");
//   }

//   // Attach video to reports (Cucumber & Allure)
//   if (videoPath && fs.existsSync(videoPath)) {
//     const videoBuffer = fs.readFileSync(videoPath);
//     await this.attach(videoBuffer, "video/webm");
//   }

//   // Attach trace link as HTML to reports
//   const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${tracePath}</a>`;
//   await this.attach(`Trace file: ${traceFileLink}`, "text/html");
// });

// AfterAll(async function () {
//   if (fixture.page) {
//     await fixture.page.close();
//   }

//   if (browser) {
//     await browser.close();
//   }
// });

// function getStorageState(user: string): string | undefined {
//   if (user.endsWith("admin")) {
//     return "src/helper/auth/admin.json";
//   } else if (user.endsWith("lead")) {
//     return "src/helper/auth/lead.json";
//   }
// }



//world.ts
import { Before, After, BeforeAll, AfterAll, Status } from "@cucumber/cucumber";
import { Browser, BrowserContext } from "playwright";
import { invokeBrowser } from "../helper/browsers/browserManager";
import { getEnv } from "../helper/env/env";
import { createLogger } from "winston";
import { options } from "../helper/util/logger";
import * as fs from "fs-extra";
import { CustomWorld } from "./world";


let browser: Browser;
let context: BrowserContext;

// Before all scenarios
BeforeAll(async function () {
  await fs.ensureDir("allure-results");
  console.log("Ensured allure-results folder exists");

  getEnv();
  browser = await invokeBrowser();
});

// Before hook for scenarios NOT tagged with @auth
Before({ tags: "not @auth" }, async function (this: CustomWorld, { pickle }) {
  const scenarioName = pickle.name + pickle.id;

  context = await browser.newContext({
    recordVideo: { dir: "test-results/videos" },
  });

  await context.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true,
    snapshots: true,
  });

  this.page = await context.newPage();
  this.logger = createLogger(options(scenarioName));

  // Initialize page objects
  this.initPages();
});

// Before hook for scenarios tagged with @auth
Before({ tags: "@auth" }, async function (this: CustomWorld, { pickle }) {
  const scenarioName = pickle.name + pickle.id;

  context = await browser.newContext({
    storageState: getStorageState(pickle.name),
    recordVideo: { dir: "test-results/videos" },
  });

  await context.tracing.start({
    name: scenarioName,
    title: pickle.name,
    sources: true,
    screenshots: true,
    snapshots: true,
  });

  this.page = await context.newPage();
  this.logger = createLogger(options(scenarioName));

  // Initialize page objects
  this.initPages();
});

// After each scenario
After(async function (this: CustomWorld, { pickle, result }) {
  const tracePath = `./test-results/traces/${pickle.name}.zip`;
  let videoPath = "";
  let img: Buffer = Buffer.from("");

  if (result?.status === Status.PASSED || result?.status === Status.FAILED) {
    img = await this.page.screenshot({
      path: `./test-results/screenshots/${pickle.name}.png`,
      type: "png",
    });

    const video = this.page.video();
    videoPath = video ? await video.path() : "";
  }

  await context.tracing.stop({ path: tracePath });
  await this.page.close();
  await context.close();

  // Attach screenshot
  if (img) {
    await this.attach(img, "image/png");
  }

  // Attach video
  if (videoPath && fs.existsSync(videoPath)) {
    const videoBuffer = fs.readFileSync(videoPath);
    await this.attach(videoBuffer, "video/webm");
  }

  // Attach trace link
  const traceFileLink = `<a href="https://trace.playwright.dev/">Open ${tracePath}</a>`;
  await this.attach(`Trace file: ${traceFileLink}`, "text/html");
});

// After all scenarios
AfterAll(async function () {
  if (context) await context.close();
  if (browser) await browser.close();
});

// Helper to get storage state for @auth scenarios
function getStorageState(user: string): string | undefined {
  if (user.endsWith("admin")) return "src/helper/auth/admin.json";
  if (user.endsWith("lead")) return "src/helper/auth/lead.json";
  return undefined;
}

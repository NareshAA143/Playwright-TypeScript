import { chromium, LaunchOptions,firefox, webkit } from "playwright-core"//importing browser engines

const options: LaunchOptions={  //declaring browser launch options
    headless: false,
}

export const invokeBrowser=()=>{
    //const browserType =process.env.npm_config_BROWSER || "chrome";//reads environment variable passed from command line, if no no browser passed it takes chrome as default
   const browserType=process.env.BROWSER;//takes browser from environment variable, package.json>scripts>"test": ENV= staging --if you want to run in prod change to prod
    switch (browserType) {
        case "chrome":
           return chromium.launch(options);//it launches the chrome browser
           
        case "firefox":
          return firefox.launch(options);//it launches the firefox browser
           
        case "webkit":
           return webkit.launch(options);//it launches the webkit browser
        default:    
            throw new Error("Please set the proper browser!");
}
}


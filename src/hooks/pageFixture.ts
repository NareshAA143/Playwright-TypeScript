//The fixture object serves as global shared storage for all Pages and Winston loggers instances

import { BrowserContext, Page } from "@playwright/test";
import { Logger } from "winston";

export const fixture:{

    page: Page;//playwright page object
    logger: Logger;
    
}={
    page: undefined as unknown as Page, //"I'm declaring page as Page, but right now it's undefined, and that’s OK temporarily."
    logger: undefined as unknown as Logger //"I'm declaring logger as Logger, but right now it's undefined, and that’s OK temporarily."
}

 

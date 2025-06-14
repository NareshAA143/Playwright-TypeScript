//The fixture object serves as global shared storage for all Pages and Winston loggers instances

import { BrowserContext, Page } from "@playwright/test";
import { Logger } from "winston";

export const fixture:{

    page: Page;//playwright page object
    logger: Logger;
    
}={
    page: undefined as unknown as Page,
    logger: undefined as unknown as Logger
}

    // page: undefined as Page,
    // logger: undefined as unknown as Logger  

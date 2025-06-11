import { Page } from "@playwright/test";
import { Logger } from "winston";

export const fixture:{


    page: Page;
    logger: any;
}={
    page: undefined as unknown as Page,
    logger: undefined
}

    // page: undefined as Page,
    // logger: undefined as unknown as Logger  

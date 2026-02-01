import { Logger } from "winston";

// Resolve the Allure API from the global reporter (preferred) or fallback to
// the library. Use require at runtime to avoid issues when the reporter
// provides its own runtime instance.
function getAllure(): any {
  if (typeof (globalThis as any).allure !== "undefined") return (globalThis as any).allure;
  try {
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    return require("allure-js-commons");
  } catch {
    return undefined;
  }
}

const allure = getAllure();

/**
 * AllureLogger wraps a Winston logger and adds Allure step reporting.
 * Each log call creates both a Winston log entry AND an Allure step.
 */
export class AllureLogger {
  constructor(private logger: Logger) {}

  /**
   * Log info level message and add as Allure step.
   */
  info(message: string): void {
    this.logger?.info(message);
    (allure as any)?.step?.(`ℹ️ ${message}`, () => {});
  }

  /**
   * Log warning level message and add as Allure step.
   */
  warn(message: string): void {
    this.logger?.warn(message);
    (allure as any)?.step?.(`⚠️ ${message}`, () => {});
  }

  /**
   * Log error level message and add as Allure step.
   */
  error(message: string): void {
    this.logger?.error(message);
    (allure as any)?.step?.(`❌ ${message}`, () => {});
  }

  /**
   * Log debug level message and add as Allure step.
   */
  debug(message: string): void {
    this.logger?.debug(message);
    (allure as any)?.step?.(`🔍 ${message}`, () => {});
  }

  /**
   * Create an Allure step with a custom name for action logging.
   */
  step(stepName: string, action?: () => void | Promise<void>): void {
    this.logger?.info(`STEP: ${stepName}`);
    if (action) {
      (allure as any)?.step?.(stepName, action);
    } else {
      (allure as any)?.step?.(stepName, () => {});
    }
  }
}

import { CucumberJSAllureFormatter } from 'allure-cucumberjs';
import { AllureRuntime } from 'allure-js-commons';  // <-- import from here
import { IFormatterOptions } from '@cucumber/cucumber';

export default function (options: IFormatterOptions) {
  return new CucumberJSAllureFormatter(
    options,
    new AllureRuntime({ resultsDir: 'allure-results' }),
    { labels: [] } // you can customize allure options here
  );
}

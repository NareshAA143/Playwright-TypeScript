//This configuration file defines two profiles for running Cucumber.js tests: default and rerun. 
//Each profile specifies settings for running tests, including tags, formats, and other options. 
//It tells Cucumber how to run your tests, what to include, and how to output results.
module.exports =  {
    "default": {
        "tags":process.env.npm_config_TAGS ||"",
        "formatOptions": {
            "snippetInterface": "async-await"
        },
        "paths":[
            "src/test/features/"
        ],
        "publishQuiet": true,
        "dryRun": false,
        "require":[
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],

        "requireModule": [
            "ts-node/register"
        ],
        "format":[
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        "parallel":2    
    },


    "rerun": {
        "formatOptions": {
            "snippetInterface": "async-await"
        },
       
        "publishQuiet": true,
        "dryRun": false,
        "require":[
            "src/test/steps/*.ts",
            "src/hooks/hooks.ts"
        ],

        "requireModule": [
            "ts-node/register"
        ],
        "format":[
            "progress-bar",
            "html:test-results/cucumber-report.html",
            "json:test-results/cucumber-report.json",
            "rerun:@rerun.txt"
        ],
        "parallel":2    
    }
    
}

/*

tags: Specifies which scenarios to run based on tags. 
It first checks for a --tags argument passed via the command line (process.env.npm_config_TAGS). 
If not provided, it defaults to an empty string, meaning all scenarios will run.

formatOptions: Configures the format of the generated code snippets in the report. 
Setting "snippetInterface": "async-await" ensures that the snippets are generated using async/await syntax.

paths: Defines the location of the feature files. In this case, it points to the src/test/features/ directory.

publishQuiet: When set to true, suppresses the publishing of test results to the Cucumber dashboard.

dryRun: If set to true, Cucumber will parse the feature files and check for undefined steps without executing the steps. 
Here, it's set to false, meaning the tests will be executed.

require: Specifies the files to be loaded before running the tests.
It includes the step definitions (src/test/steps/*.ts) and hooks (src/hooks/hooks.ts).

requireModule: Lists the modules to be required before running the tests. "ts-node/register" is used to enable TypeScript support.

format: Defines the output formats for the test results. It includes:

"progress-bar": Displays a progress bar in the console.

"html:test-results/cucumber-report.html": Generates an HTML report.

"json:test-results/cucumber-report.json": Generates a JSON report.

"rerun:@rerun.txt": Creates a file (@rerun.txt) listing failed scenarios for re-execution.

parallel: Specifies the number of workers to run tests in parallel. Here, it's set to 2.

*/


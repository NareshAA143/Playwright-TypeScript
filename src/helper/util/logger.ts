//This function creates and returns a winston logger configuration object customized ffor a test scenario
//it logs messages at level info or higher into a file named dynamically based on the scenario name
import { transports, format}  from "winston";

export function options(scenarioName:string){
    return{
        transports:[
            new transports.File({
                filename: `test-results/logs/${scenarioName}/log.log`,
                level: 'info',
                format: format.combine(
                    format.timestamp({format: 'MMM-DD-YYYY HH:mm:ss'}),
                    format.align(),
                    format.printf(info => `${info.level}: ${info.timestamp}: ${info.message}`)
                )

            }),

        ]
    }
}; 



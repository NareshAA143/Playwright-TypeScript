//To load .env file on the ENV environemnet variable, to apply appropriate configurations during automation
import * as dotenv from 'dotenv'

export const getEnv = ()=>{
    dotenv.config({
        override: true,
        path:`src/helper/env/.env.${process.env.ENV}`
    })

}


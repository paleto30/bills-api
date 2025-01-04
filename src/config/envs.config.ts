import "dotenv/config";
import * as joi from 'joi'




// interfaces de las envs
interface IEnvVars {

    PORT: number;

    DB_HOST: string;
    DB_PORT: number;
    DB_NAME: string;
    DB_USERNAME: string;
    DB_PASSWORD: string;

}


// esquema de validacion envs
const envsSchema = joi.object({
    PORT: joi.number().integer().required(),
    DB_HOST: joi.string().trim().min(5).required(),
    DB_PORT: joi.number().integer().required(),
    DB_NAME: joi.string().trim().min(1).required(),
    DB_USERNAME: joi.string().trim().min(1).required(),
    DB_PASSWORD: joi.string().trim().min(1).required(),
})
    .unknown(true);



//validar datos de envs
const { error, value } = envsSchema.validate(process.env);

if (error) {
    throw new Error(`Error en validacion de variables entorno: ${error}`);
}




const envVars: IEnvVars = value;


// exportar obj con las envs
export const envs = {
    app_port: envVars.PORT,
    db_host: envVars.DB_HOST,
    db_port: envVars.DB_PORT,
    db_name: envVars.DB_NAME,
    db_username: envVars.DB_USERNAME,
    db_password: envVars.DB_PASSWORD
}
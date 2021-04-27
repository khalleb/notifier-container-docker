import { Joi } from 'celebrate';
import dotenv from 'dotenv';

const envFound = dotenv.config();
if (envFound.error) {
  throw new Error('⚠️  Couldn find .env file  ⚠️');
}

const envVarsSchema = Joi.object()
  .keys({
    DRIVER_MESSAGE: Joi.string().valid('telegram').required(),

    TELEGRAM_BOT_TOKEN: Joi.string().required(),
    TELEGRAM_CHAT_ID: Joi.string().required(),

    CONTAINER_FILTER: Joi.string().allow(''),

    LOG_PATH: Joi.string().allow(''),

    IDENTIFIED: Joi.string().allow(''),
  })
  .unknown();

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const { value: envVars, error } = envVarsSchema.prefs({ errors: { label: 'key' } }).validate(process.env);

if (error) {
  throw new Error(`⚠️  ${error.message} FOR .env FILE ⚠️`);
}

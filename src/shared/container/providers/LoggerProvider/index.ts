import { container } from 'tsyringe';

import loggerConfig from '@config/logger';

import WinstonProvider from './implementations/WinstonProvider';
import ILoggerProvider from './models/ILoggerProvider';

const providers = {
  winston: WinstonProvider,
};

const Logger = providers[loggerConfig.driver];

container.registerInstance<ILoggerProvider>('LoggerProvider', new Logger(loggerConfig.config[loggerConfig.driver]));

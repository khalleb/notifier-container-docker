import { createLogger, LoggerOptions, Logger } from 'winston';

import LoggerConsole from '@shared/errors/Logger';

import ILoggerProvider from '../models/ILoggerProvider';

class WinstonProvider implements ILoggerProvider {
  private logger: Logger;

  constructor(config: LoggerOptions) {
    this.logger = createLogger(config);
  }

  log(level: string, message: string, metadata: any): void {
    LoggerConsole.info(message);
    this.logger.log(level, message, { metadata });
  }
}

export default WinstonProvider;

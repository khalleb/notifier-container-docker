import { format as formatDate } from 'date-fns';
import { LoggerOptions, format, transports } from 'winston';

const { combine, timestamp, printf } = format;

interface ILoggerConfig {
  driver: 'winston';
  config: {
    winston: LoggerOptions;
  };
}

export default {
  driver: 'winston',

  config: {
    winston: {
      level: 'info',
      format: combine(
        timestamp(),
        printf(info => {
          return `${info.timestamp} [${info.level}] : ${JSON.stringify(info.message)}`;
        }),
      ),
      transports: [
        new transports.File({
          filename: `${process?.env?.LOG_PATH || '~/log'}/${formatDate(new Date(), 'yyyy-MM-dd')}.log`,
        }),
      ],
    },
  },
} as ILoggerConfig;

interface IMessageConfig {
  driver: 'telegram';
}

export default {
  driver: process.env.DRIVER_MESSAGE || 'telegram',
} as IMessageConfig;

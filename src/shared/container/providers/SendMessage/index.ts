import { container } from 'tsyringe';

import messageConfig from '@config/message';

import TelegramProvider from './implementations/TelegramProvider';
import ISendMessageProvider from './models/ISendMessageProvider';

const providers = {
  telegram: container.resolve(TelegramProvider),
};

container.registerInstance<ISendMessageProvider>('MessageProvider', providers[messageConfig.driver]);

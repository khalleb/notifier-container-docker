import { container } from 'tsyringe';
import messageConfig from '@config/message';

import ISendMessageProvider from './models/ISendMessageProvider';

import TelegramProvider from './implementations/TelegramProvider';

const providers = {
  telegram: container.resolve(TelegramProvider),
};

container.registerInstance<ISendMessageProvider>('MessageProvider', providers[messageConfig.driver]);

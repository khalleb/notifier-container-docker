import { Telegram as Telegraf } from 'telegraf';

import { ITelegramResponse } from '../dtos/ISendMessageProviderDTO';
import ISendMessageProvier from '../models/ISendMessageProvider';

class TelegramProvider implements ISendMessageProvier {
  private client: Telegraf;

  constructor() {
    this.client = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
  }

  public async sendMessage(message: string): Promise<ITelegramResponse> {
    const reponse = (await this.client.sendMessage(process.env.TELEGRAM_CHAT_ID as string, message, {
      parse_mode: 'HTML',
    })) as ITelegramResponse;
    return reponse;
  }
}

export default TelegramProvider;

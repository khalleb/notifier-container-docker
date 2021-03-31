import { Telegram as Telegraf } from 'telegraf';

import ISendMessageProvier from '../models/ISendMessageProvider';


class TelegramProvider implements ISendMessageProvier {
  private client : Telegraf;

  constructor() {
    this.client = new Telegraf(process.env.TELEGRAM_BOT_TOKEN as string);
  }

  public async sendMessage(message: string): Promise<any> {
    const reponse = await this.client.sendMessage(process.env.TELEGRAM_CHAT_ID as string, message, { parse_mode: 'HTML' });
    return reponse;
  }
}

export default TelegramProvider;

declare namespace NodeJS {
  export interface ProcessEnv {
    DRIVER_MESSAGE?: string;

    TELEGRAM_BOT_TOKEN?: string;
    TELEGRAM_CHAT_ID?: string;

    CONTAINER_FILTER?: string;

    LOG_PATH?: string;

    IDENTIFIED?: string;
  }
}

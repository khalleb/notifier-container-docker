export interface ITelegramResponse {
  message_id: number;
  from: {
    id: number;
    is_bot: boolean;
    first_name: string;
    username: string;
  };
  chat: {
    id: number;
    title: string;
    type: string;
  };
  date: number;
  text: string;
  entities: {
    offset: number;
    length: number;
    type: string;
  }[];
}

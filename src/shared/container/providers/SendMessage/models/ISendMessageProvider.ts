export default interface ISendMessageProvider {
  sendMessage(message: string): Promise<any>;
}
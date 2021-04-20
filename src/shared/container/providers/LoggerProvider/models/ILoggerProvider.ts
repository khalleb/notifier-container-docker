export default interface ILoggerProvider {
  log(level: 'error' | 'warn' | 'info', message: string, metadata?: any): void;
}

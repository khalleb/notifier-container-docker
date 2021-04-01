export interface IEventType {
  Type: string;
  Action: 'connect' | 'stop' | 'create' | 'mount' | 'start' | 'kill' | 'die' | 'disconnect' | 'unmount' | 'destroy';
  Actor: {
    ID: string;
    Attributes: {
      container: string;
      name: string;
      type: string;
      image: string;
      exitCode: string;
      signal: string;
      driver: string;
    };
  };
  from: string;
  id: string;
  scope: string;
  status: string;
  time: string;
  timeNano: string;
}

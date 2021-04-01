export default interface IDockerProvider {
  getVersion(): Promise<any>;
  getListContainers(): Promise<any[]>;
  getEvents(): Promise<any>;
}

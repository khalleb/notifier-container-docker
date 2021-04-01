import Dockerode, { ContainerInfo, DockerVersion } from 'dockerode';

import IDockerProvider from '../models/IDockerProvider';

class DockerProvider implements IDockerProvider {
  public docker: Dockerode;

  constructor() {
    this.docker = new Dockerode();
  }

  public async getVersion(): Promise<DockerVersion> {
    const dockerVersion: DockerVersion = await this.docker.version();
    return dockerVersion;
  }

  public async getListContainers(): Promise<ContainerInfo[]> {
    const containers: ContainerInfo[] = await this.docker.listContainers();
    return containers;
  }

  public async getEvents(): Promise<NodeJS.ReadableStream> {
    const containers = await this.docker.getEvents();
    return containers;
  }
}

export default DockerProvider;

import { ContainerInfo, DockerVersion } from 'dockerode';
import { injectable, inject } from 'tsyringe';

import { viewListContainers, viewInit, viewStatusContainer } from '@modules/view/templates';

import DockerProvider from '@shared/container/providers/Docker/implementations/DockerProvider';
import IDockerProvider from '@shared/container/providers/Docker/models/IDockerProvider';
import ILoggerProvider from '@shared/container/providers/LoggerProvider/models/ILoggerProvider';
import ISendMessageProvider from '@shared/container/providers/SendMessage/models/ISendMessageProvider';

import { IEventType } from '../dtos/DockerServicesDTO';

@injectable()
class DockerServices {
  constructor(
    @inject(DockerProvider.name)
    private dockerProvider: IDockerProvider,

    @inject('MessageProvider')
    private sendMessageProvider: ISendMessageProvider,

    @inject('LoggerProvider')
    private loggerProvider: ILoggerProvider,
  ) {}

  public async initialData() {
    const dockerVersion: DockerVersion = await this.dockerProvider.getVersion();
    let message = viewInit(dockerVersion);
    if (message) {
      const conatiners = await this.monitoredContainers();
      const messageContainers = viewListContainers(conatiners);
      message = `${message}
      ${messageContainers}`;
    }
    this.loggerProvider.log('info', message);
    // this.sendMessageProvider.sendMessage(message);
  }

  public async monitoredContainers() {
    const listContainers: ContainerInfo[] = await this.dockerProvider.getListContainers();
    const listFilterContainers = process?.env?.CONTAINER_FILTER as string | '';
    if (listContainers && listContainers.length > 0 && listFilterContainers) {
      const containers = listContainers.filter((e: ContainerInfo) =>
        this.checkContainerIsMonitored(e?.Names[0].replace('/', '')),
      );
      return containers;
    }
    return listContainers;
  }

  public checkContainerIsMonitored(nameContainer: string): boolean {
    if (!nameContainer) {
      return false;
    }
    const listFilterContainers = process?.env?.CONTAINER_FILTER as string | '';
    if (!listFilterContainers) {
      return true;
    }
    const arrayFilter = listFilterContainers.split(',');
    if (arrayFilter[0].charAt(0) === '!') {
      if (arrayFilter.includes(`!${nameContainer}`)) {
        return false;
      }
    } else {
      if (arrayFilter.includes(nameContainer)) {
        return true;
      }
      return false;
    }
    return true;
  }

  public async sendEvent(event: IEventType) {
    if (event) {
      this.loggerProvider.log('info', JSON.stringify(event));
      const checkContainer = this.checkContainerIsMonitored(event?.Actor?.Attributes?.name);
      if (checkContainer) {
        const message = viewStatusContainer(event);
        if (message) {
          this.loggerProvider.log('info', message);
          // await this.sendMessageProvider.sendMessage(message);
        }
      }
    }
  }

  public async sendEventStream() {
    const eventStream: NodeJS.ReadableStream = await this.dockerProvider.getEvents();
    eventStream
      .on('data', (event: Buffer) => {
        try {
          const parseString: string = event.toString('utf-8');
          const datas: IEventType = JSON.parse(parseString);
          this.sendEvent(datas);
        } catch (error) {
          this.handleError(error);
        }
      })
      .on('error', this.handleError);
  }

  public handleError(e: Error) {
    this.loggerProvider.log('error', e?.message);
    this.sendMessageProvider.sendMessage(e?.message);
  }
}

export default DockerServices;

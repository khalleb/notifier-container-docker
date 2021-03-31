import Dockerode, { DockerVersion } from 'dockerode';
import { injectable, inject } from 'tsyringe';

import {
  viewListContainers,
  viewInit,
  viewStatusContainer,
} from '@modules/view/templates';

import ISendMessageProvider from '@shared/container/providers/SendMessage/models/ISendMessageProvider';
import Logger from '@shared/errors/Logger';

import { IEventType } from '../dtos/DockerServicesDTO';

@injectable()
class DockerServices {
  constructor(
    @inject('MessageProvider')
    private sendMessageProvider: ISendMessageProvider
  ) {}

  public async initialData() {
    const docker: Dockerode = new Dockerode();
    const dockerVersion: DockerVersion = await docker.version();
    let message = viewInit(dockerVersion);
    if (message) {
      const conatiners = await docker.listContainers();
      const messageContainers = viewListContainers(conatiners);
      message = `${message}
      ${messageContainers}`;
    }
    Logger.info(message);
    await this.sendMessageProvider.sendMessage(message);
  }

  public async sendEvent(event: IEventType) {
    const message = viewStatusContainer(event);
    if (message) {
      Logger.info(message);
      await this.sendMessageProvider.sendMessage(message);
    }
  }

  public handleError(e: Error) {
    Logger.error(e.message);
    this.sendMessageProvider.sendMessage(e.message);
  }

  public async sendEventStream() {
    const docker: Dockerode = new Dockerode();
    const eventStream = await docker.getEvents();
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
}

export default DockerServices;

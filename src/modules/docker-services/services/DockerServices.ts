import ISendMessageProvider from '@shared/container/providers/SendMessage/models/ISendMessageProvider';
import { injectable, inject } from 'tsyringe';
import StreamJson from 'stream-json';
import Dockerode from 'dockerode';

@injectable()
class DockerServices {
  public docker: Dockerode;

  constructor(
    @inject('MessageProvider')
    private _sendMessageProvider: ISendMessageProvider,
  ) {
    this.docker = new Dockerode();
  }

  public async sendVersion() {
    const version = await this.docker.version();
    let text = `Connected to docker ${version.Version}`;
    await this._sendMessageProvider.sendMessage(text);
  }

  public async sendEvent(e: any) {
    const attachment = `Started container ${e?.Actor?.Attributes?.name} Image: ${e?.Actor?.Attributes?.image} Container ID: ${e?.Actor?.ID}`;
    console.log(await this._sendMessageProvider.sendMessage('sdsdsdsdsd'));
    await this._sendMessageProvider.sendMessage(attachment)
  }

  public handleError(e: any) {
    this._sendMessageProvider.sendMessage(e);
  }

  public async sendEventStream() {
    const eventStream = await this.docker.getEvents();
    eventStream.pipe(StreamJson.parser()).on('data', (event: any) => this.sendEvent(event).catch(this.handleError)).on('error', this.handleError);
  }
}

export default DockerServices;
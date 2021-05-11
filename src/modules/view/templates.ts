import { format } from 'date-fns';
import { DockerVersion, ContainerInfo } from 'dockerode';

import { IEventType } from '@modules/docker-services/dtos/DockerServicesDTO';

import { getVersion } from '@shared/infra/utils/version';

export function viewInit(dv: DockerVersion): string {
  const body = `
  <b> *** MONITORING STARTED *** </b>
  <b> **** ${
    process?.env?.IDENTIFIED ? process.env.IDENTIFIED.toUpperCase() : format(new Date(), 'yyyy-MM-dd')
  } **** </b>
  System: <b>Os: ${dv?.Os} - Arch: ${dv?.Arch}</b>
  Version: <b>${getVersion()}</b>`;
  return body;
}

export function viewListContainers(containers: ContainerInfo[]): string {
  if (!containers || containers.length === 0) {
    return '<b>WITHOUT ACTIVE CONTAINERS</b>';
  }
  const body = `
    ${containers.length > 1 ? '<b> --- CONTAINERS --- </b>' : '<b> --- CONTAINER --- </b>'}
    ${containers
      .map(
        e => `
      Name: <b>${e?.Names[0].replace('/', '')}</b>
      Id: <b>${e?.Id.substring(0, 12)}</b>\n`,
      )
      .join('')}
  `;
  return body;
}

function templateStatusContainer(
  status: string,
  containerName: string,
  imageName: string,
  coitainerId: string,
): string {
  return `
  <b>${process?.env?.IDENTIFIED ? process.env.IDENTIFIED.toUpperCase() : '    --------- *** ---------'}</b>
  <b>${status}</b> container <b>${containerName}</b>
  Image: <b>${imageName}</b>
  Container ID: <b>${coitainerId?.substring(0, 12)}</b>
`;
}

export function viewStatusContainer(data: IEventType): string {
  if (data?.Action) {
    if (data.Action === 'create' && data?.Actor?.Attributes?.name) {
      return templateStatusContainer(
        'CREATE',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'start') {
      return templateStatusContainer(
        'STARTED',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'stop') {
      return templateStatusContainer(
        'STOPPED',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'destroy') {
      return templateStatusContainer(
        'DESTROY',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'disconnect') {
      return templateStatusContainer(
        'DISCONNECT',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'kill') {
      return templateStatusContainer(
        'KILL',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'die') {
      return templateStatusContainer(
        'DIE',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'attach') {
      return templateStatusContainer(
        'ATTACH',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'tag') {
      return templateStatusContainer(
        'TAG',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'unmount') {
      return templateStatusContainer(
        'UNMOUNT',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'mount') {
      return templateStatusContainer(
        'MOUNT',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
    if (data.Action === 'connect') {
      return templateStatusContainer(
        'CONNECT',
        data?.Actor?.Attributes?.name,
        data?.Actor?.Attributes?.image,
        data?.Actor?.ID,
      );
    }
  }
  return '';
}

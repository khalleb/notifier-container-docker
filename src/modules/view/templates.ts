import { format } from 'date-fns';
import { DockerVersion, ContainerInfo } from 'dockerode';

import { IEventType } from '@modules/docker-services/dtos/DockerServicesDTO';

export function viewInit(dv: DockerVersion): string {
  const body = `
  <b> *** MONITORING STARTED *** </b>
  Date: <b>${format(new Date(), 'yyyy-MM-dd')}</b>
  System: <b>Os: ${dv?.Os} - Arch: ${dv?.Arch}</b>
  Version: <b>${dv?.Version}</b>`;
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

export function viewStatusContainer(data: IEventType): string {
  if (data?.Action) {
    if (data.Action === 'create' && data?.Actor?.Attributes?.name) {
      return `
         <b>CREATE</b> container <b>${data?.Actor?.Attributes?.name}</b>
         Image: <b>${data?.Actor?.Attributes?.image}</b>
         Container ID: <b>${data?.Actor?.ID.substring(0, 12)}</b>
      `;
    }
    if (data.Action === 'start') {
      return `
        <b>STARTED</b> container <b>${data?.Actor?.Attributes?.name}</b>
  Image: <b>${data?.Actor?.Attributes?.image}</b>
  Container ID: <b>${data?.Actor?.ID.substring(0, 12)}</b>
        `;
    }
    if (data.Action === 'stop') {
      return `
        <b>STOPPED</b> container <b>${data?.Actor?.Attributes?.name}</b>
  Image: <b>${data?.Actor?.Attributes?.image}</b>
  Container ID: <b>${data?.Actor?.ID.substring(0, 12)}</b>
        `;
    }
    if (data.Action === 'destroy') {
      return `
        <b>DESTROY</b> container <b>${data?.Actor?.Attributes?.name}</b>
  Image: <b>${data?.Actor?.Attributes?.image}</b>
  Container ID: <b>${data?.Actor?.ID.substring(0, 12)}</b>
        `;
    }
  }
  return '';
}

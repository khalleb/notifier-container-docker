import 'reflect-metadata';
import 'dotenv/config';
import { container } from 'tsyringe';

import 'express-async-errors';
import DockerServices from '@modules/docker-services/services/DockerServices';

import '@shared/container';
import '@config/config';
import Logger from '@shared/errors/Logger';

async function main() {
  const dockerServices = container.resolve(DockerServices);
  await dockerServices.initialData();
  await dockerServices.sendEventStream();
}

main().catch(error => Logger.error(error));

import 'reflect-metadata';
import 'dotenv/config';
import { container } from 'tsyringe';
import DockerServices from '@modules/docker-services/services/DockerServices';
import '@shared/container';


async function main() {
  const dockerServices = container.resolve(DockerServices);
  await dockerServices.initialData();
  await dockerServices.sendEventStream();
}

main();
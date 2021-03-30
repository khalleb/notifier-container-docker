import { container } from 'tsyringe';
import './providers';

import DockerServices from '@modules/docker-services/services/DockerServices';


container.registerSingleton<any>('DockerServices', DockerServices);
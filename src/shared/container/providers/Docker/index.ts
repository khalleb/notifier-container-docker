import { container } from 'tsyringe';

import DockerProvider from './implementations/DockerProvider';
import IDockerProvider from './models/IDockerProvider';

container.registerSingleton<IDockerProvider>(DockerProvider.name, DockerProvider);

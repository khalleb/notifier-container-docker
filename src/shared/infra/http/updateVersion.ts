import { format } from 'date-fns';
import { readFileSync, writeFileSync } from 'fs';
import path from 'path';

import Logger from '@shared/errors/Logger';

export default async function updateVersion() {
  const pathPackage = path.resolve(__dirname, '..', '..', '..', '..', 'package.json');
  const packageJson = readFileSync(pathPackage, 'utf8');
  if (!packageJson) {
    return;
  }
  const packJson = JSON.parse(packageJson);
  const { version } = packJson;
  Logger.info('--> VERSÃO ATUAL <--');
  Logger.info(`      ${version}      `);

  const spliteVersion = version.split('.');

  let major = Number(spliteVersion[0]);
  let minor = Number(spliteVersion[1]);
  let patch = Number(spliteVersion[2]);

  if (patch < 100) {
    patch += 1;
  }
  if (patch > 99) {
    minor += 1;
    patch = 0;
  }
  if (minor > 99) {
    major += 1;
    minor = 0;
    patch = 0;
  }
  const updateVersion = `${major}.${minor}.${patch}.${format(new Date(), 'yyyyMMdd')}`;
  packJson.version = updateVersion;
  writeFileSync(pathPackage, JSON.stringify(packJson, null, 2));
  Logger.info('--> VERSÃO ATUALIZADA <--');
  Logger.info(`      ${updateVersion}      `);
}

updateVersion();

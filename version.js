const fs = require('fs');
const dateFns = require('date-fns');

async function run() {
  const packageJson = fs.readFileSync('./package.json', 'utf8');
  if (!packageJson) {
    return;
  }
  let packJson = JSON.parse(packageJson);
  const { version } = packJson;
  console.log('--> VERSÃO ATUAL <--');
  console.log('      ' + version + '      ');

  const spliteVersion = version.split('.');

  let major = parseInt(spliteVersion[0]);
  let minor = parseInt(spliteVersion[1]);
  let patch = parseInt(spliteVersion[2]);

  if (patch < 100) {
    patch++;
  }
  if (patch > 99) {
    minor++;
    patch = 0;
  }
  if (minor > 99) {
    major++;
    minor = 0;
    patch = 0;
  }
  const updateVersion = `${major}.${minor}.${patch}.${dateFns.format(new Date(), 'yyyyMMdd')}`;
  packJson.version = updateVersion;
  fs.writeFileSync('./package.json', JSON.stringify(packJson, null, 2));
  console.log(updateVersion);
}

run();

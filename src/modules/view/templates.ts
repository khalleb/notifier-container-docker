module.exports.container_start = (e: any) =>
  `Started container <b>${e.Actor.Attributes.name}</b>
Image: <b>${e.Actor.Attributes.image}</b>
Container ID: <b>${e.Actor.ID}</b>`;

module.exports.container_kill = (e: any) =>
  `Stopped container <b>${e.Actor.Attributes.name}</b>
Image: <b>${e.Actor.Attributes.image}</b>
Exit Code: <b>${e.Actor.Attributes.exitCode}</b>
Container ID: <b>${e.Actor.ID}</b>`;

module.exports.container_die = module.exports.container_kill;

module.exports.container_destroy = (e: any) =>
  `Destroyed container <b>${e.Actor.Attributes.name}</b>
Image: <b>${e.Actor.Attributes.image}</b>
Container ID: <b>${e.Actor.ID}</b>`;

module.exports.network_create = (e: any) =>
  `Created network \`${e.Actor.Attributes.name}\``;

module.exports.network_destroy = (e: any) =>
  `Destroyed network \`${e.Actor.Attributes.name}\``;
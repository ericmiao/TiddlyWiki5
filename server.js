var $tw = require("./boot/boot.js").TiddlyWiki();

$tw.boot.argv = [
  process.env.OPENSHIFT_DATA_DIR,
  "--verbose",
  "--server",
  process.env.OPENSHIFT_NODEJS_PORT,
  "$:/core/save/all",
  "text/plain",
  "text/html",
  "emiao",
  "N0Pa55w0rd",
  process.env.OPENSHIFT_NODEJS_IP,
];

$tw.boot.boot();

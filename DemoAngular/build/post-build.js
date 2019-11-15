var pkg = require('../package.json');
var fs = require('fs');
fs.writeFileSync('dist/serviveworker/version.json', 'Version: ' + pkg.version);
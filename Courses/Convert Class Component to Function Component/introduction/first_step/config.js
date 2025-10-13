var shell = require('shelljs');

// cloning the repository and update the header
shell.cd("../..");
shell.exec("git clone https://github.com/mattermost/mattermost.git");
shell.cd("mattermost");
shell.exec("git checkout f8fc02791b8232baec5e32aec921d068bca141f7");
shell.exec("npm install");


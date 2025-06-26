var shell = require('shelljs');

// cloning the repository and update the header
shell.cd("../..");
shell.exec("git clone https://github.com/mattermost/mattermost.git");
shell.cd("mattermost");
shell.exec("git checkout 603c26a5bcda365917285b8f32c6982e170c5cd3");
shell.exec("npm install");

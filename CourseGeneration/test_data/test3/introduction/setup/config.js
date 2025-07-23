var shell = require('shelljs');

// cloning the repository and update the header
shell.cd("../..");
shell.exec("git clone https://github.com/mattermost/mattermost.git");
shell.cd("mattermost");
shell.exec("git checkout acc909307294ac404174291f942c8dc93b129075");
shell.exec("npm install");
    
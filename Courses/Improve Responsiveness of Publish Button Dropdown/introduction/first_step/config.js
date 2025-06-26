var shell = require('shelljs');

// cloning the repository and update the header
shell.cd("../..");
shell.exec("git clone https://github.com/decaporg/decap-cms.git");
shell.cd("decap-cms");
shell.exec("git checkout 5d33d098db7917a8e416f4a634db5aaf13f60cbb");
shell.exec("npm install");

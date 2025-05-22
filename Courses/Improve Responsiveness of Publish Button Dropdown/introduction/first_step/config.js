var shell = require('shelljs');

// cloning the repository and update the header
shell.cd("../..");
shell.exec("git clone https://github.com/decaporg/decap-cms.git");
shell.cd("decap-cms");
shell.exec("git checkout 88382dc100924b28adaf545879a5845654e594f1");
shell.exec("npm install");

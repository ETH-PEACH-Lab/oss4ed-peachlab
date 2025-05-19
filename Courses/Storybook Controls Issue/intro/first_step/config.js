var shell = require('shelljs');

// cloning the repository and update the header
shell.cd("../..");
shell.exec("git clone https://github.com/storybookjs/storybook.git");
shell.cd("storybook");
shell.exec("git checkout 856762c262e31cd096922d9416f4754034105a71");
shell.exec("npm install");

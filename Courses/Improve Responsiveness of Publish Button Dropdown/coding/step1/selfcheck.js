const fs = require('fs');
const path = require("path");

// Cannot be used as the task.md file isn't reloaded when a change happens
/* const filePath = path.join(__dirname, 'task.md');
const content = "\n\n```typescript + " +
    "\nconst PublishDropDownItem = styled(DropdownItem)`" +
    "\n\tmin-width: initial;" +
    "\n`;" +
    "\n```"

fs.appendFileSync(filePath, content);
console.log("File written!");
*/
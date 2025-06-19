
test('Check whether a dropdownWidth was updated to 200px', () => {
    const path = require("path");
    const fs = require("fs");
    const fileToTest = path.join(__dirname, '../../../decap-cms/packages/netlify-cms-core/src/components/Editor/EditorToolbar.js');
    const fileContent = fs.readFileSync(fileToTest, 'utf8');
    const functionRegex = new RegExp(
        `renderNewEntryWorkflowPublishControls\\s*=?\\s*\\([^)]*\\)\\s*=>?\\s*\\{[\\s\\S]*?dropdownWidth\\s*=\\s*['"]200px['"]`,
        'm' // 'm' for multiline mode
    );
    expect(fileContent).toMatch(functionRegex);
});
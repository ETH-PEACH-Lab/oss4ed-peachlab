
test('Check Proper Download', () => {
    const path = require("path");
    const fs = require("fs");
    const correctPath = path.join(__dirname, '../../../decap-cms/packages/netlify-cms-core/src/components/Editor/EditorToolbar.js');
    const fileExists = fs.existsSync(correctPath);
    expect(fileExists).toBe(true);
});
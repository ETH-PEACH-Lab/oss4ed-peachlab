
test('Check if component "PublishDropDownItem" was added', () => {
    const path = require("path");
    const fs = require("fs");
    const fileToTest = path.join(__dirname, '../../../decap-cms/packages/netlify-cms-core/src/components/Editor/EditorToolbar.js');
    const fileContent = fs.readFileSync(fileToTest, 'utf8');
    const constantRegex = /(const|let|var)\s+PublishDropDownItem/;
    expect(fileContent).toMatch(constantRegex);
});

test('Check if a new styled component was added as exactly written in the commit', () => {
    const path = require("path");
    const fs = require("fs");
    const fileToTest = path.join(__dirname, '../../../decap-cms/packages/netlify-cms-core/src/components/Editor/EditorToolbar.js');
    const fileContent = fs.readFileSync(fileToTest, 'utf8');
    const styledComponentRegex = /styled\(DropdownItem\)\s*`[^`]*min-width:\s*initial;[^`]*`/g;
    const matches = fileContent.match(styledComponentRegex);
    const count = matches ? matches.length : 0;
    expect(count).toBe(1);
});

test('Check if a new styled component was added', () => {
    const path = require("path");
    const fs = require("fs");
    const fileToTest = path.join(__dirname, '../../../decap-cms/packages/netlify-cms-core/src/components/Editor/EditorToolbar.js');
    const fileContent = fs.readFileSync(fileToTest, 'utf8');
    const styledComponentRegex = /styled\(DropdownItem\)/g;
    const matches = fileContent.match(styledComponentRegex);
    console.log(matches);
    const count = matches ? matches.length : 0;
    expect(count).toBe(2);
});
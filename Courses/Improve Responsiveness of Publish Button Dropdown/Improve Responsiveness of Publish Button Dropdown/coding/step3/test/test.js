

test('adds 1 + 2 to equal 3', () => {
    const path = require("path");
    const fs = require("fs");
    const fileToTest = path.join(__dirname, '../../../decap-cms/packages/netlify-cms-core/src/components/Editor/EditorToolbar.js');
    const fileContent = fs.readFileSync(fileToTest, 'utf8');

    // Find the starting point of the function definition.
    const functionSignature = 'renderNewEntryWorkflowPublishControls';
    const signatureIndex = fileContent.indexOf(functionSignature);
    if (signatureIndex === -1) {
        throw new Error(`Function '${functionSignature}' not found in the file.`);
    }

    // Find the '=>' arrow to locate the start of the function body definition.
    // This is more reliable than just finding the first '{', which could be in
    // the function's arguments (e.g., for default values or destructuring).
    const arrowIndex = fileContent.indexOf('=>', signatureIndex);
    if (arrowIndex === -1) {
        throw new Error(`Could not find arrow '=>' for function '${functionSignature}'. This test expects an arrow function.`);
    }

    // Find the opening brace '{' of the function body, starting AFTER the arrow.
    const bodyStartIndex = fileContent.indexOf('{', arrowIndex);
    if (bodyStartIndex === -1) {
        throw new Error(`Could not find the opening brace for function '${functionSignature}'.`);
    }

    let braceCount = 1;
    let bodyEndIndex = -1;

    // Iterate through the rest of the file to find the matching closing brace '}'.
    for (let i = bodyStartIndex + 1; i < fileContent.length; i++) {
        if (fileContent[i] === '{') {
            braceCount++;
        } else if (fileContent[i] === '}') {
            braceCount--;
        }

        if (braceCount === 0) {
            bodyEndIndex = i;
            break;
        }
    }

    if (bodyEndIndex === -1) {
        throw new Error(`Could not find the closing brace for function '${functionSignature}'.`);
    }

    // Extract the exact content of the function's body.
    const functionBody = fileContent.substring(bodyStartIndex + 1, bodyEndIndex);

    // Assert that the string 'DropdownItem' is NOT present in the function's body.
    expect(functionBody).not.toContain('DropdownItem');
});
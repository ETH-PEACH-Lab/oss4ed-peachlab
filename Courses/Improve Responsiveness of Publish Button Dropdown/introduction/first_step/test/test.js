/**
 * Imports task file in order to use functions declared in it
 * @param f file name or its relative path to task
 */
function import_task_file(f) {
    const path = require("path");
    const fs = require("fs");
    eval.apply(global, [fs.readFileSync(path.join(__dirname, "..",  f)).toString()]);
}

//todo: replace this with an actual test
test('Check Proper Download', () => {
    import_task_file("task.js");
    expect(sum(1, 2)).toBe(3);
});
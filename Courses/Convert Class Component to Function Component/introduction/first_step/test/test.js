
test('Check Proper Download', () => {
    const path = require("path");
    const fs = require("fs");
    const correctPath = path.join(__dirname, '../../../mattermost/webapp/channels/src/components/admin_console/system_user_detail/team_list/team_list_dropdown.tsx');
    const fileExists = fs.existsSync(correctPath);
    expect(fileExists).toBe(true);
});
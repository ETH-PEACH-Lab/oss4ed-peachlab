Here is the master solution which was implemented in the git commit to solve the task specified in the second step. 
Please compare your own solution with the master solution and correct any errors you encountered.

```typescript jsx
const TeamListDropdown = ({
    team,
    doRemoveUserFromTeam,
    doMakeUserTeamAdmin,
    doMakeUserTeamMember,
    isDisabled,
}: Props) => {
    const intl = useIntl();
    const isAdmin = team.scheme_admin;
    const isMember = team.scheme_user && !team.scheme_admin;
    const isGuest = team.scheme_guest;
    const showMakeTeamAdmin = !isAdmin && !isGuest;
    const showMakeTeamMember = !isMember && !isGuest;
    const makeTeamAdminOnClick = useCallback(() => doMakeUserTeamAdmin(team.id), [team.id, doMakeUserTeamAdmin]);
    const makeTeamMemberOnClick = useCallback(() => doMakeUserTeamMember(team.id), [team.id, doMakeUserTeamMember]);
    const removeUserTeamOnClick = useCallback(() => doRemoveUserFromTeam(team.id), [team.id, doRemoveUserFromTeam]);
```

The code changes have been made on line 22 to 41.
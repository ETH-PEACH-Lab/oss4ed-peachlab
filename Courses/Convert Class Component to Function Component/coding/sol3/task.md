Here is the master solution which was implemented in the git commit to solve the task specified in the last step.
Please compare your own solution with the master solution and correct any errors you encountered.

```typescript jsx
return (
    <MenuWrapper isDisabled={isDisabled}>
        <button
            type='button'
            id={`teamListDropdown_${team.id}`}
            className='dropdown-toggle theme color--link style--none'
            aria-expanded='true'
        >
            <span className='SystemUserDetail__actions-menu-icon'><EllipsisHorizontalIcon/></span>
        </button>
        <div>
            <Menu
                openLeft={true}
                openUp={false}
                ariaLabel={intl.formatMessage({id: 'team_members_dropdown.menuAriaLabel', defaultMessage: 'Change the role of a team member'})}
            >
                <Menu.ItemAction
                    id='makeTeamAdmin'
                    show={showMakeTeamAdmin}
                    onClick={makeTeamAdminOnClick}
                    text={intl.formatMessage({id: 'team_members_dropdown.makeAdmin', defaultMessage: 'Make Team Admin'})}
                />
                <Menu.ItemAction
                    show={showMakeTeamMember}
                    onClick={makeTeamMemberOnClick}
                    text={intl.formatMessage({id: 'team_members_dropdown.makeMember', defaultMessage: 'Make Team Member'})}
                />
                <Menu.ItemAction
                    id='removeFromTeam'
                    show={true}
                    onClick={removeUserTeamOnClick}
                    text={intl.formatMessage({id: 'team_members_dropdown.leave_team', defaultMessage: 'Remove from Team'})}
                    buttonClass='SystemUserDetail__action-remove-team'
                />
            </Menu>
        </div>
    </MenuWrapper>
);
};

export default memo(TeamListDropdown);
```

This change has been made in lines 42 to 84.
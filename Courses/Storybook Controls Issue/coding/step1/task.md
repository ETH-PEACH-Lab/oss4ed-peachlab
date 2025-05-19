It's time for practice! Your **first goal** is to enable Storybook to 
recognize a new configuration option. This option will eventually be used to 
signal whether certain interactive actions in the Controls panel should be disabled. 
Think about how Storybook manages configurations for its features, especially for addons.
You'll need to define this new option within the existing system for control parameters, 
ensuring it's properly typed for boolean values and can be optionally provided.

TODO: add a gif or something what is expected from the student + ad title for each hint and describe what is the hints about - same for all next tasks

<div class="hint">

  Look for TypeScript files where types or interfaces for Storybook's control parameters are defined.

</div>

<div class="hint">

  Consider how to add a new, optional boolean property to an existing interface.

</div>

<div class="hint">

  What name would be clear for an option that disables actions?

</div>

<div class="hint">

  In the ControlsParameters interface, add a new property:
  ```typescript
    disableActions?: boolean;
  ```

</div>



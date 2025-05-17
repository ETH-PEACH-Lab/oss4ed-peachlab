One area where story modifications can be initiated is through UI specifically designed for saving or creating stories, 
often visible in development mode. This UI, potentially represented by a `<SaveStory />` component, should also respect 
the `disableActions` state you defined in the previous step. Modify its rendering logic so that it only appears if actions 
are not disabled.

<div class="hint">

  Look for a component like `<SaveStory />` or similar UI related to persisting story changes, often rendered conditionally 
  based on development mode and whether there are updated arguments.

</div>

<div class="hint">

  You need to add an _additional_ condition to its rendering logic that checks your `disableActions` variable. The component 
  should only render if `disableActions` is `false`.

</div>

<div class="hint">

  The existing conditions (like `hasControls`, `hasUpdatedArgs`, `global.CONFIG_TYPE === 'DEVELOPMENT'`) should remain.

</div>

<div class="hint">

  Find the JSX block where `<SaveStory />` is rendered. You'll add a check against your `disableActions` variable (assuming the 
  variable holding the effective state is named `disableActions`):
  ```javascript
    {hasControls &&
        hasUpdatedArgs &&
        global.CONFIG_TYPE === 'DEVELOPMENT' &&
        !disableActions && // <-- This is the new condition to add
        <SaveStory {...{ resetArgs, saveStory, createStory }} />}
  ```

</div>

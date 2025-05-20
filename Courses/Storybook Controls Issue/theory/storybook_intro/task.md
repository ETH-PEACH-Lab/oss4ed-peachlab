[Storybook](https://github.com/storybookjs/storybook) is an open-source tool designed 
to streamline UI development, testing, and documentation. It operates by allowing 
you to build and showcase UI components in an isolated environment, 
separate from your main application's business logic and context. 
This isolation helps you focus purely on the component's appearance, behavior, and variations.

[//]: # (TODO: add links to story, addons and Controls addons from the source cde)
### Stories
The fundamental unit in Storybook is a _story_.
A _story_ captures a single, rendered state of a UI component.
For example, if you have a `Button` component, you might have _stories_ like `Primary Button`,
`Secondary Button`, `Button with Icon`, or `Disabled Button`.
Each _story_ demonstrates how the component looks and behaves with a specific set of properties 
(or `args`).

### Addons
Storybook's functionality can be extended through _addons_. 
These are plugins that provide extra features, panels, and 
integrations. Examples include _addons_ for accessibility testing, design previews, or managing component properties.

### Control Addon
The _controls addon_ is one of Storybook's most powerful essentials. 
It can automatically generate a graphical interface that allows you and your team to dynamically 
edit the arguments (props) passed to your components without touching code. 
This interactive editing is invaluable for testing different component states, debugging, and demonstrating component 
capabilities. Understanding how such addons are structured and configured is key to extending their functionality.

### Additional Readings
If you want to learn more about Storybook, check out the following resources:
- [Official Storybook Introduction](https://storybook.js.org/docs/)
- [Storybook Controls](https://storybook.js.org/docs/essentials/controls)

TODO: add a few quizz lessons with questions about these entities after this lesson
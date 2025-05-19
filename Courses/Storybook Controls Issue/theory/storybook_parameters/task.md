[//]: # (TODO: add links to parameters from the source cde)
In Storybook, _parameters_ are a powerful mechanism for statically configuring the behavior of your stories and various 
_addons_. Think of them as a set of metadata or instructions you provide alongside your _story_ definitions. This metadata 
is not directly part of the component's props but rather tells Storybook and its _addons_ how to treat or render the _story_, 
or how specific features of an _addon_ should behave.

## Scope
Parameters can be defined at different levels:
- **Global Parameters:** Applied to all stories in your Storybook.
- **Component-Level Parameters:** Applied to all stories associated with a specific component.
- **Story-Level Parameters:** Applied only to a single, specific story

## Usage
Parameters are typically defined within an exported `parameters` object in your story file or in a global configuration file. 
For example, you might use parameters to set the background color for a story, define layout options, or enable/disable 
particular functionalities within an addon for a specific story or component. This allows for fine-grained control over 
the Storybook environment and its features.

Link: [Storybook Parameters](https://storybook.js.org/docs/writing-stories/parameters)

TODO: add a few quizz lessons with questions about these entities after this lesson
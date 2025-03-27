
In React, components are used to display different elements on the website. Those objects can consist
of basically anything you want: they can be as simple as a paragraph of text, or as complex as a big
animation where different interactive elements are displayed in a fashionable way. All of these different
objects can be categorized into two types: Class Components and Function Components

## Function Components
Function Components are just JavaScript or TypeScript functions which can be used to create components
for React. Those functions take props as inputs, which are a list of different types of inputs we want
to pass down to the component.

```typescript jsx
function functionalComponent = (props) => {
    return <p> Hello, I'm just a dummy text component which displays my inputs {props}</p>;
}
```

## Class Components
Class Components are classes that have functions with which you can render React components. As it extends from
React.Component, the component is stateful.

```typescript tsx
class classComponent extends React.Component{
    render(){
        return <p> Hello, I'm just a dummy text component </p>;
    }
}
```

## Differences
Nowadays, Functional Components are a standard in the industry, as they perform better than the class components. Since
Functional Components are stateless, users would usually use Class Components when they needed stateful ones. However,
React now allows Functional Components to be stateful with the help of hooks.
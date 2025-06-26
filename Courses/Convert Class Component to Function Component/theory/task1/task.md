In React, components re-render when their props or state change. However, sometimes components re-render unnecessarily, 
impacting performance.`React.memo` and `PureComponent` are tools to prevent these redundant re-renders by performing a 
"shallow comparison" of props and state.

### PureComponent (for Class Components)

This is a base class that implements `shouldComponentUpdate()` with a shallow prop and state comparison. If the new props 
and state are the same as the old ones, the component does not re-render.

### React.memo (for Functional Components)

This is a higher-order component (a function that takes a component and returns a new component) that memoizes the rendered 
output of a functional component. It re-renders the component only if its props have shallowly changed.

### Additional Readings

- [Pure Components](https://react.dev/reference/react/PureComponent)
- [React.memo docs](http://react.dev/reference/react/memo)
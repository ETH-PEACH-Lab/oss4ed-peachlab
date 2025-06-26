When building React applications, you often need to pass data from a parent component down to its children. "Prop drilling" 
refers to the process of passing data through multiple layers of nested components via props, even if intermediate 
components don't directly use that data.

While prop drilling is a common pattern, it can lead to verbose and hard-to-maintain code when components are deeply 
nested and many props are passed unnecessarily.

The Context API provides an alternative. It's a way to share values (like user authentication status, themes, or locale 
preferences) that are considered "global" for a tree of React components, without explicitly passing props through every 
level.

### Additional Readings
- [Passing Props to a Component](https://react.dev/learn/passing-props-to-a-component)
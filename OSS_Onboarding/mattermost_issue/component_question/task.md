# Class Components vs Function Components

React, a popular JavaScript library for building user interfaces, has seen a significant shift in its recommended component 
structure. Initially, Class Components were the primary way to create dynamic and interactive UI elements. However, with 
the introduction of Hooks, Function Components have gained prominence and are now the preferred approach for most use 
cases due to their simplicity and improved code organization.

## Class Components

Class Components in React are built using JavaScript classes that inherit from the React.Component class. These components 
are capable of maintaining their own internal data, known as their state. This state can change over time, and when it 
does, the component can re-render its user interface to reflect the updated data. Class Components also have a special 
render() method, which is responsible for describing what the component should display on the screen, typically by 
returning JSX. A key characteristic of Class Components is their ability to manage and update their own data, making 
them suitable for creating dynamic and interactive parts of an application. While they offer a structured way to 
organize component logic, they can sometimes result in more code compared to their functional counterparts.

```javascript
import React from 'react';

class ClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0 };
    }

    incrementCount = () => {
        this.setState({ count: this.state.count + 1 });
    };

    render() {
        return (
            <div>
                <h1>Hello, {this.props.name}!</h1>
                <p>Count: {this.state.count}</p>
                <button onClick={this.incrementCount}>Increment</button>
            </div>
        );
    }
}

export default ClassComponent;
```

## Function Components
Function Components, on the other hand, are essentially JavaScript functions that return JSX (a syntax extension for 
JavaScript that resembles HTML). Before the introduction of Hooks in React 16.8, Function Components were primarily used 
for simpler, stateless components that only received and rendered data. With the advent of Hooks, Function Components 
gained the ability to manage state, handle side effects (like data fetching), and access other React features that were 
previously exclusive to Class Components. The main advantages of Function Components with Hooks are their conciseness, 
improved readability, and easier logic reuse through custom Hooks. They also tend to perform slightly better in some 
scenarios due to their simpler nature.

```javascript
import React, { useState } from 'react';

function FunctionComponent(props) {
    const [count, setCount] = useState(0);

    const incrementCount = () => {
        setCount(count + 1);
    };

    return (
        <div>
            <h1>Hi, {props.name}!</h1>
            <p>Count: {count}</p>
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

export default FunctionComponent;
```

## Summary
Nowadays, Function Components are a standard in the industry, as they perform better than the class components. Since
Functional Components are stateless, users would usually use Class Components when they needed stateful ones. However,
React now allows Functional Components to be stateful with the help of hooks. This enabled a shift towards using Function 
Components, as they are more concise and allowed better code organization.

If you want to read more about this topic, here are some links that can help you further:

- [Class Components + How to migrate from Class to Function Component](https://react.dev/reference/react/Component)
- [Function Component](https://react.dev/learn/your-first-component)

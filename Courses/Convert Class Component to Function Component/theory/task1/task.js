// Those are examples of the concept explained in the task

import React from 'react';

// Example of a PureComponent
class MyPureComponent extends React.PureComponent {
    render() {
        console.log('MyPureComponent re-rendered');
        return <div>Hello, {this.props.name}</div>;
    }
}

// Example when using React.memo
const MyMemoComponent = React.memo(({ name }) => {
    console.log('MyMemoComponent re-rendered');
    return <div>Hello, {name}</div>;
});
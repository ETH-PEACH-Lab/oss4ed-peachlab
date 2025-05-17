
# Mattemost Issue #26238

Your task in this course is to improve the "mattermost" project. Mattermost is an open source platform for secure 
collaboration across the entire software development lifecycle. The improvement you will tackle on is describe in the 
following issue description:

```text
We want to move most of our codebase from Class Components to Function Components. This decision is based on React 
recommendations.
The task is to update the component to be a functional component, without any difference in functionality. Also, all 
related tests that fail may need refactoring.
If the tests do not work because they rely on the behavior of Class Components they also have to be migrated to functionally 
test the same behavior. We prefer the use of react-testing-library for new tests, but it is not required.
```

You can find the entire issue description when clicking on the following link [Class Component Issue](https://github.com/mattermost/mattermost/issues/26205).

Let us break down the issue together. Your main task is to convert the class component in the modals.test.jsx file to a 
functional component, without making any changes to its functionality. This change might lead to tests not functioning 
properly. If the reason to this behavior is identified as being the reliance of behaviors from class components, you will also 
have to refactor those tests. Therefore, we end up having the following TODO list:

- [ ] Understanding how to change a Class Component into a Function Component
- [ ] Change the component in the modals.test.jsx file
- [ ] Check if the tests are reliant on class component's behaviors, and that this is the reason for them not being passed
- [ ] Refactor the necessary tests

We wish you all the best while solving this exercise! You can now move to the next page, which is a quick explanation 
about what the React Recommendations are and how they affect this course. If you feel like you already know all of this, 
you can skip this task and move to the third task and answer the small quiz about Class and Function Components.
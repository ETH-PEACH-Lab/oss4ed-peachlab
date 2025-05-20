Many modern JavaScript projects, including parts of Storybook, use TypeScript. 
TypeScript is a superset of JavaScript that adds static typing. Static typing helps catch errors early during development by allowing you to define the expected 
types of data, such as for variables, function parameters, and object properties.

## Interfaces
An interface in TypeScript is a way to define a "contract" for the shape of an object. It specifies what properties an 
object should have and what the types of those properties should be. This helps ensure that data structures are consistent 
throughout your application. For instance, an interface for a configuration object might define various settings and their 
expected types.
```typescript
interface ComponentSettings {
  isVisible: boolean;
  title: string;
}
```

## Optional Properties
Sometimes, an object property isn't mandatory; it might or might not be present depending on the specific use case or 
configuration. TypeScript allows you to define such properties using a question mark (`?`) after the property name in an 
interface. This indicates that the property can be omitted when creating an object of that interface type.

```typescript
interface UserPreferences {
  theme: string;
  notificationsEnabled?: boolean; // notificationsEnabled is optional
  language?: string; // language is also optional
}
```

## Additional Readings
- [TypeScript Interfaces](https://www.typescriptlang.org/docs/handbook/interfaces.html)
- [TypeScript Optional Properties](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#optional-properties)

TODO: I'd suggest splitting this lesson into two Interfaces and Optional Properties with adding a theory question for each of them
also you can add main function to task js file to provide oppotunity for the student to run the code from the question and understand what is going on - add a run configuration for that for the lesson
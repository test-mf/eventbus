# eventbus
CQRS event based library

## example
```js
handleEvent<{ name: string }>("sendName", props => {
  console.log(props.name);
});

invokeEvent("sendName");
```

# create-stylesheet

Dynamically create a stylesheet

## Example

```js
import createStyleSheet from 'create-stylesheet';

let style = createStyleSheet({
  '.foo': {
    fontSize: 12,
    padding: 5
  },
  '.bar': {
    fontSize: 16,
    color: 'grey'
  }
});

document.head.appendChild(style);
```

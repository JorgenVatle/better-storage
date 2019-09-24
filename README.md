# Better Local Storage for Meteor
A very simple wrapper around Meteor's `_localStorage` interface enabling conversion and storage of JavaScript objects, retaining types.

## Install
```bash
npm i meteor-better-storage
```

## Import
```js
import BetterStorage from 'meteor-better-storage';
```

## Example use
```js
// Set a value
BetterStorage.set('my-key', { my: 'value' });

// Fetch a value
BetterStorage.fetch('my-key'); // => { my: 'value' }

// Remove object
BetterStorage.remove('my-key');
BetterStorage.fetch('my-key') // => null

```

## Methods
##### Store item
```js
BetterStorage.set('some-key', { some: 'value' });
```

##### Fetch item
```js
BetterStorage.fetch('some-key');
```

##### Remove item
```js
BetterStorage.remove('some-key');
```

## License
This repository is licensed under the ISC license.

Copyright (c) 2019, Jørgen Vatle.

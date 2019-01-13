# Better Local Storage for Meteor
A very simple wrapper around Meteor's `_localStorage` interface enabling conversion and storage of JavaScript objects.

## Install
```bash
npm i meteor-better-storage
```

## Import
```js
import BetterStorage from 'meteor-better-storage';
```

## Usage
##### Store item
```js
BetterStorage.set('some-key', { some: 'value' });
```

##### Fetch item
```js
BetterStorage.fetch('some-key'); // => { some: 'value' }
```

#### Remove item
```js
BetterStorage.remove('some-key');

BetterStorage.fetch('some-key'); // => null
```
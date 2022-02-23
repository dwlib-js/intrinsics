# Intrinsics

## Install
`npm i --save @dwlib/intrinsics`

## Usage
```javascript
// CJS
const {
  GetIntrinsic,
  GetIntrinsicOrThrow
} = require('@dwlib/intrinsics');
// ESM
import {
  GetIntrinsic,
  GetIntrinsicOrThrow
} from '@dwlib/intrinsics';

const ObjectPrototypeToString = GetIntrinsic('Object.prototype.toString');
const SymbolPrototypeDescription = GetIntrinsic('get Symbol.prototype.description');
const FunctionPrototypeSymbolHasInstance = GetIntrinsic('Function.prototype[@@hasInstance]');
```

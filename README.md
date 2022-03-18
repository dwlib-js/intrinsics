# Intrinsics

## Install
`npm i --save @dwlib/intrinsics`

## Usage
```javascript
// CJS
const Intrinsics = require('@dwlib/intrinsics');
const IntrinsicsGet = require('@dwlib/intrinsics/get');
const IntrinsicsHas = require('@dwlib/intrinsics/has');
const GetIntrinsic = require('@dwlib/intrinsics/abstract/GetIntrinsic');
const GetIntrinsicOrThrow = require('@dwlib/intrinsics/abstract/GetIntrinsicOrThrow');
const HasIntrinsic = require('@dwlib/intrinsics/abstract/HasIntrinsic');
// ESM
import Intrinsics from '@dwlib/intrinsics';
import IntrinsicsGet from '@dwlib/intrinsics/get';
import IntrinsicsHas from '@dwlib/intrinsics/has';
import GetIntrinsic from '@dwlib/intrinsics/abstract/GetIntrinsic';
import GetIntrinsicOrThrow from '@dwlib/intrinsics/abstract/GetIntrinsicOrThrow';
import HasIntrinsic from '@dwlib/intrinsics/abstract/HasIntrinsic';

const ObjectPrototypeToString = Intrinsics.get('Object.prototype.toString');
const SymbolPrototypeDescription = Intrinsics.get('get Symbol.prototype.description', /**canMissing=*/ true);
const FunctionPrototypeSymbolHasInstance = Intrinsics.get('Function.prototype[@@hasInstance]');
const hasWeakRef = Intrinsics.has('%WeakRef%');
```

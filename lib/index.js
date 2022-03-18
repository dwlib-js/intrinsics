'use strict';

const GetIntrinsic = require('#abstract/GetIntrinsic');
const IntrinsicsGet = require('./get');
const IntrinsicsHas = require('./has');

const ObjectCreate = GetIntrinsic('Object.create');
const ObjectPrototype = GetIntrinsic('Object.prototype');
const ReflectDefineProperty = GetIntrinsic('Reflect.defineProperty');
const SymbolToStringTag = GetIntrinsic('@@toStringTag');

const Intrinsics = ObjectCreate(ObjectPrototype, {
  get: {
    value: IntrinsicsGet
  },
  has: {
    value: IntrinsicsHas
  }
});
ReflectDefineProperty(Intrinsics, SymbolToStringTag, {
  value: 'Intrinsics'
});

module.exports = Intrinsics;

'use strict';

const GetIntrinsicOrThrow = require('#abstract/GetIntrinsicOrThrow');
const IntrinsicsGet = require('./get');
const IntrinsicsHas = require('./has');

const ObjectCreate = GetIntrinsicOrThrow('Object.create');
const ObjectPrototype = GetIntrinsicOrThrow('Object.prototype');
const ReflectDefineProperty = GetIntrinsicOrThrow('Reflect.defineProperty');
const SymbolToStringTag = GetIntrinsicOrThrow('@@toStringTag');

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

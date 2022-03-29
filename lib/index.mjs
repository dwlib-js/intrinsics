import GetIntrinsicOrThrow from '#abstract/GetIntrinsicOrThrow';
import IntrinsicsGet from './get.mjs';
import IntrinsicsHas from './has.mjs';

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

export default Intrinsics;

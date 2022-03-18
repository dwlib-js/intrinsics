import GetIntrinsic from '#abstract/GetIntrinsic';
import IntrinsicsGet from './get.mjs';
import IntrinsicsHas from './has.mjs';

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

export default Intrinsics;

import {
  GetIntrinsicNameByAlias,
  HasIntrinsic as $HasIntrinsic
} from '#internal';

const HasIntrinsic = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  return $HasIntrinsic(intrinsicName || name);
}

export default HasIntrinsic;

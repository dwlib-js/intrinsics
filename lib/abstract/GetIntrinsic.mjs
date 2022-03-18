import {
  GetIntrinsic as $GetIntrinsic,
  GetIntrinsicNameByAlias
} from '#internal';

const GetIntrinsic = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  return $GetIntrinsic(intrinsicName || name);
}

export default GetIntrinsic;

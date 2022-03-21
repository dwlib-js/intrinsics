import GetIntrinsic from '#abstract/GetIntrinsic';
import GetIntrinsicOrThrow from '#abstract/GetIntrinsicOrThrow';

const get = (name, canMissing) => {
  const intrinsicName = `${name}`;
  return canMissing ? GetIntrinsic(intrinsicName) : GetIntrinsicOrThrow(intrinsicName);
}

export default get;

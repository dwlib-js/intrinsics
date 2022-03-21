import HasIntrinsic from '#abstract/HasIntrinsic';

const has = name => {
  const intrinsicName = `${name}`;
  return HasIntrinsic(intrinsicName);
}

export default has;

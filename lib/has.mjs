import HasIntrinsic from '#abstract/HasIntrinsic';

function has(name) {
  const intrinsicName = `${name}`;
  return HasIntrinsic(intrinsicName);
}

export default has;

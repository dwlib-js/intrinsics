'use strict';

const {
  GetIntrinsic,
  GetIntrinsicNameByAlias
} = require('#internal');

const TypeError = GetIntrinsic('TypeError');

const GetIntrinsicOrThrow = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  const intrinsic = GetIntrinsic(intrinsicName || name);
  if (intrinsic === undefined) {
    throw new TypeError(`Intrinsic ${intrinsicName ? `'${intrinsicName}' for alias ` : ''}'${name}' is not defined`);
  }
  return intrinsic;
}

module.exports = GetIntrinsicOrThrow;

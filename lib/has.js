'use strict';

const HasIntrinsic = require('#abstract/HasIntrinsic');

const has = name => {
  const intrinsicName = `${name}`;
  return HasIntrinsic(intrinsicName);
}

module.exports = has;

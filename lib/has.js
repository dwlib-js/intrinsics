'use strict';

const HasIntrinsic = require('#abstract/HasIntrinsic');

function has(name) {
  const intrinsicName = `${name}`;
  return HasIntrinsic(intrinsicName);
}

module.exports = has;

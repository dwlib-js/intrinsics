'use strict';

const GetIntrinsic = require('#abstract/GetIntrinsic');
const GetIntrinsicOrThrow = require('#abstract/GetIntrinsicOrThrow');

function get(name, canMissing) {
  const intrinsicName = `${name}`;
  return canMissing ? GetIntrinsic(intrinsicName) : GetIntrinsicOrThrow(intrinsicName);
}

module.exports = get;

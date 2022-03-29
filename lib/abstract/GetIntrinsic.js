'use strict';

const {
  GetIntrinsic: $GetIntrinsic,
  GetIntrinsicNameByAlias
} = require('#internal');

const GetIntrinsic = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  return $GetIntrinsic(intrinsicName || name);
}

module.exports = GetIntrinsic;

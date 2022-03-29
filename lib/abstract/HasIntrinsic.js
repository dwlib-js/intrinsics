'use strict';

const {
  GetIntrinsicNameByAlias,
  HasIntrinsic: $HasIntrinsic
} = require('#internal');

const HasIntrinsic = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  return $HasIntrinsic(intrinsicName || name);
}

module.exports = HasIntrinsic;

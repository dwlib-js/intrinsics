'use strict';

const $ = require('#internal');

const GetIntrinsicNameByAlias = $.GetIntrinsicNameByAlias;
const $HasIntrinsic = $.HasIntrinsic;

const HasIntrinsic = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  return $HasIntrinsic(intrinsicName || name);
}

module.exports = HasIntrinsic;

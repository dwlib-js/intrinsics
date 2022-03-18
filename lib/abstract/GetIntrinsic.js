'use strict';

const $ = require('#internal');

const $GetIntrinsic = $.GetIntrinsic;
const GetIntrinsicNameByAlias = $.GetIntrinsicNameByAlias;

const GetIntrinsic = name => {
  const intrinsicName = GetIntrinsicNameByAlias(name);
  return $GetIntrinsic(intrinsicName || name);
}

module.exports = GetIntrinsic;

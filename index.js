/*!
 * paqs
 * Copyright (c) 2015 intuitivcloud Systems <engineering@intuitivcloud.com>
 * BSD-3-Clause Licensed
 */

'use strict';

var rex = /([\w\d\+\.%$\-_]+)=?([\w\d\+\.%$\-_]+)?&?/g,
    spRex = /\+/g;

module.exports = function paqs(qs) {
  var params = {},
      dec = decodeURIComponent,
      isarr = Array.isArray,
      m, k, v;

  rex.lastIndex = 0;
  while ((m = rex.exec(qs)) && m.length === 3) {
    k = dec(m[1].replace(spRex, ' '));
    v = m[2] && dec(m[2].replace(spRex, ' '));

    if (k in params && isarr(params[k])) params[k].push(v);
    if (k in params && !isarr(params[k])) params[k] = [params[k], v];
    if (!(k in params)) params[k] = v;
  }

  return params;
};


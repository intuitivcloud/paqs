# paqs
A minuscule isomorphic library to parse query-strings

[![npm Version](https://img.shields.io/npm/v/paqs.svg)](https://www.npmjs.com/package/paqs)
[![Build Status](https://travis-ci.org/intuitivcloud/paqs.svg)](https://travis-ci.org/intuitivcloud/paqs)
[![Dependency Status](https://david-dm.org/intuitivcloud/paqs.svg)](https://david-dm.org/intuitivcloud/paqs)
[![License](https://img.shields.io/badge/license-New%20BSD-blue.svg)](https://github.com/intuitivcloud/paqs)

## Installation

### Node

```bash
$ npm install paqs
```

### Browser

Copy the file `paqs.min.js` in the `dist` folder and refer to it in your HTML:

```html
<script src="/js/paqs.min.js"></script>
```

`paqs` will now be available via `window.paqs`.

## Usage

Basic example:

```js
var qs = paqs('?st=1&lt=340');

qs.st;    // => '1'
qs.lt;    // => '340'
```

Multiple values for the same parameter:

```js
var qs = paqs('foo=bar&foo=baz');

qs.foo;   // => ['bar', 'baz']
```

Parameters without values:

```js
var qs = paqs('foo=bar&key');

qs.foo;   // => 'bar'
qs.key;   // => undefined
```

## License

Copyright (c) 2015, intuitivcloud Systems &lt;engineering@intuitivcloud.com&gt;    
All rights reserved.

Redistribution and use in source and binary forms, with or without
modification, are permitted provided that the following conditions are met:

* Redistributions of source code must retain the above copyright notice, this
  list of conditions and the following disclaimer.

* Redistributions in binary form must reproduce the above copyright notice,
  this list of conditions and the following disclaimer in the documentation
  and/or other materials provided with the distribution.

* Neither the name of signalman nor the names of its
  contributors may be used to endorse or promote products derived from
  this software without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS"
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE
DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE
FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR
SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER
CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY,
OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE
OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.

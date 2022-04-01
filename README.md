<!--

@license Apache-2.0

Copyright (c) 2021 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# Identity Function

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Evaluate the [identity function][identity-function] of a single-precision [complex][@stdlib/complex/float32] floating-point number.

<section class="intro">

The [identity-function][identity-function] is defined as

<!-- <equation class="equation" label="eq:identity_function" align="center" raw="f(z) = z" alt="Identity function"> -->

<div class="equation" align="center" data-raw-text="f(z) = z" data-equation="eq:identity_function">
    <img src="https://cdn.jsdelivr.net/gh/stdlib-js/stdlib@79c18caa8e6697ecbe8bcf813a8d54a470168a75/lib/node_modules/@stdlib/math/base/special/cidentityf/docs/img/equation_identity_function.svg" alt="Identity function">
    <br>
</div>

<!-- </equation> -->

for all `z`.

</section>

<!-- /.intro -->



<section class="usage">

## Usage

```javascript
import cidentityf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cidentityf@esm/index.mjs';
```

#### cidentityf( z )

Evaluates the [identity function][identity-function] for a single-precision [complex][@stdlib/complex/float32] floating-point number.

```javascript
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import real from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-real@esm/index.mjs';
import imag from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-imag@esm/index.mjs';

var v = cidentityf( new Complex64( -1.0, 2.0 ) );
// returns <Complex64>

var re = real( v );
// returns -1.0

var im = imag( v );
// returns 2.0
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import discreteUniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-base-discrete-uniform@esm/index.mjs';
import Complex64 from 'https://cdn.jsdelivr.net/gh/stdlib-js/complex-float32@esm/index.mjs';
import cidentityf from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-cidentityf@esm/index.mjs';

var z;
var i;
for ( i = 0; i < 100; i++ ) {
    z = new Complex64( discreteUniform( -50, 50 ), discreteUniform( -50, 50 ) );
    console.log( 'identity(%s) = %s', z, cidentityf( z ) );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- C interface documentation. -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-base-special-cidentityf.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-base-special-cidentityf

[test-image]: https://github.com/stdlib-js/math-base-special-cidentityf/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/math-base-special-cidentityf/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-base-special-cidentityf/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-base-special-cidentityf?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-base-special-cidentityf.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-base-special-cidentityf/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-base-special-cidentityf/tree/deno
[umd-url]: https://github.com/stdlib-js/math-base-special-cidentityf/tree/umd
[esm-url]: https://github.com/stdlib-js/math-base-special-cidentityf/tree/esm

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-base-special-cidentityf/main/LICENSE

[identity-function]: https://en.wikipedia.org/wiki/Identity_function

[@stdlib/complex/float32]: https://github.com/stdlib-js/complex-float32/tree/esm

</section>

<!-- /.links -->

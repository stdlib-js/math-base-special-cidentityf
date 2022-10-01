/**
* @license Apache-2.0
*
* Copyright (c) 2021 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var bench = require( '@stdlib/bench' );
var uniform = require( '@stdlib/random-base-uniform' );
var isnanf = require( '@stdlib/math-base-assert-is-nanf' );
var Complex64 = require( '@stdlib/complex-float32' );
var real = require( '@stdlib/complex-real' );
var imag = require( '@stdlib/complex-imag' );
var pkg = require( './../package.json' ).name;
var cidentityf = require( './../lib' );


// MAIN //

bench( pkg, function benchmark( b ) {
	var values;
	var y;
	var i;

	values = [
		new Complex64( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) ),
		new Complex64( uniform( -500.0, 500.0 ), uniform( -500.0, 500.0 ) )
	];

	b.tic();
	for ( i = 0; i < b.iterations; i++ ) {
		y = cidentityf( values[ i%values.length ] );
		if ( isnanf( real( y ) ) ) {
			b.fail( 'should not return NaN' );
		}
	}
	b.toc();
	if ( isnanf( imag( y ) ) ) {
		b.fail( 'should not return NaN' );
	}
	b.pass( 'benchmark finished' );
	b.end();
});

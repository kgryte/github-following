'use strict';

// MODULES //

var tape = require( 'tape' );
var following = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.equal( typeof following, 'function', 'main export is a function' );
	t.end();
});

tape( 'module exports a factory method', function test( t ) {
	t.equal( typeof following.factory, 'function', 'export includes a factory method' );
	t.end();
});

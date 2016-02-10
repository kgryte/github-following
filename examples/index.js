'use strict';

var following = require( './../lib' );

var opts = {
	'useragent': 'beep-boop-bop',
	'username': 'kgryte'
};

following( opts, clbk );

function clbk( error, results, info ) {
	if ( info ) {
		console.error( info );
	}
	if ( error ) {
		throw new Error( error.message );
	}
	console.log( results );
}
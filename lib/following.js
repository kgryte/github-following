'use strict';

// MODULES //

var factory = require( './factory.js' );


// FOLLOWING //

/**
* FUNCTION: following( opts, clbk )
*	Gets who a user is following.
*
* @param {Object} opts - function options
* @param {String} [opts.token] - Github access token
* @param {String} [opts.username] - Github username
* @param {String} [opts.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Void}
*/
function following( opts, clbk ) {
	factory( opts, clbk )();
} // end FUNCTION following()


// EXPORTS //

module.exports = following;

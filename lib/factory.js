'use strict';

// MODULES //

var isFunction = require( 'validate.io-function' );
var merge = require( 'utils-merge2' );
var get = require( '@kgryte/github-get' );
var validate = require( './validate.js' );
var defaults = require( './defaults.json' );


// FACTORY //

/**
* FUNCTION: factory( options, clbk )
*	Returns a function for fetching who a user is following.
*
* @param {Object} options - function options
* @param {String} [options.token] - Github access token
* @param {String} [options.username] - Github username
* @param {String} [options.useragent] - user agent string
* @param {Function} clbk - callback to invoke upon query completion
* @returns {Function} function for getting who a user is following
*/
function factory( options, clbk ) {
	var opts;
	var err;
	opts = merge( {}, defaults );
	err = validate( opts, options );
	if ( err ) {
		throw err;
	}
	if ( !isFunction( clbk ) ) {
		throw new TypeError( 'invalid input argument. Callback argument must be a function. Value: `' + clbk + '`.' );
	}
	if (
		opts.token === void 0 &&
		opts.username === void 0
	) {
		throw new Error( 'invalid input argument. Must provide a username or, to get who an authenticated user is following, an access token.' );
	}
	if ( opts.username ) {
		opts.pathname += 'users/' + opts.username + '/';
	} else {
		opts.pathname += 'user/';
	}
	opts.pathname += 'following';
	/**
	* FUNCTION: following()
	*	Gets who a user is following.
	*
	* @returns {Void}
	*/
	return function following() {
		get( opts, done );
		/**
		* FUNCTION: done( error, data, info )
		*	Callback invoked after resolving resources.
		*
		* @private
		* @param {Error|Null} error - error object
		* @param {Object[]} data - query data
		* @param {Object} info - response info
		* @returns {Void}
		*/
		function done( error, data, info ) {
			error = error || null;
			data = data || null;
			info = info || null;
			clbk( error, data, info );
		} // end FUNCTION done()
	}; // end FUNCTION following()
} // end FUNCTION factory()


// EXPORTS //

module.exports = factory;

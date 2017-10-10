'use strict';

/**
 *
 * @type {Array.<string>}
 */
var methods = require( '../models/methods' );

/**
 * @type {processArg}
 */
var processArg = require( './process-arg' );

/**
 * @param {string} arg1
 * @param {Array.<string>} arg1
 *
 * @param {string} arg2
 * @param {Array.<string>} arg2
 *
 * @returns {Array.<string>}
 */
function getMethods( arg1, arg2 ) {
  var result = [];
  var user_methods;

  user_methods = [].concat( processArg( arg1, 'string' ) );
  user_methods = [].concat( user_methods, processArg( arg2, 'string' ) );

  // default if no method is provided
  if ( user_methods.length === 0 ) {
    return [ 'GET' ];
  }

  // return all methods
  if ( user_methods.indexOf( '*' ) !== -1 ) {
    return methods;
  }

  // validate each user provided method and add to result if valid
  user_methods.forEach(
    /**
     * @param {string} method
     * @returns {undefined}
     */
    function ( method ) {
      if ( methods.indexOf( method.toUpperCase() ) !== -1 ) {
        result.push( method.toUpperCase() );
      }
    }
  );

  return result;
}

module.exports = getMethods;

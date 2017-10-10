'use strict';

/**
 * @type {processArg}
 */
var processArg = require( './process-arg' );

/**
 * @param {Function} arg1
 * @param {Array.<Function>} arg1
 *
 * @param {Function} arg2
 * @param {Array.<Function>} arg2
 *
 * @returns {Array.<Function>}
 */
function getHandlers( arg1, arg2 ) {
  var result;

  result = [].concat( processArg( arg1, 'function' ) );
  result = [].concat( result, processArg( arg2, 'function' ) );

  return result;
}

module.exports = getHandlers;

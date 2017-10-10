'use strict';

/**
 * @param {string} arg
 * @param {Array.<string>} arg
 * @param {Function} arg
 * @param {Array.<Function>} arg
 *
 * @param {string} type
 *
 * @returns {Array}
 */
function processArg( arg, type ) {
  var result = [];

  if ( typeof arg === type ) {
    result.push( arg );
  }

  if ( Array.isArray( arg ) ) {
    arg.forEach(
      function ( item ) {
        if ( typeof item === type ) {
          result.push( item );
        }
      }
    );
  }

  return result;
}

module.exports = processArg;

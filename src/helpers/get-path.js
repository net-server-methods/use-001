'use strict';

/**
 * @param {string} user_path
 * @returns {string}
 */
function getPath( user_path ) {
  var result = '.';

  if ( typeof user_path === 'string' ) {
    result = user_path;
  }

  return result;
}

module.exports = getPath;

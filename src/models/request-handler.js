'use strict';

/**
 * @param {string} path
 * '.'  is used to add the handler as a prefix handler, run before all other handlers
 * '/'  other strings are interpreted as a route; e.g. '/', '/user', '/user:id'
 * '..' is used to add the handler as a suffix handler, run after all other handlers
 *
 * @param {Function} handler
 * @param {string} method
 *
 * @constructor
 */
function RequestHandler( path, handler, method ) {
  /**
   * @type {string}
   */
  this.method = method;

  /**
   * @type {Function}
   */
  this.handler = handler;

  /**
   * @type {string}
   */
  this.path = path;
}

module.exports = RequestHandler;

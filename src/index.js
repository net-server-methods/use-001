/* eslint consistent-this: off */
/* eslint no-invalid-this: off */

'use strict';

/**
 * @type {getHandlers}
 */
var getHandlers = require( './helpers/get-handlers' );

/**
 * @type {getMethods}
 */
var getMethods = require( './helpers/get-methods' );

/**
 * @type {getPath}
 */
var getPath = require( './helpers/get-path' );

/**
 * @type {RequestHandler}
 */
var RequestHandler = require( './models/request-handler' );

/**
 * provides a method for adding request handlers to a Server
 *
 * dependencies
 * @external {Array.<RequestHandler>} Server.request_handlers
 *
 * path
 * '.'  is used to add the handler as a prefix handler, run before all other handlers
 * '/'  other strings are interpreted as a route; e.g. '/', '/user', '/user:id'
 * '..' is used to add the handler as a suffix handlers, run after all other handlers
 *
 * method(s)
 * defaults to GET if no methods are provided
 * user_method '*' can be used to apply the handler to all http methods on the given path
 *
 * @param {string} arg1
 * a path
 *
 * @param {Function} arg1
 * a single handler
 *
 * @param {Array.<Function>} arg1
 * an array of handlers
 *
 * @param {Function} arg2
 * a single handler
 *
 * @param {Array.<Function>} arg2
 * an array of handlers
 *
 * @param {string} arg2
 * a single method
 *
 * @param {Array.<string>} arg2
 * an array of methods
 *
 * @param {string} arg3
 * a single method
 *
 * @param {Array.<string>} arg3
 * an array of methods
 *
 * @returns {undefined}
 */
function use( arg1, arg2, arg3 ) {
  /**
   * @type {string}
   */
  var path = getPath( arg1 );

  /**
   * @type {Array.<Function>}
   */
  var handlers = getHandlers( arg1, arg2 );

  /**
   * @type {Array.<string>}
   */
  var methods = getMethods( arg2, arg3 );

  /**
   * @type {Object}
   * @property {Object} request_handlers
   */
  var Server = this;

  methods.forEach(
    /**
     * @param {string} method
     * @returns {undefined}
     */
    function ( method ) {
      if ( !Server.request_handlers[ method ][ path ] ) {
        Server.request_handlers[ method ][ path ] = [];
      }

      handlers.forEach(
        /**
         * @param {Function} handler
         * @returns {undefined}
         */
        function ( handler ) {
          Server.request_handlers[ method ][ path ].push( new RequestHandler( path, handler, method ) );
        }
      );
    }
  );
}

module.exports = use;

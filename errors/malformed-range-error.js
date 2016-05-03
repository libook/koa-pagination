
/**
 * Module dependencies.
 */

const HttpError = require('standard-http-error');
const util = require('util');

/**
 * Constructor.
 */

function MalformedRangeError() {
  HttpError.call(this, 412);
}

/**
 * Inherit from `HttpError`.
 */

util.inherits(MalformedRangeError, HttpError);

/**
 * Export `MalformedRangeError`.
 */

module.exports = MalformedRangeError;

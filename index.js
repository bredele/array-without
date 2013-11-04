var diff = require('diff');

/**
 * Return a copy of an array without
 * the passed values.
 * 
 * @param {Array} arr 
 * @return {Array} 
 * @api public
 */

module.exports = function(arr) {
	return diff(arr, [].slice.call(arguments, 1));
};
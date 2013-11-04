var filter = require('filter');

/**
 * Return a copy of an array without
 * the passed values.
 * 
 * @param {Array} arr 
 * @return {Array} 
 * @api public
 */

module.exports = function(arr) {
	var args = [].slice.call(arguments, 1);
	return filter(arr, function(val){
		return !~args.indexOf(val);
	});
};
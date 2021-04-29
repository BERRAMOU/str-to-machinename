'use strict';

/**
*	Convert string to machinename.
*
*	@param {string} input Input string to convert.
*	@param {string} separator Separator used for convertion.
*	@returns {string} Converted string.
*/
const strToMachinename = (input, separator) => {
	if (typeof input !== 'string') {
		throw new TypeError('Expected a string');
	}

	if (!['-', '_', '/'].includes(separator)) {
		throw new TypeError('Expected one of the following separator -, _, /');
	}

	// Normalize the string in case there is french characters.
	input = input.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
	// Convert it to lower case and
	input = input.toLowerCase();
	// Convert the string to machine name with desired separator.
	input = input.replace(/\s+/g, separator);
	// Remove all punctuations from converted string.
	input = input.replace(/[.,#!$%^&*;:{}=`~()"']/g, '');

	return input;
};

module.exports = strToMachinename;

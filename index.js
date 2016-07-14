var template = require('lodash.template');

module.exports = function(source) {
	this.cacheable && this.cacheable();
	var tpl = template(source, null, this.options.tplSettings);
	return 'var _ = require(\'lodash.template\');\n' +
	'var escapeHTML = require(\'lodash.escape\');\n' +
	'_.escape=escapeHTML \n' +
	'module.exports = ' + tpl;
};
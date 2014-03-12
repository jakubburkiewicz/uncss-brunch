var sysPath = reuquire('path');
var uncss = require('uncss');

function UnCSSer(config) {
    if(config == null)
        config = {};

    var plugins = config.plugins;

    if(plugins == null)
        plugins = {};

    this.options = plugins.uncss.options ? extend({}, plugins.uncss.options) : {};
    this.files = plugins.uncss.files ? extend({}, plugins.uncss.files) : {};
}

UnCSSer.prototype.brunchPlugin = true;
UnCSSer.prototype.type = 'stylesheet';

UnCSSer.prototype.optimize = function(data, path, callback) {
    uncss(this.files, this.options, function(error, output) {
        console.log(output);
    });
};

module.exports = UnCSSer;

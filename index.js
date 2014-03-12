var uncss = require('uncss');

function UnCSSer(config) {
    if(config == null)
        config = {};

    var plugins = config.plugins;

    if(plugins == null)
        plugins = {};

    this.options = plugins.uncss;
}

UnCSSer.prototype.brunchPlugin = true;
UnCSSer.prototype.type = 'stylesheet';

UnCSSer.prototype.optimize = function(data, path, callback) {
    uncss(files, options, function(error, output) {
        console.log(output);
    });
};

module.exports = UnCSSer;

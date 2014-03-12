var uncss = require('uncss');

function UnCSSer(config) {
    if(config == null)
        config = {};

    var plugins = config.plugins;

    if(plugins == null)
        plugins = {};

    this.options = plugins.uncss.options;
    this.files = plugins.uncss.files;
}

UnCSSer.prototype.brunchPlugin = true;
UnCSSer.prototype.type = 'stylesheet';

UnCSSer.prototype.optimize = function(data, path, callback) {
    console.log(this.options);

    uncss(this.files, this.options, function(error, output) {
        console.log(output);
    });
};

module.exports = UnCSSer;

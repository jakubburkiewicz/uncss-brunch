var uncss = require('uncss');

var extend = function(object, source) {
    var value;
    for (var key in source) {
        value = source[key];
        object[key] = (typeof value === 'object' && !(value instanceof RegExp)) ? (Array.isArray(value) ? value.slice() : extend({}, value)) : value;
    }
    return object;
};

function UnCSSer(config) {
    if(config == null)
        config = {};

    var plugins = config.plugins;

    if(plugins == null) {
        plugins = {};
        plugins.uncss = {};
    }

    if(plugins.uncss != null) {
        this.options = plugins.uncss.options ? extend({}, plugins.uncss.options) : {};

        if('function' === typeof plugins.uncss.files) {
            this.files = plugins.uncss.files;
        }
        else if(plugins.uncss.files) {
            this.files = extend([], plugins.uncss.files);
        }
        else {
            this.files = [];
        }
    }
}

UnCSSer.prototype.brunchPlugin = true;
UnCSSer.prototype.type = 'stylesheet';
UnCSSer.prototype.extension = 'css';

UnCSSer.prototype.optimize = function(data, path, callback) {
    if(this.options != null) {

        if(this.files == null) {
            this.files = [];
        }

        var optimize = function(files) {
            uncss(files, this.options, function(error, output) {
                var optimized = output;

                return process.nextTick(function() {
                    return callback(error, optimized || data);
                });
            });
        }
        .bind(this);

        if('function' === typeof this.files) {
            this.files(path, function(err, files) {
                if(err) { callback(err, data); }
                else { optimize(files); }
            });
        }
        else {
            optimize(this.files);
        }
    } 
    else {
        error = "UnCSS: Configuration missed."

        return process.nextTick(function() {
            return callback(error, data);
        });
    }
};

module.exports = UnCSSer;

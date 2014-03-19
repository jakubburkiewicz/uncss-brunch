# uncss-brunch

Adds [UnCSS](https://github.com/giakki/uncss) support to [brunch](http://brunch.io/).

## Tip

If you need both cut unused CSS and minify the code, check:

- [clean-css-uncss-brunch](https://github.com/jakubburkiewicz/clean-css-uncss-brunch)

## Usage

### Install

Install the plugin via npm with `npm install --save uncss-brunch`

Or add it to package.json dependencies: `"uncss-brunch":"1.0.0"`

### Config

To specify options, use `config.plugins.uncss` object in Brunch config file.
You can use all standard options for Brunch.

Example:

    plugins:
        uncss:
            options:
                csspath: '../styles'
                htmlroot: 'build'
            files: ['index.html', 'about.html']

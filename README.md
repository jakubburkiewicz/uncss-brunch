# uncss-brunch

Adds [UnCSS](https://github.com/giakki/uncss) support for [brunch](http://brunch.io/).

## Tip

If you want to have both:  unused CSS removed and code file minfied, check my other plugin:

- [clean-css-uncss-brunch](https://github.com/jakubburkiewicz/clean-css-uncss-brunch)

## Usage

### Installation

Install the plugin via npm:

```
npm install --save uncss-brunch // Adds it to your package.json dependencies
```

### Config

To specify options, use `config.plugins.uncss` object in Brunch config file. Follow standard Brunch conventions. 

Example:

    plugins:
        uncss:
            options:
                csspath: '../styles'
                htmlroot: 'build'
            files: ['index.html', 'about.html']

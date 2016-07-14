## 感谢(Thanks)
感谢 [tpl-loader](https://github.com/grassator/tpl-loader)给我的灵感

## 安装(Installation)

`npm install tpl-loader`

## 使用(Usage)

[Documentation: Using loaders](http://webpack.github.io/docs/using-loaders.html)

1. 直接在`require`方法上使用
``` javascript
var template = require("tpl-lite!./file.html");
// => returns the template function compiled with undesrcore (lodash) templating engine.

// And then use it somewhere in your code
template(data) // Pass object with data
```
2. 在`webpack.config.js`使用
```javascript
module: {
	loaders: [{
		test: /\.tpl$/,
		loader: "tpl-lite"
	}]
}
```

You can add `_.template` settings as a `tplSettings` property inside webpack config file to specify options for the loader, for example:

``` javascript
    ...
    tplSettings: {
        escape: /\{\{([^{].*?)\}\}/gm,
        interpolate: /\{\{\{(.+?)\}\}\}/gm,
        evaluate: /\{\%(.+?)\%\}/g
    }
    ...
```

## License

MIT (http://www.opensource.org/licenses/mit-license.php)




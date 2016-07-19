## 感谢(Thanks)
感谢 [tpl-loader](https://github.com/grassator/tpl-loader)给我的灵感,
不过两者的区别是`tpl-loader`需要整一个`lodash`,但是`tpl-lite-loader`只引用了
`lodash.template`模块，最后编译之后的代码量减少了大部分

## 安装(Installation)
1. `npm install lodash.template`
2. `npm install tpl-lite-loader`

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

你还可以自定义自己的`template`配置, 比如
``` javascript
    module: {
    	loaders: [{
    		test: /\.tpl$/,
    		loader: "tpl-lite"
		    tplSettings: {
		        escape: /\{\{([^{].*?)\}\}/gm,
		        interpolate: /\{\{\{(.+?)\}\}\}/gm,
		        evaluate: /\{\%(.+?)\%\}/g
		    }
    	}]
    }
    ...
```

## License

[MIT](http://www.opensource.org/licenses/mit-license.php)




// webpack.config.js
const HtmlWebPackPlugin = require('html-webpack-plugin');
const path = require('path');
module.exports = {
	mode: 'development',
	devtool: 'inline-source-map',
	context: __dirname,
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'main.js',
	},

	plugins: [new HtmlWebPackPlugin()],
};

module.exports = {
	module: {
		rules: [
			{
				test: /.(js|jsx)?$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env', '@babel/preset-react'],
					},
				},
			},
			{
				test: /\.less$/,
				use: ['style-loader', 'css-loader', 'less-loader'],
			},
		],
	},
};

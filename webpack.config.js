const webpack = require('webpack');
const path = require('path');

module.exports = {
	devtool: "source-map",
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, "dist"),
		filename: 'bundle.js'
	},
	module: {
		rules: [
		{
			loader: "babel-loader",
			test: /\.js$/,
			include: [
				path.resolve(__dirname, "src")
			],
			exclude: [
				path.resolve(__dirname, "/node_modules")
			]
		}]
	},
	target: "web",
	devServer: {
		port: 3000
	},
	plugins: [
		new webpack.HotModuleReplacementPlugin()
	]
};

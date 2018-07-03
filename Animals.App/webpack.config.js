const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const extractSass = new ExtractTextPlugin({
	filename: 'styles/app.css', //path.join(__dirname, 'dist/stlye/app.css'),
});

/*
 * SplitChunksPlugin is enabled by default and replaced
 * deprecated CommonsChunkPlugin. It automatically identifies modules which
 * should be splitted of chunk by heuristics using module duplication count and
 * module category (i. e. node_modules). And splits the chunks…
 *
 * It is safe to remove "splitChunks" from the generated configuration
 * and was added as an educational example.
 *
 * https://webpack.js.org/plugins/split-chunks-plugin/
 *
 */

module.exports = {
	module: {
		rules: [
			{
				test: /\.js$/,
				include: [path.resolve(__dirname, 'src')],
				use: [{
					loader: 'ng-annotate-loader',
					options: {
						ngAnnotate: "ng-annotate-patched",
						es6: true,
						explicitOnly: false
					}
				},
				{
					loader: 'babel-loader',
					options: {
						presets: [
							[
								'es2015',
								{
									'modules': false
								}
							]
						]
					}
				},
				],
			},
			{
				test: /.html$/,
				exclude: /index.html$/,
				loader: 'raw-loader',
			},
			{
				test: /\.scss$/,
				use: extractSass.extract({
					use: [{
						loader: 'css-loader'
					}, {
						loader: 'sass-loader'
					}],
					// use style-loader in development
					fallback: 'style-loader',
					publicPath: '../',
				})
			}
		]
	},
	plugins: [
		extractSass
	],

	mode: 'production',
	performance: { hints: false }
};

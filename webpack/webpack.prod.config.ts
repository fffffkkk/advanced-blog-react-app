import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';
import common from './webpack.common';

/** @type {import('webpack').Configuration} */
const prodConfig = {
	mode: 'production',
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.(css)$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
		],
	},
	optimization: {
		splitChunks: {
			chunks: 'all',
			name: false,
			cacheGroups: {
				vendors: {
					test: /[\\/]node_modules[\\/]/,
					name: 'vendor',
				},
			},
		},
	},
	plugins: [new MiniCssExtractPlugin()],
};

// @ts-ignore
module.exports = merge(common, prodConfig);

//@ts-nocheck
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { merge } from 'webpack-merge';

import common from './webpack.common';

module.exports = merge(common, {
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
	plugins: [new MiniCssExtractPlugin({ filename: '[name].[contenthash].css' })],
});

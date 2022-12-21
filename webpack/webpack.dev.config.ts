//@ts-nocheck
import path from 'path';
import { merge } from 'webpack-merge';

import common from './webpack.common';

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, '../dist'),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
		],
	},
});

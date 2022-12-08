//@ts-nocheck
import path from 'path';
import common from './webpack.common';
import { merge } from 'webpack-merge';

module.exports = merge(common, {
	mode: 'development',
	devtool: 'inline-source-map',
	devServer: {
		static: path.join(__dirname, 'build'),
		historyApiFallback: true,
		port: 4000,
		open: true,
		hot: true,
	},
});

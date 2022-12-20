import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import { HotModuleReplacementPlugin } from 'webpack';
import { merge } from 'webpack-merge';
import common from './webpack.common';

/** @type {import('webpack').Configuration} */
const devConfig = {
	mode: 'development',
	devServer: {
		port: 4000,
		contentBase: '../dist',
		historyApiFallback: true,
		open: true,
		hot: true,
	},
	target: 'web',
	plugins: [new HotModuleReplacementPlugin(), new ReactRefreshWebpackPlugin()],
	devtool: 'eval-source-map',
};

// @ts-ignore
module.exports = merge(common, devConfig);

//@ts-nocheck
import path from 'path';
import resolves from './webpackResolves';
import modules from './webpackModules';
import plugins from './webpackPlugins';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
		clean: true,
	},
	module: {
		...modules,
	},
	optimization: {
		minimize: true,
		minimizer: [
			new ImageMinimizerPlugin({
				minimizer: {
					implementation: ImageMinimizerPlugin.imageminMinify,
					options: {
						plugins: [['mozjpeg', { quality: 75 }]],
					},
				},
			}),
		],
	},
	resolve: {
		...resolves,
	},
	plugins: [...plugins],
};

export default config;

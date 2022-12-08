import path from 'path';
import { ProgressPlugin } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

const config = {
	entry: './src/index.tsx',
	output: {
		path: path.resolve(__dirname, 'build'),
		filename: '[name].[contenthash].js',
		publicPath: '/',
		clean: true,
	},
	module: {
		rules: [
			{
				test: /\.(ts|js)x?$/i,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.(bmp|gif|jpg|jpeg|png)$/,
				type: 'asset/resource',
			},
			{
				test: /\.svg/,
				type: 'asset/inline',
			},
		],
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
		extensions: ['.tsx', '.ts', '.js'],
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: 'src/index.html',
		}),
		new ForkTsCheckerWebpackPlugin({
			async: false,
		}),
		new ESLintPlugin({
			extensions: ['js', 'jsx', 'ts', 'tsx'],
		}),
		new CleanWebpackPlugin(),
		new ProgressPlugin(),
		new BundleAnalyzerPlugin({
			generateStatsFile: true,
		}),
	],
};

export default config;

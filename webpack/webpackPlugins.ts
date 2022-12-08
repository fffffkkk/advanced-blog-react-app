//@ts-nocheck
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import ESLintPlugin from 'eslint-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import { ProgressPlugin } from 'webpack';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin';

const plugins = [
	new HtmlWebpackPlugin({
		template: 'src/index.html',
	}),
	new ForkTsCheckerWebpackPlugin({
		async: false,
	}),
	new ESLintPlugin({
		extensions: ['js', 'jsx', 'ts', 'tsx'],
	}),
	new TsconfigPathsPlugin(),
	new CleanWebpackPlugin(),
	new ProgressPlugin(),
	new BundleAnalyzerPlugin({
		generateStatsFile: true,
	}),
];

export default plugins;

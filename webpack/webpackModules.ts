const modules = {
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
};

export default modules;

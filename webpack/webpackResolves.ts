import path from 'path';

const resolves = {
	alias: {
		'@': path.resolve(__dirname, 'src'),
	},
	extensions: ['.tsx', '.ts', '.js'],
};

export default resolves;

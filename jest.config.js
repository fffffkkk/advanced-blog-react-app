// /** @type {import('ts-jest').JestConfigWithTsJest} */
//
// module.exports = {
// 	preset: 'ts-jest',
// 	verbose: true,
// 	testEnvironment: 'jsdom',
// 	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
// };

//@ts-ignore

module.exports = {
	verbose: true,
	testEnvironment: 'jsdom',
	setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
	preset: 'ts-jest',
	moduleNameMapper: {
		'^@/(.*)$': '<rootDir>/src/$1',
	},
};

// export default jestConfig;

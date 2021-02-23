module.exports = {
	root: true,
	ignorePatterns: ['config', 'dist', '**/*.config.js'],
	parserOptions: {
		ecmaFeatures: {
			jsx: true,
		},
		project: ['./tsconfig.eslint.json'], // Specify it only for TypeScript files
	},
	parser: '@typescript-eslint/parser',
	extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb-typescript-prettier'],
};

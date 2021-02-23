module.exports = {
	ignorePatterns: ['node_modules', 'config', 'dist', '**/*.config.js'],
	env: {
		browser: true,
		es2020: true,
		jest: true
	},
	extends: [
		'plugin:react/recommended',
		'airbnb',
		'plugin:@typescript-eslint/recommended',
		'plugin:prettier/recommended',
	],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: ['./tsconfig.eslint.json'],
		ecmaFeatures: {
			jsx: true,
		},
		ecmaVersion: 11,
		sourceType: 'module',
	},
	plugins: ['react', '@typescript-eslint', 'react-hooks', 'prettier'],
	rules: {
		'react-hooks/rules-of-hooks': 'error',
		'react-hooks/exhaustive-deps': 'warn',
		'react/jsx-filename-extension': [
			1,
			{
				extensions: ['.tsx', '.jsx'],
			},
		],
		'import/prefer-default-export': 'off',
		'import/extensions': [
			'error',
			'ignorePackages',
			{
				ts: 'never',
				tsx: 'never',
				js: 'never',
				jsx: 'never',
			},
		],
		'prettier/prettier': 'error',
		'@typescript-eslint/explicit-module-boundary-types': 'off',
		'react/jsx-one-expression-per-line': 'off',
		'no-use-before-define': 'off',
	},
	settings: {
		'import/resolver': {
			typescript: {},
		},
	},
};

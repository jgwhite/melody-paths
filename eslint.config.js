import js from '@eslint/js';
import ts from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import svelte from 'eslint-plugin-svelte';
import svelteParser from 'svelte-eslint-parser';
import prettier from 'eslint-config-prettier';
import globals from 'globals';

export default [
	// Global ignores
	{
		ignores: [
			'.DS_Store',
			'node_modules',
			'build',
			'.svelte-kit',
			'package',
			'.env',
			'.env.*',
			'!.env.example',
			'pnpm-lock.yaml',
			'package-lock.json',
			'yarn.lock',
		],
	},

	// Base configuration for all JavaScript/TypeScript files
	js.configs.recommended,

	// TypeScript configuration
	{
		files: ['**/*.ts', '**/*.tsx', '**/*.js', '**/*.jsx'],
		languageOptions: {
			parser: tsParser,
			parserOptions: {
				sourceType: 'module',
				ecmaVersion: 2020,
			},
			globals: {
				...globals.browser,
				...globals.es2017,
				...globals.node,
			},
		},
		plugins: {
			'@typescript-eslint': ts,
		},
		rules: {
			...ts.configs.recommended.rules,
		},
	},

	// Svelte configuration
	...svelte.configs['flat/recommended'],
	{
		files: ['**/*.svelte'],
		languageOptions: {
			parser: svelteParser,
			parserOptions: {
				parser: tsParser,
				sourceType: 'module',
				ecmaVersion: 2020,
			},
			globals: {
				...globals.browser,
				...globals.es2017,
				...globals.node,
			},
		},
		rules: {
			// Disable new rules that weren't in eslint-plugin-svelte v2
			'svelte/prefer-svelte-reactivity': 'off',
			'svelte/require-each-key': 'off',
			'svelte/no-navigation-without-resolve': 'off',
		},
	},

	// Prettier configuration (should be last)
	prettier,
];

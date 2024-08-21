module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
    },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react-refresh/recommended',
    ],
    env: {
        browser: true,
        es2020: true,
    },
    plugins: ['react', 'react-hooks', 'react-refresh', '@typescript-eslint'],
    rules: {
        'constructor-super': 'off',
        // Temporarily remove other rules to isolate the issue
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};

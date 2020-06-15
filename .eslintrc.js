module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        'plugin:react/recommended',
        'airbnb',
    ],
    globals: {
        Atomics: 'readonly',
        SharedArrayBuffer: 'readonly',
    },
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: 'module',
    },
    plugins: [
        'react',
        '@typescript-eslint',
    ],
    rules: {
        'import/extensions': 0,
        'camelcase': 0,
        'no-console': 0,
        'react/jsx-filename-extension': 0,
        "import/prefer-default-export": 0,
        "react/jsx-props-no-spreading": 0,
        "@typescript-eslint/no-unused-vars": "error",
    },
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx", ".ts", ".tsx"],
                "paths": ["src"]
            }
        }
    },
    "ignorePatterns": ["*.json", "*.css"],
};
